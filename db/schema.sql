DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS candidates;
DROP TABLE IF EXISTS parties;


CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  description TEXT
);

CREATE TABLE role (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  department_id INTEGER,
  salary DECIMAL NOT NULL,
--   CONSTRAINT fk_party
--     FOREIGN KEY (party_id)
--     REFERENCES parties(id)
--     ON DELETE SET NULL
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
);
