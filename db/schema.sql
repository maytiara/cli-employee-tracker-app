DROP DATABASE IF EXISTS `employee_tracker_cms`;

CREATE SCHEMA `employee_tracker_cms`;

USE `employee_tracker_cms`;

CREATE TABLE `employee_tracker_cms`.`departments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));
