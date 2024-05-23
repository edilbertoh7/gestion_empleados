-- consula para mostrar los empleados activos del sistema menos el administrador
SELECT * FROM users
WHERE id <> 1 AND ACTIVE = 1