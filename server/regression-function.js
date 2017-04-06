module.exports = {
  regressionFunction: function(x, y, dataX){
    rData = [];
    for(var i=0; i< dataX.length; i++){
      if((x == 'internet_use') && (y == 'm_in')){
        var y_predict = (0.0648*dataX[i]) + 540533.8768;
        // rData.push((Math.log10(y_predict)).toFixed(2));
        rData.push(y_predict);
      }
      else if((x == 'energy_use') && (y == 'm_in')){
        var y_predict = (0.0102*dataX[i]) + 144729.4162;
        // rData.push((Math.log10(y_predict)).toFixed(2));
        rData.push(y_predict);
      }
      else if((x == 'gdp') && (y == 'm_in')){
        var y_predict = (0*dataX[i]) + 318126.0432;
        // rData.push((Math.log10(y_predict)).toFixed(2));
        rData.push(y_predict);
      }
      else if((x == 'total_population') && (y == 'm_in')){
        var y_predict = 0.0061 * dataX[i] + 666767.0096;
        // rData.push((Math.log10(y_predict)).toFixed(2));
        rData.push(y_predict);
      }
      else if((x == 'm_out') && (y == 'm_in')){
        var y_predict = 0.6189*dataX[i] + 331293.8276;
        // rData.push((Math.log10(y_predict)).toFixed(2));
        rData.push(y_predict);
      }
      else if((x == 'm_in') && (y == 'm_in')){
        var y_predict = dataX[i];
        // rData.push((Math.log10(y_predict)).toFixed(2));
        rData.push(y_predict);
      }
      else{
        rData.push((0));
      }
    }
    return rData;
  }
};
