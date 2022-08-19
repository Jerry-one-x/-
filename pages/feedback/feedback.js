// pages/feedback/feedback.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    ad:""
    },
    handleAdvice(ad){
        let value = ad.detail.value
        this.setData({
          ad:ad.detail.value
    })
},
    submit(){
        var token = wx.getStorageSync('token');
        console.log(token)
        console.log(this.data.ad)
        wx.request({
             url:'http://192.168.1.7:8080/user/feedBack',
             method: "POST",
             header: {
                "Content-type": 'application/json',
                "token": wx.getStorageSync('token')
            },
             data:{
              "feedback":this.data.ad
             },
        // 成功后返回openid和session_key
             success(result){
              
                 console.log("code发送成功，获取返回值",result)
                 console.log(result.data.data)
                 if(result.data.data.code==400){
                    wx.navigateTo({
                      url: '/pages/daohangye/daohangye',
                    })
                  }
                   
             },

             fail: function (res) {
               console.log('errMsg');
             }
         } )
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})