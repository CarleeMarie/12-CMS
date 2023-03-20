use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
INSERT INTO role
    (title, salary, dept_id)
VALUES
    ('Sales Lead', 100000, 1 ),
    ('Sales Person', 80000, 1),
-- you can make this stuff up , each dept needs its own id such as 2, 3, etc. --

