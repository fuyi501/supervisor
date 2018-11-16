
## 设计语言和风格

#### 1. 设计语言

[Ant Design](https://ant.design/docs/spec/lightweight-cn)

#### 2. 设计风格

- 白色标题栏，颜色为：#fff
- 标题栏返回箭头，颜色为：#1890ff

## 使用的工具集合

1. 图标：[iconfont](http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=881124)
2. 日期时间处理：[day.js](https://github.com/iamkun/dayjs/blob/HEAD/docs/zh-cn/README.zh-CN.md)
3. 图像压缩：[lrz](https://www.npmjs.com/package/lrz)
4. 二维码生成：[qrious.js](https://github.com/neocotic/qrious)

## API 文档

[https://documenter.getpostman.com/view/5163609/RzZ6HLGK](https://documenter.getpostman.com/view/5163609/RzZ6HLGK)

## 本地存储规范

base64图片头部信息：data:image;base64,

用户信息均保存在 LocalUserInfo 中，包括 
```js
// 登录成功后，封装成 本地数据
let LocalUserInfo = {
    isLogin: true,
    realName: 
    nickName: 
    userId: 
    userTel: 
    tokenId: 

    registerTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    loginTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),

    isHasAvatar: userInfo.hasAvatar,
    avatarBase64: '',

    isHasFaceImg: userInfo.hasFace,
    faceImgBase64: '',
}
```              

团队组织树信息保存在 LocalTeamTreeInfo 中，
```js
let LocalTeamTreeInfo = {
    teamTreeName: ,
    teamTreeId: ,
    teamTreeStaff: ,
    teamTreeSubs: ,
    teamTreeType: 
}
```

团队组织单元信息保存在 LocalTeamUnitInfo 中，
```js
let LocalTeamTreeInfo = {
    teamUnitName: 
    teamUnitDesc: 
    teamUnitId: 
    teamUnitInviteCode: 
    teamUnitType: 
    teamUnitInnerType: 
}
```

创建项目地图信息保存在 LocalProjectAMapInfo 中，
```js
let LocalProjectAMapInfo = {
    isamap: true,
    polyPoints: 
    polyArea: 
}
```

项目信息保存在 LocalProjectInfoList 中，
```js
LocalProjectInfoList.push({
    itemName: 
    itemId: 
    itemSTime: 
    itemETime:
})
```

本地签到信息保存在 LocalQianDaoInfo 中，
```js
LocalQianDaoInfo = {
    qianDaoInfoList: [
        {
            qianDaoTime:  // 签到时间
            qianDaoLocation: // 签到地理位置
            qianDaoNumber:  // 第几次签到
        }
    ],
    qianDaoCount: // 签到次数
})
```

## 项目计划安排

#### 项目版本1.0.0，预计 11月12日 完成

1. 完善用户登录注册功能
    - 注册：手机号 + 密码 + 验证码 注册
    - 登录：手机号 + 验证码 登录
    - 第一次注册引导完善个人信息：姓名、公司名称、职位

2. 我的页面完善用户修改用户信息功能
    - 修改头像
    - 修改姓名
    - 修改昵称
    - 工号，唯一且只能修改一次
    - 上传用户人脸照片

3. 用户邀请添加好友功能
    - 生成二维码
    - 扫描二维码
    - 通过手机号添加好友

4. 用户加入项目
    - 扫描二维码加入项目

5. 用户创建项目
    - 创建项目
    - 可以查看项目详情
    - 可以编辑项目信息
    - 可以解散项目

6. 考勤打卡
    - 上下班打卡
    - 统计打卡信息
    - 设置打卡信息

7. 签到
    - 签到
    - 统计签到

8. 请假
    - 请假申请
    - 请假记录

9. 补卡 
    - 补卡申请
    - 补卡记录

10. 巡视记录
    - 巡视记录
    - 巡视统计

11. 旁站记录
    - 旁站记录
    - 旁站统计

12. 联系单
    - 联系单填写
    - 联系回复单

13. 通知单
    - 通知单填写
    - 通知回复单

14. 监理日志
    - 填写日志
    - 日志记录

15. 项目概况统计
    - 项目概况
    - 项目进度
    - 项目考勤统计
    - 项目工作台账



## 参考项目

[京东金融](https://github.com/fuyi501/touchui_jdfinance)

## 软件包名

com.uileader.apploader

com.uileader.PandoraEntryActivity