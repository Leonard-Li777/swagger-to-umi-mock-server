# swagger-to-umi-mock-server

Swagger 文档一健转 [umi mock 服务](https://umijs.org/zh/guide/mock-data.html#%E4%BD%BF%E7%94%A8-umi-%E7%9A%84-mock-%E5%8A%9F%E8%83%BD)
—— by [北森前端团队 beisen.com](https://www.beisen.com/)

---

## 特性

- 📦 **开箱即用**，umi 项目使用插件 umi-plugin-swagger-to-mock，非 umi 项目使用本项目提供的 umi-swagger-server，
- 🏈 **支持 swagger json 多来源**，可通过配置指定本地文件，也支持线上文件
- 🎉 **数据格式可定制**，可指定数据输出格式化
- 🚀 **支持 mock api 和线上 api 热切换**，通过配置 mock.js 文件提定具体的哪个 api 走 mock，哪个走线上
- 💈 **支持数据 override**，动态监听 override 目录，此目录里的 js 文件可精确将你的数据 merge 到指定 api 的返回数据，还可指定返回延迟时间
- 🐠 **支持 mockjs**，umi 和本插件均支持 mockjs 创建动态数据

## 快速上手

```bash
# umi项目安装
$ yarn add -D umi umi-plugin-swagger-to-mock
# or
$ npm install -D umi umi-plugin-swagger-to-mock

# 非umi项目安装
$ yarn add -D umi-swagger-server
# or
$ npm install -D umi-swagger-server

# umi项目启动(npm script)
$ PORT=8001 umi dev

# 非umi项目启动(npm script)
$ PORT=8001 umi-swagger-server

# 查看结果
$ curl -X POST http://localhost:8001/mock/store/order

```

# 项目目录结构

```bash
.
├── mock
│   ├── api.js // 普通umi mock文件，可省略
│   └── swagger.js // umi-plugin-swagger-to-mock 动态生成的mock文件
├── node_modules
├── package.json
├── src
│   ├── shared
│   │   └── api
│   │       ├── apiList.js // 动态生成的 api key 列表
│   │       ├── apiMap.js // 动态生成的 api key -> api路径列表
│   │       ├── apiPathToMockPath.js  // 用户自定义函数用于转换直实路径到mock路径
│   │       ├── apiRename.js // 用户自定义对象用于api重命名
│   │       ├── index.js // 动态生成，用户在代码中导入，可获得所有api的key到路径的映射
│   │       └── mock.js // 用户自定义mock文件，可以提定哪些api走mock路径
│   └── you-business-code.js
└── swagger
    ├── json // 分别为需要解析的swagger json文件,会动态遍历此目录
    │   ├── swagger.java.json
    │   └── swagger.net.json
    └── override // 你需要复写的api数据文件,会动态遍历此目录，同步更新mock/swagger.js
        ├── alipay.js
        ├── home.js
        └── team.js
```

# 文件详细说明

- api.js [使用 umi 的 mock 功能](https://umijs.org/zh/guide/mock-data.html#%E4%BD%BF%E7%94%A8-umi-%E7%9A%84-mock-%E5%8A%9F%E8%83%BD)

- apiPathToMockPath.js 用户自定义函数用于转换直实路径到 mock 路径，一般用于代理识别和调试实别，可省略，默认值

```javascript
module.exports = function(path) {
  return `/mock/${path.replace(/^\//, '')}`
}
```

- apiMap.js 动态生成的 key-path 映射文件

```javascript
{
 list: '/queries/third/asset/list',
 list: '/queries/client/app/list',
 checkstand: '/queries/client/checkstand',
 ...
}
```

- apiRename.js 用户自定义对象用于 api 重命名，因为来自 swagger json 的 api key，都取自 api 路径的最末尾，可能存在重复，如上面 apiMap.js 文件的 list key 重复，需要通过 apiRename.js 重命名

```javascript
module.exports = {
  appList: '/queries/client/app/list',
}
```

- mock.js 用户自定义 mock 文件，可以指定哪些 api 走 mock 路径, 来源参考动态更新的 ./apiList.js

```javascript
const { uniq } = require('lodash')
module.exports = uniq([
  //'list', 注释掉指定API，将走线上
  'appList', // 此API会走Mock服务器
  'checkstand', // 此API会走Mock服务器
])
```

- index.js 动态生成，用户在代码中导入，可获得所有 api 的 key 到真实路径或 mock 路径的映射

```javascript
import api from 'shared/api'

fetch(api.list, { method: 'POST' }).then(response => {...}) // 请求线上api
fetch(api.appList).then(response => {...}) // 请求mock api
fetch(api.checkstand, { method: 'POST' }).then(response => {...}) // 请求mock api

console.log(api)
-------------------
=> {
 list: '/queries/third/asset/list',
 appList: '/mock/queries/client/app/list',
 checkstand: '/mock/queries/client/checkstand',
 ...
}
```

# 配置.umirc.js

在项目根目录创建.umirc.js 文件

```javascript
const path = require('path')
module.exports = {
 plugins: [
  [
   'umi-plugin-swagger-to-mock',
   {
    swaggerOutputPath: path.join(__dirname, 'src/shared/api'), // 可省略默认为src/shared/api
    swaggerPath: path.join(__dirname, 'swagger'), // 可省略，默认为swagger, 此目录须包含两个子目录json 和 override
    swaggerDocs: [ // 可省略，默认为swagger/json目录下所有json文件
    { source: 'http://petstore.swagger.io/v2/swagger.json', dataNode: 'default' }, //   dataNode 为swagger文档存放数据的节点，一般取值: default | 200
    { source: 'swagger.net.json', dataNode: '200' }, // 想要指定swagger/json/  swagger.net.json的dataNode为 200
   	],
    formatData: (data, { source, dataNode, path }) => { // 可省略，默认转换为{code: 200,   message: '成功', data}
     ...
     return {
      code: 200,
      message: '成功',
      data,
      }
     },
    },
  ],
 ]
}
```

最后请将下列文件添加到.gitignore

```bash
src/shared/api/apiList.js
src/shared/api/index.js
mock/swagger.js
```

将下列文件添加到.eslintignore

```bash
src/shared/api/index.js
```

## 例子

- 请参照本项目[example](https://github.com/Leonard-Li777/swagger-to-umi-mock-server/tree/master/example)目录

## License

[MIT](./LICENSE)
