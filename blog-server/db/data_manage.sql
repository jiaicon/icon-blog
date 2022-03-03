/*
Navicat MySQL Data Transfer

Source Server         : 155
Source Server Version : 50734
Source Host           : 192.168.199.155:3306
Source Database       : dashboard

Target Server Type    : MYSQL
Target Server Version : 50734
File Encoding         : 65001

Date: 2021-12-07 10:50:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for data_manage
-- ----------------------------
DROP TABLE IF EXISTS `data_manage`;
CREATE TABLE `data_manage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `data` longtext NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
