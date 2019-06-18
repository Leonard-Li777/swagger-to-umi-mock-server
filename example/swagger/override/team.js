module.exports = {
  teamStatusCarousel: [
    {
      'data|10': [
        // 支持MockJS
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
  ],
  partTeams: [
    {
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
  ],
  fixedTeamInfo: [
    {
      data: {
        teamId: '@integer(60, 100)',
        isOwner: '@boolean',
        teamName: '@ctitle',
        teamState: '@integer(1, 3)',
        redeem: '@float(1, 1000, 2, 2)',
        pointsType: '@integer(1, 2)',
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
    },
  ],
  createFixedTeam: [{ data: { teamId: 111 } }, 1000],
  createTemporaryTeam: [{ data: { teamId: 111 } }],
  collectMoneyResult: [
    {
      data: {
        pointsType: '@integer(1, 2)',
        teamOpenState: '@integer(1, 2)',
        'problemMembers|10': [
          {
            userId: '@string',
            userName: '@cname',
            memberState: '@integer(1, 4)',
            stateMessage: '@string',
          },
        ],
      },
    },
  ],
};
