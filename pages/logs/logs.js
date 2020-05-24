//活动
const util = require('../../utils/util.js')

Page({
  data: {
    step:0,
  },
  onLoad: function () {

  },

  changeStep(e){
  //  console.log(e.currentTarget.dataset.current);
   this.setData({
    step:e.currentTarget.dataset.current
   })
  },
})
