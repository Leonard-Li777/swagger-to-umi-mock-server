const { uniqBy, debounce } = require('lodash');
const chokidar = require('chokidar');
const globby = require('globby');
const os = require('os');
const path = require('path');

const createSwaggerDocs = require('./swaggerDocs');

function path2mock(path) {
  return `/mock/${path.replace(/^\//, '')}`;
}
function getSwaggerSource(swaggerDocs) {
  if (swaggerDocs) {
    if (typeof swaggerDocs === 'string') {
      return { source: swaggerDocs, dataNode: 'default' };
    }
    if (typeof swaggerDocs === 'object') {
      if (/^http/i.test(swaggerDocs.source)) {
        return swaggerDocs;
      }
      return Object.assign(swaggerDocs, { source: `${networkAddress}/${swaggerDocs.source}` });
    }
  }
}
function getNetworkAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const osAPI of interfaces[name]) {
      const { address, family, internal } = osAPI;
      if (family === 'IPv4' && !internal) {
        return address || 'localhost';
      }
    }
  }
}
const port = process.env.PORT || 8001;
const ip = getNetworkAddress();
const networkAddress = `http://${ip}:${port}`;

export default function(
  api,
  {
    swaggerOutputPath,
    swaggerPath,
    swaggerDocs,
    apiKeyRename = {},
    apiPathToMockPath = path2mock,
    formatData,
  } = {},
) {
  const { cwd } = api;
  const absSwaggerPath = swaggerPath || `${cwd}/swagger`;
  const jsonPath = `${absSwaggerPath}/json`;
  const overridePath = `${absSwaggerPath}/override`;

  let source = [];
  if (swaggerDocs instanceof Array) {
    source = source.concat(swaggerDocs.map(docs => getSwaggerSource(docs)));
  } else {
    source.push(getSwaggerSource(swaggerDocs));
  }

  let sourceLocal = globby.sync(jsonPath, {
    expandDirectories: {
      extensions: ['json'],
    },
  });

  sourceLocal = sourceLocal.map(json => {
    const source = path.basename(json);
    return getSwaggerSource({ source, dataNode: 'default' });
  });

  source = uniqBy(source.concat(sourceLocal), 'source');

  api.addMiddlewareAhead(() => require('serve-static')(jsonPath));

  api.afterDevServer(opts => {
    console.log('-----Start watching the following directories for swagger api build!------');
    const watcher = chokidar.watch([overridePath, jsonPath]);
    watcher.on(
      'all',
      debounce(
        createSwaggerDocs.bind(null, {
          cwd,
          source,
          absSwaggerPath,
          swaggerOutputPath,
          apiKeyRename,
          apiPathToMockPath,
          formatData,
        }),
        100,
      ),
    );
    console.log(overridePath);
    console.log(jsonPath);
  });
}
