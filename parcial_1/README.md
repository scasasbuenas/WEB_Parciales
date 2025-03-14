# README Parcial 1

Santiago Casasbuenas - 202214932

## Descripción General

Esta es una página web basada en React que cuenta con un sistema simple de login el cual debe asegurarse de que la contraseña que pone el usuario es de entre 5 a 8 caracteres. La aplicación también tiene un sistema de internacionalización basado en i18n que le permite al usuario escoger si quieren ver el contenido en español o en ingles.

## Tabla de Contenidos

1. [Instrucciones de Configuración ](#instrucciones-de-configuración)
2. [Decisiones de Implementación](#decisiones-de-implementación)
3. [Estructura de los Componentes](#estructura-de-los-componentes)
4. [Internacionalización (i18n)](#internacionalización-i18n)
5. [Proceso de Desarrollo](#proceso-de-desarrollo)
6. [Instrucciones de Uso](#instrucciones-de-uso)

## Instrucciones de Configuración

### Prerrequisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

### Instalación

1. Clonar el repositorio

   ```bash
   git clone [repository-url]
   cd parcial_1
   ```
2. Instalar dependencias

   ```bash
   npm install
   ```
3. Correr la página en local

   ```bash
   npm run dev
   ```

## Decisiones de Implementación

### "Flow" de Autenticación

- Se implementó un sistema de autenticación simple basado en email.
- Las rutas de la web están protegidas. Si un usuario no está identificado, se redigirá al login.

### Enrutamiento

- Se usa React Router v6 para la navegación.
- Implementación de rutas protegidas.
- Se utilizó el componente Navigate para redirecciones basadas en el estado de autenticación.

### UI/UX

- La interfaz es oscura y minimalista, se buscó no abrumar al usuario con texto o componentes innecesarios.
- La página es responsive y funciona en varios tamaños de pantalla (puede ser jaja).

### Internacionalización

- Se implementó i18n utilizando react-i18next.
- Detección del lenguaje a utilizar dependiendo de la configuración del browser del usuario.
- Cambio de idioma manual a través del componente UI.
- Textos de traducción almacenados en formatos JSON.

## Estructura de los Componentes

### Componentes Principales

- **App.jsx**: Componente principal de la aplicación con configuración de enrutamiento
- **Login**: Autenticación inicial para acceder al resto de la interfáz.
- **Home**: Vista del panel para usuarios autenticados.
- **Menu**: Muestra el menú de la página.
- **Stores**: Las tiendas que ofrecen sus productos.
- **Cart**: Productos escogidos.

Para fines del parcial, tanto el Menu como Stores y Cart despliegan la misma información, pero se describen con sus objetivos finales como parte del sistema.

### Componentes Adicionales

- **LanguageSwitcher**: Componete de UI que permite cambiar el idioma en que se visualiza el texto.

### Organización de Archivos Principales

```
src/
├── App.jsx            # Componente principal donde se encuentra el enrutamiento.
├── App.css            # Estilos Globales
├── i18n.js            # Configuaración i18n (guarda los JSONS)
├── components/
│   ├── login/         # Archivos del componente login
│   ├── home/          # Archivos del componente home
│   ├── menu/          # Archivos del componente menu
│   ├── stores/        # Archivos del componente stores
│   ├── cart/          # Archivos del componente cart
│   └── languageSwitcher/  # Componente Language switcher
│       ├── index.jsx  
│       ├── LanguageSwitcher.jsx  
│       └── LanguageSwitcher.css 
```

Existen otros archivos en la carpeta sobre los cuales no se hará mención ya que estos son archivos del sistema y fueron autogenerados en la creación del proyecto.

## Internacionalización (i18n)

### Estrategia de Implementación

Se implementó la internacionalización usando react-i18next con las siguientes características:

1. **Detección de Lenguaje**: Automáticamente detecta el idioma basado en las preferencias del browser del usuario.
2. **Selección Manual**: El usuario puede cambiar manualmente el idioma de la página.
3. **Almacenamiento de la Traducción**: Formato JSON en el archivo i18n.js.
4. **Contenido Dinámico**: Todo el texto de cara al usuario puede ser traducido.

### Supported Languages

- English (en) - Default
- Spanish (es)

## Proceso de Desarrollo

1. **Configuración Inicial**:

   - Creación de la estructura de la aplicación en React.
   - Configuración de enrutamiento con React Router.
   - Implementación del flujo de autenticación.
2. **Implementación de Funcionalidades**:

   - Adición de funcionalidades principales para cada paquete.
   - Implementación de rutas protegidas.
   - Creación de navegación entre vistas.
3. **Internacionalización**:

   - Instalación de paquetes i18n
   - Creación de recursos de traducción
   - Implementación de detección de idioma
   - Implementación de rutas protegidas
   - Creación de navegación entre vistas
4. **Refinamiento**:

   - Mejora de la organización de componentes
   - Mejora del diseño

## Instrucciones de Uso

### Autenticación

- Abrir la aplicación e iniciar sesión. (Puede ser con cualquier correo y contraseña. Para efectos prácticos no se pedirá verificación de ningun tipo y el correo puede no existir).
- Darle al botón de entrar para acceder al homepage.

### Cambiar de Idioma

- En la parte inferior derecha de la pantalla encontrarás dos botones.
- Clic "EN" para cambiar el idioma a inglés o "ES" para cambiarlo a español
- El UI se actualizará automáticamente.

### Navegación

- Usa el menú de navegación para acceder a diferentes partes de la web (Menú, Tienda, Carrito).
