/**
 * @Notes:
 * @Author: Icon
 * @Date: 2021/12/7
 * @Time: 15:04
 * @Name: commonService
 */
'use strict';

const Service = require('egg').Service;
const xlsx = require('node-xlsx');
const fs=require('fs');

class CommonService extends Service {
  async asExcel(data) {
    console.log(data);
    const result=[];
    if (data.length) {

    }
  }
}

module.exports = CommonService;
