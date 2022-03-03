'use strict';

const BasicController = require('./basicController');

class ImitateController extends BasicController {
  async recentlyType() {
    // 随机生成最近类型统计
    const { ctx } = this;
    const data = [
      {
        type: '严重',
        value: ctx.helper.random(99, 999),
      },
      {
        type: '高危',
        value: ctx.helper.random(99, 999),
      },
      {
        type: '中危',
        value: ctx.helper.random(99, 999),
      },
      {
        type: '低危',
        value: ctx.helper.random(99, 999),
      },
    ];
    return this.send(data, 200, '获取成功');
  }

  async assetType() {
    // 随机生成资产类型
    const { ctx } = this;
    const data = [
      {
        type: '软件工具',
        value: ctx.helper.random(99, 999),
      },
      {
        type: '邮件系统',
        value: ctx.helper.random(99, 999),
      },
      {
        type: '网关',
        value: ctx.helper.random(99, 999),
      },
      {
        type: 'WEB开发',
        value: ctx.helper.random(99, 999),
      },
      {
        type: '数据库管理',
        value: ctx.helper.random(99, 999),
      },
    ];
    return this.send(data, 200, '获取成功');
  }

  async assetTop5() {
    // 随机生成资产Top5
    const { ctx } = this;
    const data = [
      {
        name: 'WEB系统与应用',
        num: ctx.helper.random(99, 999),
        percent: ctx.helper.random(0, 1, 1),
      },
      {
        name: 'WEB系统与应用',
        num: ctx.helper.random(99, 999),
        percent: ctx.helper.random(0, 1, 1),
      },
      {
        name: 'WEB系统与应用',
        num: ctx.helper.random(99, 999),
        percent: ctx.helper.random(0, 1, 1),
      },
      {
        name: 'WEB系统与应用WEB系统与应用WEB系统与应用WEB系统与应用',
        num: ctx.helper.random(99, 999),
        percent: ctx.helper.random(0, 1, 1),
      },
      {
        name: 'WEB系统与应用',
        num: ctx.helper.random(99, 999),
        percent: ctx.helper.random(0, 1, 1),
      },
    ];
    return this.send(data, 200, '获取成功');
  }

  async unitIndustry() {
    // 随机生成单位行业
    const { ctx } = this;
    const data = [
      {
        x: '分类1',
        y: ctx.helper.random(99, 999),
      },
      {
        x: '分类2',
        y: ctx.helper.random(99, 999),
      },
      {
        x: '分类3',
        y: ctx.helper.random(99, 999),
      },
      {
        x: '分类4',
        y: ctx.helper.random(99, 999),
      },
      {
        x: '分类5',
        y: ctx.helper.random(99, 999),
      },
    ];
    return this.send(data, 200, '获取成功');
  }

  async leakStatistics() {
    // 随机生成单位行业
    const { ctx } = this;
    const data = [
      {
        x: '分类1',
        y: ctx.helper.random(99, 999),
      },
      {
        x: '分类2',
        y: ctx.helper.random(99, 999),
      },
      {
        x: '分类3',
        y: ctx.helper.random(99, 999),
      },
      {
        x: '分类4',
        y: ctx.helper.random(99, 999),
      },
      {
        x: '分类5',
        y: ctx.helper.random(99, 999),
      },
    ];
    return this.send(data, 200, '获取成功');
  }
}

module.exports = ImitateController;
