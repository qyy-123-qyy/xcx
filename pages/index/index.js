//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  imgs:[],
  detailList:[],

  },
  //事件处理函数
  go(){
    wx.navigateTo({
      url: '../look/look',
    })
  },
  // 跳转到法律法规页面legal
  legal(){
    wx.navigateTo({
      url: '../legal/legal',
    })
  },
  // banner接口
  onLoad: function () {
  wx.request({
    url:"http://www.wumeili.top/w/website/bannerList",
    method:"GET",
    data:"json",
    success:(res)=>{
      console.log(res.data.data);
      this.setData({
        imgs:res.data.data
      })
    },
  })
  // 详情接口
   wx.request({
    url:"http://www.wumeili.top/w/website/findGoodsTypeList",
    method:"GET",
    data:"json",
    success:(res)=>{
      console.log(res.data.data);
      this.setData({
        detailList:res.data.data
      })
    }
  })
  },
  // 详情点击跳转
 jump(val){
  //  console.log(val.currentTarget.dataset.name)；
  let name=val.currentTarget.dataset.name;
  wx.navigateTo({
    url: '../detail/detail?name='+name,
  })

//导航跳转传参,存储参数
/*   wx.setStorage({
    data: name,
    key: 'info',
  })
  wx.switchTab({
    url: '../info/info',
  }) */
 }
})
