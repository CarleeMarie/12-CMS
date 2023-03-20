CREATE DATABASE IF NOT EXISTS company_db;
 
USE company_db;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INT NOT NULL,
    PRIMARY KEY(id)
    FOREIGN KEY (dept_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (manager_id)
    REFERENCES role(title) 
    ON DELETE SET NULL
    INDEX manager_id (manager_id),
    -- CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
