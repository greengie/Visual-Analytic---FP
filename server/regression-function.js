module.exports = {
  regressionFunction: function(x, y, dataX){
    rData = [];
    for(var i=0; i< dataX.length; i++){
      if((x == 'internet_use') && (y == 'm_in')){
        var y_predict = (0.0648*dataX[i]) + 540533.8768;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'energy_use') && (y == 'm_in')){
        var y_predict = (0.0102*dataX[i]) + 144729.4162;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'gdp') && (y == 'm_in')){
        var y_predict = (0*dataX[i]) + 318126.0432;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'total_population') && (y == 'm_in')){
        var y_predict = 0.0061 * dataX[i] + 666767.0096;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_out') && (y == 'm_in')){
        var y_predict = 0.6189*dataX[i] + 331293.8276;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      // else if((x == 'm_in') && (y == 'm_in')){
      //   var y_predict = dataX[i];
      //   rData.push((Math.log10(y_predict)));
      //   // rData.push(y_predict);
      // }
      else if((x == 'internet_use') && (y == 'm_out')){
        var y_predict = 0.0252 * dataX[i] + 713205.0622;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'energy_use') && (y == 'm_out')){
        var y_predict = 0.0032 * dataX[i] + 609733.28;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'gdp') && (y == 'm_out')){
        var y_predict = 0 * dataX[i] + 731137.2631;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'total_population') && (y == 'm_out')){
        var y_predict = 0.008 * dataX[i] + 596090.0941;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_in') && (y == 'm_out')){
        var y_predict = 0.2026 * dataX[i] + 660709.362;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      // else if((x == 'm_out') && (y == 'm_out')){
      //   var y_predict = dataX[i];
      //   rData.push((Math.log10(y_predict)));
      //   // rData.push(y_predict);
      // }
      else if((x == 'internet_use') && (y == 'total_population')){
        var y_predict = 2.9285 * dataX[i] + 15648049.4322;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'energy_use') && (y == 'total_population')){
        var y_predict = 0.3758 * dataX[i] + 3604317.6952;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'gdp') && (y == 'total_population')){
        var y_predict = 0 * dataX[i] + 18659344.8882;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_in') && (y == 'total_population')){
        var y_predict = 11.2214 * dataX[i] + 19936945.8427;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_out') && (y == 'total_population')){
        var y_predict = 45.0314 * dataX[i] - 8219310.9899;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'internet_use') && (y == 'gdp')){
        var y_predict = 32651.5318 * dataX[i] + 1353609703293.008;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'energy_use') && (y == 'gdp')){
        var y_predict = 3837.1478 * dataX[i] + 1241432650011.327;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'total_population') && (y == 'gdp')){
        var y_predict = 3293.9399 * dataX[i] + 1404524151818.6472;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_in') && (y == 'gdp')){
        var y_predict = 298929.713  * dataX[i] + 1228750970331.8193;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_out') && (y == 'gdp')){
        var y_predict = 181943.5687 * dataX[i] + 1348524135693.2756;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'internet_use') && (y == 'energy_use')){
        var y_predict = 7.3703 * dataX[i] + 22768496.3253;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'gdp') && (y == 'energy_use')){
        var y_predict = 0.0002 * dataX[i] + 16530812.5239;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'total_population') && (y == 'energy_use')){
        var y_predict = 1.071  * dataX[i] + 25542009.4673;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_in') && (y == 'energy_use')){
        var y_predict = 58.3299 * dataX[i] + 2670038.2285;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_out') && (y == 'energy_use')){
        var y_predict = 61.7343 * dataX[i] + 4699515.0163;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'energy_use') && (y == 'internet_use')){
        var y_predict = 0.0755 * dataX[i] - 1488158.5528;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'gdp') && (y == 'internet_use')){
        var y_predict = 0 * dataX[i] + 469562.7144;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'total_population') && (y == 'internet_use')){
        var y_predict = 0.0954 * dataX[i] + 1482329.9937;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_in') && (y == 'internet_use')){
        var y_predict = 3.7511 * dataX[i] + 916277.1973;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'm_out') && (y == 'internet_use')){
        var y_predict = 5.2467 * dataX[i] - 49348.7272;
        rData.push((Math.log10(y_predict)));
        // rData.push(y_predict);
      }
      else if((x == 'internet_use') && (y == 'expense_on_health')){
        var y_predict = 0 * dataX[i] + 677.5414;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'energy_use') && (y == 'expense_on_health')){
        var y_predict = 0 * dataX[i] + 634.856;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'gdp') && (y == 'expense_on_health')){
        var y_predict = 0 * dataX[i] + 624.3142;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'total_population') && (y == 'expense_on_health')){
        var y_predict = 0 * dataX[i] + 747.757;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'm_in') && (y == 'expense_on_health')){
        var y_predict = 0.0002 * dataX[i] + 591.0414;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'm_out') && (y == 'expense_on_health')){
        var y_predict = 0 * dataX[i] + 747.757;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'expense_on_health') && (y == 'm_out')){
        var y_predict = 0 * dataX[i] + 832229.1565;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'expense_on_health') && (y == 'm_in')){
        var y_predict = 1236.176 * dataX[i] - 77646.7563;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'expense_on_health') && (y == 'total_population')){
        var y_predict = 0 * dataX[i] + 29625425.1567;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'expense_on_health') && (y == 'gdp')){
        var y_predict = 469889352.7027 * dataX[i] + 1158770048411.758;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'expense_on_health') && (y == 'energy_use')){
        var y_predict = 71521.4209 * dataX[i] + 7501907.0397;
        rData.push((Math.log10(y_predict)));
      }
      else if((x == 'expense_on_health') && (y == 'internet_use')){
        var y_predict = 6765.5479 * dataX[i] - 592153.5657;
        rData.push((Math.log10(y_predict)));
      }
      else{
        var y_predict = dataX[i];
        rData.push((Math.log10(y_predict)));
      }
    }
    return rData;
  }
};
