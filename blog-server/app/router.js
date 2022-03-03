'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller, middleware} = app;
  const verifyToken = middleware.verifyToken();

  router.get('/', controller.home.index);

  // 用户相关
  router.post('/api/login', controller.userController.login);
  router.post('/api/register', controller.userController.register);
  router.put('/api/user', controller.userController.edit);
  router.get('/api/currentUser', verifyToken, controller.userController.currentUser);
  router.get('/api/logout', controller.userController.logout);

  // 基础的上传图片接口
  router.post('/api/upload_img', controller.uploadController.upload_img);
  router.post('/api/upload_file', controller.uploadController.upload_file);

  // 标签
  router.resources('tag', '/api/tag', verifyToken, controller.tagController);

  // 分类
  router.resources('category', '/api/category', verifyToken, controller.categoryController);

  // 专栏
  router.resources('column', '/api/column', verifyToken, controller.columnController);

  // 文章
  router.resources('article', '/api/article', verifyToken, controller.articleController);


  //
  router.get('/api/unit', verifyToken, controller.unitController.list);

  // 大屏
  router.resources('dashboards', '/api/dashboards', verifyToken, controller.dashboardController);
  // 系统大屏
  router.get('/api/sys_dashboards', verifyToken, controller.dashboardController.sys_dashboards);
  // 数据管理
  router.resources('dataOrigin', '/api/dataOrigin', verifyToken, controller.dataOriginController);
  router.get('/api/dataOriginDic', verifyToken, controller.dataOriginController.dic);

  // 模拟动态数据接口
  router.get('/api/imitate/recentlyType', verifyToken, controller.imitateController.recentlyType);
  router.get('/api/imitate/assetTop5', verifyToken, controller.imitateController.assetTop5);
  router.get('/api/imitate/unitIndustry', verifyToken, controller.imitateController.unitIndustry);
  router.get('/api/imitate/leakStatistics', verifyToken, controller.imitateController.leakStatistics);
  router.get('/api/imitate/assetType', verifyToken, controller.imitateController.assetType);

  // 解析excel
  router.get('/api/common/parseExcel', verifyToken, controller.commonController.parseExcel);

  router.get('*', controller.home.home);
};

