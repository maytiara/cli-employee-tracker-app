DROP DATABASE IF EXISTS `employee_tracker_cms`;

CREATE SCHEMA `employee_tracker_cms`;

USE `employee_tracker_cms`;

CREATE TABLE `departments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `roles` 
ADD INDEX `fk_roles_1_idx` (`department_id` ASC) VISIBLE;
;
ALTER TABLE `roles` 
ADD CONSTRAINT `fk_roles_1`
  FOREIGN KEY (`department_id`)
  REFERENCES `employee_tracker_cms`.`departments` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;
