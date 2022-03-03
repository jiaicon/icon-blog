'use strict';

const BasicController = require('./basicController');

class DashboardController extends BasicController {
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
      const dashboards = await ctx.service.dashboardService.list(query);
      return this.send(dashboards, 200, '获取成功');
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
    try {
      const user = await ctx.service.userService.user();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const dashboard = await ctx.service.dashboardService.find({ id: ctx.params.id, user_id: user.id });
      if (dashboard) {
        return this.send(dashboard, 200, '获取成功');
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
        w: 'integer',
        h: 'integer',
        layouts: 'array',
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
      const dashboard = await ctx.service.dashboardService.create({
        ...body,
        user_id: user.id,
      });
      if (dashboard) {
        return this.send(dashboard, 200, '创建成功');
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
      return await this.send(null, 322, '未选择要更新的大屏');
    }
    try {
      ctx.validate({
        name: 'string',
        w: 'integer',
        h: 'integer',
        layouts: 'array',
      });
    } catch (e) {
      return await this.send(null, 322, e.message, e.errors);
    }
    try {
      const user = await ctx.service.userService.user();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const dashboard = await ctx.service.dashboardService.update({
        ...ctx.request.body,
        id,
        user_id: user.id,
      });
      if (dashboard) {
        return this.send(dashboard, 200, '编辑成功');
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
      return await this.send(null, 322, '未选择要删除的大屏');
    }
    try {
      const user = await ctx.service.userService.user();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const res = await ctx.service.dashboardService.destroy({ id, user_id: user.id });
      if (res) {
        return this.send(null, 200, '删除成功');
      }
      return this.send(null, 400, '删除失败');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
  async sys_dashboards() {
    const { ctx } = this;
    try {
      const user = await ctx.service.userService.currentUser();
      if (!user) {
        return await this.send(null, 302, '未登录');
      }
      const dashboards = await ctx.service.dashboardService.sys_dashboards();
      return this.send(dashboards, 200, '获取成功');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
}

module.exports = DashboardController;
