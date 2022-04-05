INSERT INTO department
  (name, id)
VALUES
  ('Sales', 1),
  ('Marketing', 2),
  ('Finance', 3),
  ('Human Resources', 4),
  ('Executive', 5);


INSERT INTO roles
  (title, department_id, salary, id)
VALUES
  ('Sales Director', 1, 30000, 40),
  ('Marketing', 2, 35000, 43),
  ('Finance', 3, 34000, 44),
  ('Human Resources', 4, 28000, 45),
  ('Executive', 5, 40000, 46);
 
INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Catherine', "Mcneel", 51, NULL),
  ('Erich', 'Purpur', 52, 00),
  ('Rob', 'Snow', 53, 01),
  ('Bruno', 'Summer', 54, NULL),
  ('Abbi', 'Larkin', 55, 02);