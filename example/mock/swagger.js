/* eslint-disable */
const createRes = require('umi-plugin-swagger-to-mock/lib/createRes');
const api = require('/Users/lilun/workspace/ux-m-welfare/src/shared/api/index.js');

module.exports = {
  [`post ${api.payCheck}`]: createRes([
    // 聚合支付状态轮训检查接口
    {
      code: 200,
      message: '成功',
      data: {
        id: '@integer(60, 100)',
        orderNo: '@string',
        paidAmount: '@integer(60, 100)',
        paidTime: '@datetime',
        returnUrl: '@string',
        status: 'TRADE_CLOSED',
      },
    },
    100,
  ]),
  [`post ${api.payRequest}`]: createRes([
    // 聚合支付请求接口
    {
      code: 200,
      message: '成功',
      data: {
        id: '@integer(60, 100)',
        orderNo: '@string',
        outerPayOrderData: '@string',
        paidAmount: '@integer(60, 100)',
        paidTime: '@datetime',
        returnUrl: '@string',
      },
    },
    0,
  ]),
  [`post ${api.payRequestWap}`]: createRes([
    // 聚合支付请求WAP接口
    {
      code: 200,
      message: '成功',
      data: {
        id: '@integer(60, 100)',
        orderNo: '@string',
        outerPayOrderData: '@string',
        paidAmount: '@integer(60, 100)',
        paidTime: '@datetime',
        returnUrl: '@string',
      },
    },
    0,
  ]),
  [`post ${api.payRevoke}`]: createRes([
    // 撤销聚合支付接口
    {
      code: 200,
      message: '成功',
      data: {
        code: '@integer(60, 100)',
        data: {},
        message: '@string',
        traceId: '@string',
      },
    },
    0,
  ]),
  [`get ${api.geturl}`]: createRes([
    // getUrl
    {
      code: 200,
      message: '成功',
      data: {
        code: '@integer(60, 100)',
        data: {},
        message: '@string',
        traceId: '@string',
      },
    },
    0,
  ]),
  [`get ${api.appList}`]: createRes([
    // 查询应用列表
    {
      code: 200,
      message: '成功',
      data: [
        {
          appType: '@integer(60, 100)',
          icon: '/images/美团@1x.svg',
          id: 1,
          name: '美团外卖',
          supplierId: '@integer(60, 100)',
          url: 'http://swapi.italent-inc.cn/client/app/index.html?appId=1',
        },
        {
          appType: '@integer(60, 100)',
          supplierId: '@integer(60, 100)',
          id: 2,
          name: '京东商城',
          icon: '/images/京东商城@1x.svg',
          url: 'http://swapi.italent-inc.cn/client/app/index.html?appId=2',
        },
        {
          appType: '@integer(60, 100)',
          supplierId: '@integer(60, 100)',
          id: 3,
          name: 'AA团',
          icon: '/images/aa团@1x.svg',
          url: 'http://swapi.italent-inc.cn/client/app/index.html?appId=3',
        },
      ],
    },
    0,
  ]),
  [`get ${api.checkstand}`]: createRes([
    // 获取收银台信息
    {
      code: 200,
      message: '成功',
      data: {
        order: {
          dueAmount: 10,
          goodsSummary: '测试商品',
          id: '29801',
        },
        points: [
          {
            balance: 20,
            payAccountNo: '18c4ff75-0247-449e-b0ce-83a33045a25f',
            typeIcon: null,
            typeId: '1',
            typeName: '美食积分',
          },
        ],
        returnUrl: null,
      },
    },
    0,
  ]),
  [`get ${api.list}`]: createRes([
    // 查询企业资产
    {
      code: 200,
      message: '成功',
      data: [
        {
          pointsTypeId: '@integer(60, 100)',
          residualPoints: '@integer(60, 100)',
        },
      ],
    },
    0,
  ]),
  [`get ${api.notify}`]: createRes([
    // handlePayNotify
    {
      code: 200,
      message: '成功',
    },
    0,
  ]),
  [`get ${api.return}`]: createRes([
    // handleWapPayReturn
    {
      code: 200,
      message: '成功',
    },
    0,
  ]),
  [`get ${api.commitOrder}`]: createRes([
    // handleMeituanCommitRequest
    {
      code: 200,
      message: '成功',
    },
    0,
  ]),
  [`get ${api.commitOrder}`]: createRes([
    // handleMeituanCommitRequest
    {
      code: 200,
      message: '成功',
    },
    0,
  ]),
  [`get ${api.orderRefund}`]: createRes([
    // handleMeituanRefundRequest
    {
      code: 200,
      message: '成功',
    },
    0,
  ]),
  [`get ${api.validateLoginStatus}`]: createRes([
    // validateLoginStatus
    {
      code: 200,
      message: '成功',
      data: {
        data: {
          jumpUrl: '@string',
          loginStatus: '@integer(60, 100)',
          staffNo: '@string',
        },
        msg: '@string',
        status: '@integer(60, 100)',
      },
    },
    0,
  ]),
  [`get ${api.asycnLocalTransaction}`]: createRes([
    // asycnLocalTransaction
    {
      code: 200,
      message: '成功',
      data: '@string',
    },
    0,
  ]),
  [`get ${api.asyncResumeTransaction}`]: createRes([
    // asyncResumeTransaction
    {
      code: 200,
      message: '成功',
      data: '@string',
    },
    0,
  ]),
  [`get ${api.create}`]: createRes([
    // create
    {
      code: 200,
      message: '成功',
      data: {},
    },
    0,
  ]),
  [`get ${api.eventTest}`]: createRes([
    // eventTest
    {
      code: 200,
      message: '成功',
      data: '@string',
    },
    0,
  ]),
  [`get ${api.pay}`]: createRes([
    // pay
    {
      code: 200,
      message: '成功',
      data: {
        orderId: 27601,
        orderNo: '4361230599991869543',
        paymentUrl:
          'http://cloud.italent-inc.cn/EnterpriseWelfare?keyName=SenWelfareConfig&showNav=false#/checkout?orderNo=4361230599991869543',
      },
    },
    0,
  ]),
  [`get ${api.refundNotify}`]: createRes([
    // refundNotify
    {
      code: 200,
      message: '成功',
      data: '@string',
    },
    0,
  ]),
  [`get ${api.syncTransaction}`]: createRes([
    // syncTransaction
    {
      code: 200,
      message: '成功',
      data: '@string',
    },
    0,
  ]),
  [`post ${api.addTeamMembers}`]: createRes([
    // 新增AATeam成员
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.agreeJoinTeam}`]: createRes([
    // 同意加入团
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.agreeOpenTeam}`]: createRes([
    // 同意开团
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.createFixedTeam}`]: createRes([
    // 创建固定团
    {
      data: {
        teamId: 111,
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    1000,
  ]),
  [`post ${api.createTemporaryTeam}`]: createRes([
    // 创建临时团
    {
      data: {
        teamId: 111,
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.fixedTeamInfo}`]: createRes([
    // 获取固定团的信息
    {
      data: {
        teamName: '@ctitle',
        accountId: '@string',
        accountType: '@integer(60, 100)',
        consumeAmount: '@string',
        redeem: '@float(1, 1000, 2, 2)',
        pointsType: '@integer(1, 2)',
        isTeamWithoutAudition: '@boolean',
        lastOpenTeamTime: '@datetime',
        lastOpenTeamOwner: '@string',
        lastPartPerson: '@integer(60, 100)',
        teamState: '@integer(1, 3)',
        isOwner: '@boolean',
        members: [
          {
            userId: '@integer(60, 100)',
            userName: '@string',
            isWithoutAudition: '@boolean',
            lastOpenTeamTime: '@datetime',
            isOwner: '@boolean',
            isJoinOpenTeam: '@boolean',
            avatar: {
              original: '@string',
              small: '@string',
              medium: '@string',
              normal: '@string',
              big: '@string',
              large: '@string',
              hasAvatar: '@boolean',
              color: '@string',
            },
          },
        ],
        teamId: '@integer(60, 100)',
        'members|10': [
          {
            'userId|+1': [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010],
            userName: '@cname',
            isWithoutAudition: '@boolean',
            lastOpenTeamTime: '@datetime',
            isOwner: '@boolean',
            isJoinOpenTeam: '@boolean',
            userEmail: '@email',
            avatar: {
              original: "@image('613x613')",
              small: "@image('30x30')",
              medium: "@image('50x50')",
              normal: '@string',
              big: '@string',
              large: '@string',
              hasAvatar: '@boolean',
              color: '',
            },
          },
        ],
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.immediateOpenTeam}`]: createRes([
    // 立即开团
    {
      data: {
        teamId: '@string',
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.operatorDepartmentStaffs}`]: createRes([
    // 获取用户同部门员工
    {
      data: [
        {
          id: '@integer(60, 100)',
          name: '@string',
          email: '@string',
          userAvatar: {
            original: '@string',
            small: '@string',
            medium: '@string',
            normal: '@string',
            big: '@string',
            large: '@string',
            hasAvatar: '@boolean',
            color: '@string',
          },
        },
      ],
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.partTeams}`]: createRes([
    // 我参与的团
    {
      data: [
        {
          teamId: '@string',
          teamName: '@string',
          teamPicture: '@string',
          isOpenTeam: '@boolean',
          redeem: '@string',
          pointsType: '@integer(60, 100)',
          teamOwnerId: '@integer(60, 100)',
          teamOwnerName: '@string',
          openTeamTime: '@datetime',
          isTemp: '@boolean',
        },
      ],
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
      'data|10': [
        {
          teamId: '@string',
          teamName: '@ctitle',
          teamPicture: "@image('200x200')",
          isOpenTeam: '@boolean',
          redeem: '@float(1, 1000, 2, 2)',
          pointsType: '@integer(1, 2)',
          teamOwnerId: '@integer(60, 100)',
          teamOwnerName: '@cname',
          openTeamTime: '@datetime',
          isTemp: '@boolean',
        },
      ],
    },
    0,
  ]),
  [`get ${api.queryStaffsByKeyword}`]: createRes([
    // 根据关键字查找员工
    {
      data: [
        {
          id: '@integer(60, 100)',
          name: '@string',
          email: '@string',
          userAvatar: {
            original: '@string',
            small: '@string',
            medium: '@string',
            normal: '@string',
            big: '@string',
            large: '@string',
            hasAvatar: '@boolean',
            color: '@string',
          },
        },
      ],
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.quitTeam}`]: createRes([
    // 退出团
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.reAuditMember}`]: createRes([
    // 重新发起某个成员的审核
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.reCollectMemberMoney}`]: createRes([
    // 重新收取成员的经费
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.refuseJoinTeam}`]: createRes([
    // 拒绝加入团
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.refuseOpenTeam}`]: createRes([
    // 拒绝开团
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.removeMember}`]: createRes([
    // 移除成员
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.removeTeamMembers}`]: createRes([
    // 移除ATeam成员
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.teamStatusCarousel}`]: createRes([
    // 团状态轮播
    {
      data: [
        {
          isSelf: '@boolean',
          teamOwnerName: '@string',
          teamOwnerId: '@integer(60, 100)',
          openTeamTime: '@datetime',
          accountId: '@string',
          accountType: '@integer(60, 100)',
          teamId: '@string',
        },
      ],
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
      'data|10': [
        {
          isSelf: '@boolean',
          teamOwnerName: '@cname',
          teamOwnerId: '@integer(60, 100)',
          openTeamTime: '@datetime',
          accountId: '@string',
          accountType: '@integer(1, 2)',
          teamId: '@string',
        },
      ],
    },
    2000,
  ]),
  [`post ${api.updateTeamFundsInfo}`]: createRes([
    // 修改AATeam经费信息
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.updateTeamIsAudit}`]: createRes([
    // 修改自己被团是否免审核
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.updateTeamMembers}`]: createRes([
    // 更新AATeam成员
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.updateTeamName}`]: createRes([
    // 修改AATeam名称
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.AutoEndConsume}`]: createRes([
    // 自动结束开团
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.collectMoneyResult}`]: createRes([
    // 查询收取团经费结果
    {
      data: {
        accountId: '@string',
        accountType: '@integer(60, 100)',
        recordId: '@string',
        pointsType: '@integer(1, 2)',
        collectedRedeem: '@integer(60, 100)',
        teamOpenState: '@integer(1, 2)',
        problemMembers: [
          {
            userId: '@integer(60, 100)',
            userName: '@string',
            memberState: '@integer(60, 100)',
            stateMessage: '@string',
          },
        ],
        consumeOrders: [
          {
            orderNo: '@string',
            consumeApp: '@string',
            orderDescription: '@string',
            consumeMoney: '@string',
            orderStatus: '@integer(60, 100)',
          },
        ],
        'problemMembers|10': [
          {
            userId: '@string',
            userName: '@cname',
            memberState: '@integer(1, 4)',
            stateMessage: '@string',
          },
        ],
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.consumeHistories}`]: createRes([
    // 获取消费历史列表
    {
      data: {
        partTeamTimes: '@integer(60, 100)',
        redeemConsumeAmount: '@string',
        cashConsumeAmount: '@string',
        consumeHistories: [
          {
            openId: '@string',
            teamName: '@string',
            consumeRedeem: '@string',
            pointsType: '@integer(60, 100)',
            consumeTime: '@datetime',
            teamOwner: '@string',
            isTemp: '@boolean',
          },
        ],
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.consumeOrderDetail}`]: createRes([
    // 获取某条订单的详情
    {
      data: {
        teamPictrue: '@string',
        redeemConsume: '@string',
        pointsType: '@integer(60, 100)',
        cashConsume: '@string',
        orderStatus: '@integer(60, 100)',
        teamName: '@string',
        consumeTime: '@datetime',
        teamOwner: '@string',
        partNum: '@integer(60, 100)',
        partPersons: '@string',
        redeemPerOne: '@string',
        orderSn: '@string',
        orders: [
          {
            orderNo: '@string',
            consumeApp: '@string',
            orderDescription: '@string',
            consumeMoney: '@string',
            orderStatus: '@integer(60, 100)',
          },
        ],
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.endConsume}`]: createRes([
    // 结束消费
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.CancelTask}`]: createRes([
    // 撤销发放任务
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.CreateImportMatterTask}`]: createRes([
    // 保存导入发放任务
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.CreateManualMatterTask}`]: createRes([
    // 保存手动发放任务
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.CreaterCustomerPlan}`]: createRes([
    // 创建自定义计划
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.CreaterExtraWorkPlan}`]: createRes([
    // 创建加班餐计划
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.DealCustomerTask}`]: createRes([
    // 处理自定义任务
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.DealExtraWorkTask}`]: createRes([
    // 处理加班餐任务
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.GetSnapIdByTask}`]: createRes([
    // 通过任务ID和发放类型获取快照（父对象）
    undefined,
    0,
  ]),
  [`post ${api.RemoveTaskDetail}`]: createRes([
    // 撤销发放明细
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.RevertTask}`]: createRes([
    // 恢复撤销发放任务
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.RevertTaskDetail}`]: createRes([
    // 恢复撤销发放明细
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.RunTaskAllot}`]: createRes([
    // 执行任务积分发放
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.UpdateCustomerPlan}`]: createRes([
    // 更新自定义计划
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.UpdateExtraWorkPlan}`]: createRes([
    // 更新加班餐计划
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.DealAbnormalReportByAdmin}`]: createRes([
    // 管理员处理
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.RevertDealAbnormalReportByAdmin}`]: createRes([
    // 取消管理员处理
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.TenantHasAttendancePermission}`]: createRes([
    // 获取是否拥有假勤权限
    undefined,
    0,
  ]),
  [`get ${api.TimeTask}`]: createRes([
    // 定时任务
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.GetCorpConsume}`]: createRes([
    // 企业账户积分消费明细增加凭证相关列
    undefined,
    0,
  ]),
  [`post ${api.GetAllCorpSubAccounts}`]: createRes([
    // 获取所有企业子账户
    undefined,
    0,
  ]),
  [`post ${api.GetAllCorpSubAccountsAndRecharge}`]: createRes([
    // 获取所有企业子账户和充值名
    undefined,
    0,
  ]),
  [`post ${api.GetRedeemAppList}`]: createRes([
    // 获取应用列表
    undefined,
    0,
  ]),
  [`post ${api.GetRedeemType}`]: createRes([
    // 获取积分类型
    undefined,
    0,
  ]),
  [`get ${api.asset}`]: createRes([
    // 获取个人资产
    {
      data: {
        totalAmount: '30032.09',
        pointsList: [
          {
            amount: '29',
            id: 1,
            name: '购物积分',
            icon: 'images/购物积分@1x.svg',
          },
          {
            id: 2,
            name: '美食积分',
            icon: 'images/美食积分@1x.svg',
            amount: '29032.93',
          },
        ],
        workRedeemAmount: '25.00',
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.bill}`]: createRes([
    // 获取账单
    {
      data: {
        income: '1000.00',
        pay: '1000.00',
        ExternalPay: '@string',
        list: [
          {
            assetType: 1,
            id: '1',
            workType: 3,
            pointsType: 1,
            amount: '-100.00',
            describe: '美团外卖美团外卖美团外卖',
            icon: 'images/奖励@1x.svg',
            addTime: '10/13 12:05',
          },
          {
            id: '2',
            workType: 1,
            assetType: 1,
            pointsType: 2,
            amount: '+100.00',
            icon: 'images/积分回收@1x.svg',
            describe: '京东购物京东购物京东购物京东购物',
            addTime: '10/13 12:05',
          },
          {
            id: '3',
            workType: 1,
            assetType: 2,
            pointsType: -1,
            amount: '+100.00',
            icon: 'images/积分回收@1x.svg',
            describe: '京东购物京东购物京东购物京东购物',
            addTime: '10/13 12:05',
          },
        ],
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.getBillByPage}`]: createRes([
    // 获取账单
    {
      data: [
        {
          assetType: '@integer(60, 100)',
          id: '@string',
          workType: '@integer(60, 100)',
          pointsType: '@integer(60, 100)',
          amount: '@string',
          describe: '@string',
          icon: '@string',
          addTime: '@string',
        },
      ],
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.GetLoginInfo}`]: createRes([
    // 获取登陆信息
    {
      data: {
        UserId: '@integer(60, 100)',
        UserName: '@string',
        TenantId: '@integer(60, 100)',
        Phone: '@string',
        Sign: '@string',
        TimeStamp: '@integer(60, 100)',
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.pointsDetails}`]: createRes([
    // 获取积分详情
    {
      data: {
        totalAmount: '232323.32',
        permanent: '2323.32',
        limited: [
          {
            endTime: '2019/02/01 00:00:00',
            amount: '25.00',
          },
          {
            endTime: '8888/88/88 00:00:00',
            amount: '10033323234.00',
          },
          {
            endTime: '8880/88/88 00:00:00',
            amount: '10033323234.00',
          },
        ],
        id: 0,
        name: '@string',
        icon: '@string',
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.pointsType}`]: createRes([
    // 获取积分类型
    {
      data: [
        {
          appCodeList: ['@integer(60, 100)'],
          id: 1,
          name: '购物积分',
          icon: '/images/购物积分@1x.svg',
          appList: [2],
        },
        {
          id: 2,
          name: '美食积分',
          icon: '/images/美食积分@1x.svg',
          appList: [1],
        },
      ],
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.HelloWorld}`]: createRes([
    // HelloWorld
    undefined,
    0,
  ]),
  [`post ${api.takeOutExtraWorkRedeem}`]: createRes([
    // 领取加班餐积分
    {
      data: {
        workRedeemAmount: '25.00',
        totalAmount: '3001.21',
        pointsList: [
          {
            amount: '@string',
            id: '@integer(60, 100)',
            name: '@string',
            icon: '@string',
          },
        ],
      },
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.AutoRecycle}`]: createRes([
    // 自动回收
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.BatchRecycle}`]: createRes([
    // 批量回收
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.SingleRecycle}`]: createRes([
    // 单个员工回收
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.accountEnable}`]: createRes([
    // 启用账号
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.deleteAllStaffAccount}`]: createRes([
    // 删除全部员工账户
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`post ${api.GetAllotTaskByStaffRedeemCerId}`]: createRes([
    // 通过员工积分凭证id获取分配任务
    undefined,
    0,
  ]),
  [`post ${api.GetStaffRedeemCerIdByConsumeId}`]: createRes([
    // 根据消费单据ID获取凭证ID
    undefined,
    0,
  ]),
  [`post ${api.GetStaffRedeemOverview}`]: createRes([
    // 员工账户列表增加积分概览列
    undefined,
    0,
  ]),
  [`get ${api.syncStaff}`]: createRes([
    // 同步员工
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
  [`get ${api.syncStaffByTenantId}`]: createRes([
    // 同步员工
    {
      code: 200,
      message: '@string',
      displayTip: '@boolean',
      tipType: '@string',
      isAutomaticCloseTip: '@boolean',
      disappearTime: '@integer(60, 100)',
    },
    0,
  ]),
};
