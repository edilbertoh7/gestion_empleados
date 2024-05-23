-- consula para mostrar los empleados activos del sistema menos el administrador
SELECT * FROM users
WHERE id <> 1 AND ACTIVE = 1

-- consulta para mostrar los usuarios y el departamento al que pertenencen

SELECT u.id, u.name,u.last_name,u.email,u.address,u.phone,u.gender, 
u.document_type,u.document_number,u.birth_date, u.active,
d.name AS depname, d.description
 FROM users u 
INNER JOIN departments d 
ON (u.department = d.id)
WHERE u.id <> 1 AND u.active =1

-- consulta para mostrar un usuario por el id
u.document_type,u.document_number,u.birth_date, u.active,
d.name AS depname, d.description
 FROM users u 
INNER JOIN departments d 
ON (u.department = d.id)
WHERE u.id = 3 

-- consulta para mostra todos los tipos de documentos del sistema
SELECT * FROM document_types 

-- consulta para mostrar todos los departamentos
SELECT * FROM departments

-- consulta para mostrar solo los departamentos activos
SELECT * FROM departments d 
WHERE d.active = 1


-- consulta para mostrar un departamento por el id
SELECT * FROM departments d
WHERE d.id = 2