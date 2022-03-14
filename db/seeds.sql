INSERT INTO department
  (name, id)
VALUES
  ('Sales', '1'),
  ('Marketing', '2'),
  ('Finance', '3'),
  ('Human Resources', '4'),
  ('Executive', '5'),
 
INSERT INTO role
  (title, department_id, salary)
VALUES
  ('Sales Director', 2, ),
  ('Marketing'),
  ('Finance'),
  ('Human Resources'),
  ('Executive'),
 
  CREATE TABLE role (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  department_id INTEGER,
  salary DECIMAL NOT NULL,