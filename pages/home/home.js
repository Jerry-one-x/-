// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus:false, //是否显示取消键
    inputValue:"",
    list: [{'name':'花香型香氛',id:0},{'name':'玫瑰精油',id:1},{'name':'依兰精油',id:2},{'name':'橙花精油',id:3},{'name':'柑橘型香氛',id:4},{'name':'佛手柑精油',id:5},{'name':'葡萄柚精油',id:6},{'name':'柠檬精油',id:7},{'name':'木香型香氛',id:8},{'name':'杉木精油',id:9},{'name':'松木精油',id:10},{'name':'檀香木精油',id:11},{'name':'龙涎香',id:12},{'name':'海狸香',id:13},{'name':'麝香',id:14},{'name':'薰衣草香',id:15},{'name':'鸢尾香',id:16},{'name':'迷迭香',id:17}], //搜索到的结果
    list2: [{'name':'花香型香氛',id:0},{'name':'玫瑰精油',id:1},{'name':'依兰精油',id:2},{'name':'橙花精油',id:3},{'name':'柑橘型香氛',id:4},{'name':'佛手柑精油',id:5},{'name':'葡萄柚精油',id:6},{'name':'柠檬精油',id:7},{'name':'木香型香氛',id:8},{'name':'杉木精油',id:9},{'name':'松木精油',id:10},{'name':'檀香木精油',id:11},{'name':'龙涎香',id:12},{'name':'海狸香',id:13},{'name':'麝香',id:14},{'name':'薰衣草香',id:15},{'name':'鸢尾香',id:16},{'name':'迷迭香',id:17}], //可供查询的记录
  },
  jump(e){
    const number=parseInt(e.target.id);
    if(number==0){
        wx.navigateTo({
          url: '/pages/flower/flower',
        })
    }else 
    if(number==1){
        wx.navigateTo({
            url: '/pages/rose/rose',
          })
    }else
    if(number==2){
        wx.navigateTo({
            url: '/pages/Cananga_odorata/Cananga_odorata',
          })
    }else
    if(number==3){
        wx.navigateTo({
            url: '/pages/Neroli/Neroli',
          })
    }else
    if(number==4){
        wx.navigateTo({
            url: '/pages/citrus/citrus',
          })
    }else
    if(number==5){
        wx.navigateTo({
            url: '/pages/bergamot/bergamot',
          })
    }else
    if(number==6){
        wx.navigateTo({
            url: '/pages/Grapefruit/Grapefruit',
          })
    }else
    if(number==7){
        wx.navigateTo({
            url: '/pages/Lemon/Lemon',
          })
    }else
    if(number==8){
        wx.navigateTo({
            url: '/pages/tree/tree',
          })
    }else
    if(number==9){
        wx.navigateTo({
            url: '/pages/fir/fir',
          })
    }else
    if(number==10){
        wx.navigateTo({
            url: '/pages/pine/pine',
        })
    }else
    if(number==11){
        wx.navigateTo({
            url: '/pages/sandalwood/sandalwood',
        })
    }else
    if(number==12){
        wx.navigateTo({
            url: '/pages/Ambergris/Ambergris',
        })
    }else
    if(number==13){
        wx.navigateTo({
            url: '/pages/Beaver/Beaver',
        })
    }else
    if(number==14){
        wx.navigateTo({
            url: '/pages/Musk/Musk',
        })
    }else
    if(number==15){
        wx.navigateTo({
            url: '/pages/Lavender/Lavender',
        })
    }else
    if(number==16){
        wx.navigateTo({
            url: '/pages/Iris/Iris',
        })
    }else
    if(number==17){
        wx.navigateTo({
            url: '/pages/Rosemary/Rosemary',
        })
    }
},
  focusHandler (e) {
    this.setData({focus:true});
  },
  cancelHandler (e) {
    this.setData({focus:false})
  },
  query(e){
   
    this.setData({
      inputValue: e.detail.value
  })  //显示输入的字符串
    //实现搜索的功能
    var list = this.data.list2;		//先把第二条json存起来
    var list2 = [];		//定义一个数组
    //循环去取数据
    for(var i=0;i<list.length;i++){
      var string = list[i].name;
      //查询json里的name是否包含搜索的关键词，如果有就把他装进list2数组
      if(string.indexOf(e.detail.value) >= 0){
        list2.push(list[i]);
      } 
    }
     if(list2.length == 0){
        list2 = [{'name':'您输入的产品暂未被录入'}]
      }
    //到这里list2就已经是你查出的数据
    //如果输入的关键词为空就加载原来的全部数据，不是空就加载搜索到的数据
    if(e.detail.value == ""){
      //加载全部
      this.setData({
        list: list
      })
    } else {
      this.setData({
        list: list2
      })
    } 
  },
  brand_description1: function () {
    wx.navigateTo({
      url: '/pages/home/brand/channel/channel',
    })
  },
  brand_description2: function () {
    wx.navigateTo({
      url: '/pages/home/brand/zml/zml',
    })
  },
  brand_description3: function () {
    wx.navigateTo({
      url: '/pages/home/brand/jl/jl',
    })
  },
  brand_description4: function () {
    wx.navigateTo({
      url: '/pages/home/brand/dior/dior',
    })
  },
  brand_description5: function () {
    wx.navigateTo({
      url: '/pages/home/brand/lk/lk',
    })
  },
  brand_description6: function () {
    wx.navigateTo({
      url: '/pages/home/brand/tf/tf',
    })
  },
  bindConfirm: function (e) {
    wx.navigateTo({
      url: '/pages/selectResult/selectResult',
    })
  },
  goDaily: function () {
    wx.navigateTo({
      url: '/pages/home/daily/daily',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // getSwiperList() {
  //   wx.request({
  //     url: 'url',
  //   })
  // }

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