use company_db;

INSERT INTO department
    (dept_name)
VALUES
    ('General Management'),
    ('Team Leaders'),
    ('Team Members');

INSERT INTO role
    (title, salary, dept_id)
VALUES
    ('Store Director', 150000, 1),
    ('Executive Team Lead', 80000, 1),
    ('Team Lead', 50000, 2),
    ('Front End', 25000, 3),
    ('Fulfillment', 25000, 3),
    ('Beauty', 25000, 3),
    ('Style', 25000, 3),
    ('Grocery', 25000, 3),
    ('Domestics', 25000, 3),
    ('Seasonal', 25000, 3),
    ('Electronics', 25000, 3),
    ('Freight', 25000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Raymond', 'Schnuller', 1, NULL),
    ('Brandon', 'Puppe', 1, 1),
    ('Lisa', 'Hartung', 2, 2),
    ('Brett', 'Haisha', 2, 2),
    ('Heather', 'Simpson', 2, 2),
    ('Jenna', 'Doberman', 2, 2),
    ('Carlton', 'Verruckt', 3,5),
    ('Alec', 'Verlierer', 2, 2),
    ('Tony', 'Schumacher', 2, 2),
    ('Steve', 'Martin', 3, 3),
    ('Brandon', 'Smoody', 3, 4);

