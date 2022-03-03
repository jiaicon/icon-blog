'use strict';

const BasicController = require('./basicController');

class CategoryController extends BasicController {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      status: ctx.helper.parseInt(ctx.query.status),
    };
    try {
      const data = await ctx.service.categoryService.list(query);
      return this.send(data, 200, '获取成功');
    } catch (err) {
      return this.send(null, 500, err.message);
    }
  }

  async show() {
    const ctx = this.ctx;
    try {
      const data = await ctx.service.categoryService.find(ctx.helper.parseInt(ctx.params.id));
      return this.send(data, 200, '获取成功');
    } catch (err) {
      return this.send(null, 500, err.message);
    }
  }

  async create() {
    const ctx = this.ctx;
    try {
      const data = await ctx.service.categoryService.create(ctx.request.body);
      return this.send(data, 200, '创建成功');
    } catch (err) {
      return this.send(null, 500, err.message);
    }
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const updates = {
      name: ctx.request.body.name,
      icon: ctx.request.body.icon,
      status: ctx.helper.parseInt(ctx.request.body.status),
    };
    try {
      const data = await ctx.service.categoryService.update({ id, updates });
      return this.send(data, 200, '编辑成功');
    } catch (err) {
      return this.send(null, 500, err.message);
    }
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    try {
      await ctx.service.categoryService.destroy({ id });
      return this.send(null, 200, '删除成功');
    } catch (err) {
      return this.send(null, 500, err.message);
    }
  }
}

module.exports = CategoryController;
