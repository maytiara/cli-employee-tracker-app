-- Table Data from employee_tracker_cms

INSERT INTO departments (`id`, `name`) 
VALUES (1, 'CEO/Founder'),
       (2, 'Chief Officers'),
       (3, 'Design/Research'),
       (4, 'Development'),
       (5, 'Data/QA/Security'),
       (6, 'Sales/Marketing'),
       (7, 'Finance/HR/Admin');

SELECT * 
FROM employee_tracker_cms.departments AS departments; -- departments table data query

INSERT INTO roles (`id`, `title`, `salary`, `department_id`) 
VALUES ('1', 'It could be you', '300000', 1),
       ('2', 'Chief Technical Officer', '250000', 2),
       ('3', 'Chief Operating Officer', '200000', 2),
       ('4', 'Product Manager', '130000', 3),
       ('5', 'UX Researcher', '900000', 3),
       ('6', 'Technical Graphic Designer', '800000', 3),
       ('7', 'Technical Lead', '130000', 4),
       ('8', 'Software Engineer', '110000', 4),
       ('9', 'Full-Stack Developer', '110000', 4),
       ('10', 'Data Scientist', '100000', 5),
       ('11', 'QA Analyst', '80000', 5),
       ('12', 'Security Analyst', '80000', 5),
       ('13', 'Digital Content Marketer', '60000', 6),
       ('14', 'Sales Consultant', '60000', 6),
       ('15', 'Accountant', '65000', 7),
       ('16', 'HR Support Consultant', '65000', 7),
       ('17', 'Administrator', '50000', 7);

SELECT roles.id AS `ID`, roles.title AS `TITLE`, roles.salary AS `SALARY`, departments.name AS `DEPARTMENT`
FROM employee_tracker_cms.roles AS roles, -- using implicit inner join / by selecting necessary column
employee_tracker_cms.departments AS departments 
	WHERE departments.id = roles.department_id; -- roles table data query

  -- SELECT id, title, salary, d.name
FROM departments d
JOIN roles r
	ON d.name = r.department_id