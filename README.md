Proyecto Final E-commerce (Frontend)
Descripción del Proyecto
Este es el frontend del proyecto de e-commerce. La aplicación está desarrollada con React y Vite como herramienta de construcción, utilizando Bootstrap para el diseño y Context API para la gestión del estado global. El frontend consume la API del backend desplegado en Render para:

Mostrar el listado y detalle de productos.
Gestionar el carrito de compras, incluyendo incremento y decremento de cantidades.
Procesar pagos a través de PayPal (integrado en modo sandbox y configurado para CLP).
Gestionar la autenticación de usuarios (registro, login y perfil).
Características
Navegación por páginas: Inicio, Autenticación, Listado de Productos, Detalle de Producto, Carrito, Checkout y Perfil.
Página dual de autenticación (iniciar sesión / registrarse) con pestañas.
Carrito de compras con contador, opción de aumentar o disminuir cantidades y resumen de la compra.
Integración con PayPal para el procesamiento de pagos.
UI/UX minimalista y moderna con Bootstrap.
Tecnologías Utilizadas
Framework: React con Vite
Estado Global: Context API
Comunicación: Axios (para consumir la API del backend)
Estilos: Bootstrap y CSS personalizado
Routing: React Router DOM
Requisitos
Node.js (v14 o superior)
npm
Instalación
Clonar el repositorio:

bash
Copiar
git clone https://github.com/tu-usuario/proyecto-final-e_commerce.git
cd proyecto-final-e_commerce/frontend
Instalar dependencias:

bash
Copiar
npm install
Configurar Variables de Entorno:

Crea un archivo .env en la raíz del frontend (al mismo nivel que package.json) y agrega:

env
Copiar
VITE_BACKEND_URL=https://proyecto-final-e-commerce-backend.onrender.com
VITE_PAYPAL_CLIENT_ID=ARd5VGdhQcVbEoac5m0e6FgdOxK0EXT9VagxBA56fQZsI8g5zpWr3mCEO8sIeVU0abRzqWi9THRtbQt6
Estas variables permiten que el frontend se comunique con el backend y cargue el SDK de PayPal correctamente.

Ejecutar el Servidor de Desarrollo:

bash
Copiar
npm run dev
Esto iniciará la aplicación en modo desarrollo (generalmente en http://localhost:5173).

Construcción y Despliegue
Construir la Aplicación:

Ejecuta el comando de build para generar la carpeta dist:

bash
Copiar
npm run build
Desplegar en Netlify (o Vercel):

Conecta tu repositorio de GitHub con Netlify.
Configura el Build Command en Netlify como npm run build y el Publish Directory como dist.
Establece las variables de entorno en Netlify (VITE_BACKEND_URL y VITE_PAYPAL_CLIENT_ID).
Despliega la aplicación y obtén la URL pública.
Uso
Rutas Principales:
/ – Página de inicio con bienvenida y botón "Ver Productos".
/auth – Página dual para iniciar sesión y registrarse.
/products – Listado de productos.
/product/:id – Detalle de un producto.
/cart – Carrito de compras con opciones para aumentar/disminuir cantidades.
/checkout – Página de checkout con resumen de compra y botón de PayPal.
/profile – Perfil del usuario.
Contribución
Si deseas contribuir, por favor abre un issue o envía un pull request.
¡Toda contribución es bienvenida!
