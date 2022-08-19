// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusTag:false
    },
    login(){
        var that = this;
        // let that=this
        console.log("点击事件执行")
        wx.getUserProfile({
            desc: '需要授权才可继续进行',
            success:res=>{
                 console.log("成功获取到用户信息",res.userInfo)
              
                 this.setData({  
                       userInfo:res.userInfo,
                       nickName:res.userInfo.nickName
                      //  isshow:false
                 })
                 console.log(this.data.nickName)
                   //  用户信息存到本地
                   let userInfo=res.userInfo
                   wx.setStorageSync("user", userInfo)
                   wx.login({
                    success:res=>{
                    // 获取的登录凭证----------------------------------------
                    if(this.data.userInfo.nickName!=''){
                       this.setData({
                      statusTag:true
                       })
                       console.log(this.data.statusTag)
                       console.log(123);

                    }
                    console.log(this.data.userInfo.nickName)             
                    console.log("获取的 code",res.code)                                             
                     wx.getSetting({
                        success (res){
                          if (res.authSetting['scope.userInfo']) {
                            // 已经授权
                            console.log('已经授权')
                          }else{
                              console.log('未授权')
                          }
                        }
                      })
                 }
                })
                } ,         
                fail(res){
                 console.log("授权失败",res)
                },
                  })  
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