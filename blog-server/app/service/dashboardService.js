/**
 * Created by icon on 2021/6/1
 */
'use strict';

const Service = require('egg').Service;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class DashboardService extends Service {
  async list({ offset = 0, limit = 10, user_id }) {
    const { ctx } = this;
    const options = {
      offset,
      limit,
      attributes: [ 'id', 'name', 'user_id', 'w', 'h', 'className', 'brief', 'bg_img', 'bg_color', 'layouts', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    if (user_id) {
      options.where = {
        user_id,
      };
    }
    try {
      const dashboards = await ctx.model.Dashboard.findAndCountAll(options);
      if (dashboards) {
        return dashboards;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }
  async find({ id, user_id }) {
    const { ctx } = this;
    try {
      const dashboard = await ctx.model.Dashboard.findByIdWithUser(id, user_id);
      if (dashboard) {
        return dashboard;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }
  async create(data) {
    const { ctx } = this;
    try {
      const dashboard = await ctx.model.Dashboard.create(data);
      if (!dashboard) this.ctx.throw(500, '创建失败');
      return dashboard;
    } catch (e) {
      throw e;
    }
  }
  async update({ id, user_id, ...rest }) {
    const { ctx } = this;
    try {
      const dashboard = await ctx.model.Dashboard.findByIdWithUser(id, user_id);
      if (!dashboard) this.ctx.throw(404, '大屏不存在');
      if (dashboard.update(rest)) {
        return dashboard;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }
  async destroy({ id, user_id }) {
    const { ctx } = this;
    try {
      const dashboard = await ctx.model.Dashboard.findByIdWithUser(id, user_id);
      if (!dashboard) await this.ctx.throw(404, '大屏不存在');
      return dashboard.destroy();
    } catch (e) {
      throw e;
    }
  }
  async sys_dashboards() {
    const { ctx } = this;
    try {
      const dashboards = await ctx.model.Dashboard.findAll({
        where: {
          user_id: {
            [Op.eq]: null,
          },
          cover: {
            [Op.ne]: null,
          },
        },
        attributes: [ 'id', 'name', 'cover', 'w', 'h', 'className', 'brief', 'bg_img', 'bg_color', 'bg_size', 'layouts', 'position' ],
      });
      if (!dashboards) return await ctx.throw(500, '获取系统大屏失败');
      return dashboards;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = DashboardService;
