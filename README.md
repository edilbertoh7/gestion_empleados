Instrucciones para ejecutar el proyecto de laravel
1 crear el archivo .env a partir del archivo .env.example
Para ello es necesario ejecutar uno de los siguientes comandos según el sistema operativo
LINUX O MAC 
Estando en la raíz del proyecto ejecutar 
cp .env.example .env
WINDOWS
Estando en la raíz del proyecto ejecutar
copy .env.example .env
luego de creado el archivo .env es necesario configurar las credenciales de la base de datos para este caso es MYSQL la cual se puede configurar entre las líneas 11 a 16 del archivo en mención

2 instalar las dependencias de composer y node js
Dependencias de composer
Instala los paqueted usados y neesarios para el correcto funcionamiento de la aplicación, para esto es necesario ejecutar el comando 
composer install
dependencias  de node js
instala los módulos de node necesarios para que nuestra aplicación funcione correctamente, para ello es necesario ejecutar el siguiente comando
npm install

3 generar una clave de api de laravel
Este paso es muy sencillo solo basta con ejecutar el comando 
php artisan key:generate
Esto generará una nueva clave de api necesaria para que laravel se ejecute en el dispositivo

4 ejecutar las migraciones 
Ejecutar el comando php artisan migrate 
En versiones recientes de laravel e mostrara un pequeño recuadro donde pregunta que si desea crear la base de datos
 
Solo basta con elegir la opción yes y pulsar enter
Nota: si por algún motivo la base de datos no se crea y sale un error es recomendable ir al gestor de bases de datos y crear una base de datos con el mismo nombre que ha configurado en el paso 1 y volver a ejecutar el comando php artisan migrate

5 ejecutar los seeder
Esta parte tambien es muy sencilla solo basta con ejecutar el comando 
php artisan db:seed
nota: si los seeder no se ejecutan correctamente puede ser necesario hacer un refresh de nuestra base de datos para los cual podemos ejecutar el comando
php artisan migrate:fresh –seed

6 correr al Proyecto
Por ultimo se deben ejecutar los comandos para que el proyecto se visualice en el navegador
Este al ser un proyecto realizado con Inertia se requiere de la ejecución de dos comandos
El primero levanta el servidor de desarrollo de laravel
php artisan serve 
El segundo levanta el servidor de desarrollo de vite para visualizar la interfaz de usuario
npm run dev

