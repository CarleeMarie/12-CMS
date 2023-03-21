use company_db;

INSERT INTO department
    (dept_name)
VALUES
    ('General Management'),
    ('Team Leaders'),
    ('Team Member');

INSERT INTO role
    (title, salary, dept_id)
VALUES
    ('Store Director', 150000, 1),
    ('Executive Team Lead', 80000, 2),
    ('Team Lead', 50000, 3),
    ('Front End', 25000, 4);
    -- ('Fulfillment', 25000, 5),
    -- ('Beauty', 25000, 6),
    -- ('Style', 25000, 7),
    -- ('Grocery', 25000, 8),
    -- ('Domestics', 25000, 9),
    -- ('Seasonal', 25000, 10),
    -- ('Electronics', 25000, 11),
    -- ('Freight', 25000, 12);

INSERT INTO employee
    (first_name, last_name, role_id, department, salary, manager_id)
VALUES
    ('Raymond', 'Schnuller', 1),
    ('Brandon', 'Puppe', 2),
    ('Lisa', 'Hartung', 3),
    ('Brett', 'Haisha', 4);
    -- ('Heather', 'Simpson', 5),
    -- ('Jenna', 'Doberman', 6),
    -- ('Carlton', 'Verruckt', 7),
    -- ('Alec', 'Verlierer', 8),
    -- ('Tony', 'Schumacher', 9),
    -- ('Steve', 'Martin', 10),
    -- ('Brandon', 'Smoody', 11);

