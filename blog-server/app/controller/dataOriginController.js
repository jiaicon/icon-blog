'use strict';

const BasicController = require('./basicController');

class DataOriginController extends BasicController {
  async index() {
    const { ctx } = this;
    try {
      const user = await ctx.service.userService.currentUser();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const query = {
        limit: ctx.helper.parseInt(ctx.query.pageSize),
        offset: (ctx.helper.parseInt(ctx.query.current) - 1) * ctx.helper.parseInt(ctx.query.pageSize),
        user_id: user.id,
      };
      const data = await ctx.service.dataOriginService.list(query);
      return this.send(data, 200, '获取成功');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
  async show() {
    const { ctx } = this;
    try {
      ctx.validate({
        id: 'string',
      }, ctx.params);
    } catch (e) {
      return await this.send(null, 322, e.message, e.errors);
    }
    const { asExcel } = ctx.query;
    try {
      const user = await ctx.service.userService.user();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const result = await ctx.service.dataOriginService.find({ id: ctx.params.id, user_id: user.id, asExcel });
      if (asExcel && result) {
        ctx.attachment(result.filename);
        ctx.body = result.file;
        return;
      }
      if (result) {
        return this.send(result, 200, '获取成功');
      }
      return this.send(null, 400, '获取失败');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
  async create() {
    const { ctx } = this;
    try {
      ctx.validate({
        name: 'string',
        data: 'array',
      });
    } catch (e) {
      return await this.send(null, 322, e.message, e.errors);
    }
    try {
      const user = await ctx.service.userService.user();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const body = ctx.request.body;
      delete body.id;
      const data = await ctx.service.dataOriginService.create({
        ...body,
        user_id: user.id,
      });
      if (data) {
        return this.send(data, 200, '创建成功');
      }
      return this.send(null, 400, '创建失败');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    if (!id) {
      return await this.send(null, 322, '未选择要更新的数据');
    }
    try {
      ctx.validate({
        name: 'string',
        data: 'array',
      });
    } catch (e) {
      return await this.send(null, 322, e.message, e.errors);
    }
    try {
      const user = await ctx.service.userService.user();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const result = await ctx.service.dataOriginService.update({
        ...ctx.request.body,
        id,
        user_id: user.id,
      });
      if (result) {
        return this.send(result, 200, '编辑成功');
      }
      return this.send(null, 400, '编辑失败');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    if (!id) {
      return await this.send(null, 322, '未选择要删除的数据源');
    }
    try {
      const user = await ctx.service.userService.user();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const res = await ctx.service.dataOriginService.destroy({ id, user_id: user.id });
      if (res) {
        return this.send(null, 200, '删除成功');
      }
      return this.send(null, 400, '删除失败');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
  async dic() {
    const { ctx } = this;
    try {
      const user = await ctx.service.userService.currentUser();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const data = await ctx.service.dataOriginService.dic(user.id);
      return this.send(data, 200, '获取成功');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
}

module.exports = DataOriginController;
