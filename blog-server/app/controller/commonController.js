/**
 * @Notes:
 * @Author: Icon
 * @Date: 2021/12/7
 * @Time: 16:52
 * @Name: commonController
 */

'use strict';

const BasicController = require('./basicController');
const xlsx = require('xlsx');
const path = require('path');

class CommonController extends BasicController {
  async parseExcel() {
    const { ctx } = this;
    try {
      ctx.validate({
        url: 'string',
      }, ctx.query);
    } catch (e) {
      return await this.send(null, 322, e.message, e.errors);
    }
    try {
      const workbook = await xlsx.readFile(path.join(this.app.config.baseDir, '/app', ctx.query.url));
      const sheetNames = workbook.SheetNames; // 获取表名
      const sheet = workbook.Sheets[sheetNames[0]]; // 通过表名得到表对象
      const data = xlsx.utils.sheet_to_json(sheet); // 通过工具将表对象的数据读出来并转成json
      // const data = [];
      // if (sheets.length) {
      //   sheets.forEach(sheet => {
      //     const sheetData = sheet.data;
      //     console.log(sheetData);
      //     // sheetData[0]是header
      //     const header = sheetData[0];
      //     sheetData.splice(0, 1);
      //     const dataItem = [];
      //     sheetData.length && sheetData.forEach(item => {
      //       item.forEach((v, i) => {
      //         dataItem[header[i]] = v;
      //       });
      //     });
      //     console.log(sheetData);
      //     data.push({
      //       sheetName: sheet.name,
      //       data: dataItem,
      //     });
      //   });
      // }
      return await this.send(data, 200, '解析成功');
    } catch (e) {
      return await this.send(null, 500, e.message);
    }
  }
}

module.exports = CommonController;
