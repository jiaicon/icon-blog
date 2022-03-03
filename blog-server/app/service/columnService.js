/**
 * Created by icon on 2021/6/1
 */
'use strict';

const Service = require('egg').Service;

class ColumnService extends Service {
  async list({ offset = 0, limit = 10, user_id, status }) {
    const options = {
      offset,
      limit,
      attributes: [ 'id', 'name', 'user_id', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    const where = {};
    if (user_id) {
      Object.assign(where, { user_id });
    }
    if (status) {
      Object.assign(where, { status });
    }
    options.where = where;
    return this.ctx.model.Column.findAndCountAll(options);
  }

  async find(id) {
    const column = await this.ctx.model.Column.findByPk(id, {
      include: [{
        model: this.ctx.model.User,
        as: 'user',
        attributes: [ 'id', 'userName' ],
      }],
    });
    if (!column) {
      this.ctx.throw(404, 'column not found');
    }
    return column;
  }

  async create(column) {
    Object.assign(column, { user_id: this.ctx.session.user.id });
    return this.ctx.model.Column.create(column);
  }

  async update({ id, updates }) {
    const column = await this.ctx.model.Column.findByIdWithUser(id, this.ctx.session.user.id);
    if (!column) this.ctx.throw(404, 'column not found');
    return column.update(updates);
  }

  async destroy({ id }) {
    const column = await this.ctx.model.Column.findByIdWithUser(id, this.ctx.session.user.id);
    if (!column) this.ctx.throw(404, 'column not found');
    return column.destroy();
  }
}

module.exports = ColumnService;
