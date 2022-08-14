-- departments table data query
SELECT * 
FROM employee_tracker_cms.departments AS departments;

-- roles table data query
-- using implicit inner join / by selecting necessary column
SELECT roles.id, roles.title, roles.salary, departments.name
FROM employee_tracker_cms.roles AS roles,
employee_tracker_cms.departments AS departments
	WHERE departments.id = roles.department_id;


-- SELECT id, title, salary, d.name
FROM departments d
JOIN roles r
	ON d.name = r.department_id

-- employees table data query
