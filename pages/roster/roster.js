Page({

  /**
   * 页面的初始数据
   */
  data: {
    hid:true,
    datas:[],
    sex:"",
    name:"",
    sendInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 弹框
  play(){
  this.setData({
    hid:!this.data.hid
  })
},

// 确认，并将获取的值push到数组中
confirm(){
  console.log(this.data.name)
  let datas=this.data.datas;
  let str={name:this.data.name,sex:this.data.sex}
  datas.push(str)
  this.setData({
    hid:true,
    datas
  })
  console.log(datas)
},
// 清除输入框
cleanInput: function() {
  var setMessage = {
      sendInfo: this.data.name
  }
  this.setData(setMessage)
},
// 取消
cancel(){
  this.setData({
    hid:!this.data.hid
  })
},
//获取单选value值
radiochange(e){
 console.log(e),
 this.setData({
   sex:e.detail.value
 })
},
//获取输入框value值
name(e){
  // console.log(e.detail.value)
  this.setData({
    name:e.detail.value
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})