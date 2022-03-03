/**
 * Created by icon on 2021/6/1
 */
'use strict';

const Service = require('egg').Service;
const SequelizeValues = require('sequelize-values')();
const xlsx = require('xlsx');

class DataOriginService extends Service {
  async list({ offset = 0, limit = 10, user_id }) {
    const { ctx } = this;
    const options = {
      offset,
      limit,
      attributes: [ 'id', 'name', 'user_id', 'data', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    if (user_id) {
      options.where = {
        user_id,
      };
    }
    try {
      const data = await ctx.model.DataOrigin.findAndCountAll(options);
      if (data) {
        return data;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }

  async find({ id, user_id, asExcel }) {
    const { ctx } = this;
    try {
      const result = await ctx.model.DataOrigin.findByIdWithUser(id, user_id);
      if (result) {
        if (asExcel) {
          // 生成excel
          const dataOrigin = SequelizeValues.getValues(result);
          const { data, name } = dataOrigin;
          try {
            const workBook = await xlsx.utils.book_new();
            const jsonWorkSheet = await xlsx.utils.json_to_sheet(data, {
              skipHeader: false,
            });
            await xlsx.utils.book_append_sheet(workBook, jsonWorkSheet, name);
            const filename = `${name}.xlsx`;
            const file = await xlsx.write(workBook, {
              bookType: 'xlsx',
              compression: true,
              type: 'buffer',
            });
            return {
              filename,
              file,
            };
          } catch (e) {
            throw e;
          }
        }
        return result;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }

  async create(data) {
    const { ctx } = this;
    try {
      const result = await ctx.model.DataOrigin.create(data);
      if (!result) this.ctx.throw(500, '创建失败');
      return result;
    } catch (e) {
      throw e;
    }
  }

  async update({ id, user_id, ...rest }) {
    const { ctx } = this;
    try {
      const result = await ctx.model.DataOrigin.findByIdWithUser(id, user_id);
      if (!result) this.ctx.throw(404, '数据源不存在');
      if (result.update(rest)) {
        return result;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }

  async destroy({ id, user_id }) {
    const { ctx } = this;
    try {
      const result = await ctx.model.DataOrigin.findByIdWithUser(id, user_id);
      if (!result) await this.ctx.throw(404, '数据源不存在');
      return result.destroy();
    } catch (e) {
      throw e;
    }
  }

  async dic(user_id) {
    const { ctx } = this;
    try {
      const data = await ctx.model.DataOrigin.findAll({
        where: {
          user_id,
        },
      });
      if (!data) {
        throw new Error('获取数据源失败');
      }
      const result = [];
      data.forEach(item => {
        result.push({
          label: item.name,
          value: item.data,
        });
      });
      return result;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = DataOriginService;
