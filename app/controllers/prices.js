'use strict';

var utils = require('./utils');

module.exports = function() {

  var returnAlias = {
    "4260031874056": 90,
    "4260199999999": 90,
    "41045848": 65,
    "4260107220022": 64.6,
    "4001228512777": 40,
    "4260107220077": 64.6,
    "4029764001807": 65,
    "15": 29.8,
    "4260107220114": 64.6,
    "4260107220039": 64.6,
    "4260107222514": 64.6,
    "4001228512791": 40,
    "4023216000110": 68.8,
    "4260189210614": 90.6,
    "4002846034504": 72.5,
    "4260189210072": 90.6,
    "4260189210058": 70.8,
    "4260189210027": 85,
    "426018210010": 78.1,
    "4311501424650": 29.7,
    "4260189210065": 85,
    "4002846034559": 6.7,
    "4260189210096": 90.6,
    "4311596474738": 49,
    "4001686301265": 95,
    "4002846034603": 66.7,
    "4066600641919": 82.5,
    "29041565": 129,
    "4260189210041": 93.8,
    "7613035587458": 99,
    "4260279120052": 72.9,
    "4027109007880": 70.8,
    "4104420146143": 159,
    "4104420146921": 159,
    "4104420053540": 159,
    "4104420053564": 159,
    "4001686372548": 13.6,
    "4005500330318": 199,
    "4104420053700": 159,
    "4014472002512": 83.3,
    "4025174561009": 179,
    "4027109007897": 70.8,
    "4260031876319": 83.3,
    "4260397060032": 61.7,
    "4388844182981": 84.0
  };

  var prices = {};

  prices.list = function(req, res) {
      res.json(returnAlias);
  };

  return prices;
};
