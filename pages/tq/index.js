//index.js 天气 未使用
//获取应用实例

var bmap = require('../../libs/bmap-wx/bmap-wx.min.js');
Page({
  data: {
    ak: "69cOy3gse53SsHP3mz8aoeMGTtNrBGBS",
    weatherData: [],
    futureWeather: []

  },

  onLoad: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function (data) {
      // console.log(data);
    };
    var success = function (data) {
      console.log(data);
      var city = "";
      var temp = "";
      var date = "";
      var type = "";
      var weather = "";
      var pm = "";
      var weatherData = data.currentWeather[0];
      var futureWeather = data.originalData.results[0].weather_data;

      // console.log(futureWeather);
      city = weatherData.currentCity;
      temp = weatherData.temperature;
      date = weatherData.date;
      type = weatherData.weatherDesc;
      weather = weatherData.wind;
      pm = weatherData.pm25;
      weatherData = "城市:" + weatherData.currentCity + "\n" + 'PM2.5:' + weatherData.pm25 + '\n' + '日期:' + weatherData.date + '温度:' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData,
        futureWeather: futureWeather,
        city: city,
        temp: temp,
        date: date,
        type: type,
        weather: weather,
        pm: pm,
      });
    }
    BMap.weather({
      fail: fail,
      success: success
    });
  }

})
