# Requerimientos Back

Guayerd solicita la creación de una API que contenga un catálogo de Videos On-Demand.
La misma debe permitir registrarse como usuario y poder acceder al catálogo completo de videos.
Consigna:
- Crear un documento que contenga un ‘punteo’ o detalle de los requerimientos mínimos de la API.
- Crear el proyecto principal con express aplicando el patrón de diseño MVC (sin contemplar la vista)


## Requerimientos MVP (Fullstack)
- El usuario debe poder registrarse con su email y contraseña
- El usuario debe poder iniciar sesión, con su email y contraseña. Debe poder recuperarla si la olvidó.
- El usuario debe poder desloguearse.
- *Opcional1: Una vez que inicie sesión, debe poder crear, modificar o eliminar un perfil de usuario. De lo contrario, ingresaría automáticamente a un perfil por defecto.*
- Debe poder visualizar su página de inicio del perfil.
    - Esta página debe contener el avatar del perfil y desde allí debe poder acceder a los datos de la cuenta, administración de perfiles y cerrar sesión.
    - Debe mostrar la totalidad de los recursos multimedia disponibles.
    - Debe contener un recuadro de búsqueda
    - *Opcional2: Puede elegir un recurso multimedia de acuerdo a la categoría o tipo.*
- Debe poder reproducir un recurso (película o serie).
- *Opcional3: Landing page descriptiva del servicio*


## Entidades
### Usuarios:
- Modelo
	- ID
	- Mail
	- Password
	- Listado de perfiles (array de objetos)
		- Nombre
		- Imagen de perfil (avatar)
- Consultas DB
	- Crear un usuario
	- Loguearse
	- Obtener un usuario
	- Modificar un usuario
	- Desloguearse
	- *Opcional1: crear, modificar y eliminar un perfil de usuario*
	- Obtener un perfil
	- Obtener todos los perfiles

### Recursos Multimedia
- Modelo
	- ID
	- Título recurso
	- *Opcional: Descripción*
	- Imagen Portada
	- Tipo (serie / película)
	- Genero
	- *Opcional: Director*
	- Listado de subrecursos (array de objetos)?
		- Título?
		- Temporada?
		- URL?
- Consultas DB
	- Crear una película
	- Recuperar datos de una película
	- Recuperar listado de todas las películas
	- Recuperar listado de películas a partir de una búsqueda
	- *Opcional2: Recuperar listado de películas por tipo* 
	- *Opcional2: Recuperar listado de películas por categoría* 


## Funcionalidades futuras
- El usuario debe poder elegir qué películas o series agregar a la lista "Mi lista".
