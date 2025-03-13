# README Parcial 1

Santiago Casasbuenas - 202214932

## Descripción General

Esta es una página web basada en React que cuenta con un sistema simple de login el cual debe asegurarse de que la contraseña que pone el usuario es de entre 5 a 8 caracteres. La aplicación también tiene un sistema de internacionalización basado en i18n que le permite al usuario escoger si quieren ver el contenido en español o en ingles.

## Tabla de Contenidos

1. [Instrucciones de Configuración ](#setup-instructions)
2. [Implementation Decisions](#implementation-decisions)
3. [Component Structure](#component-structure)
4. [Internationalization (i18n)](#internationalization-i18n)
5. [Development Process](#development-process)
6. [Usage Instructions](#usage-instructions)

## Instrucciones de Configuración

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository

   ```bash
   git clone [repository-url]
   cd parcial_1
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Start the development server

   ```bash
   npm run dev
   ```

## Implementation Decisions

### Authentication Flow

- Implemented a simple email-based authentication system
- Username derived from email address (part before @)
- Protected routes redirect to login when user is not authenticated

### Routing

- Used React Router v6 for navigation
- Implemented protected routes for authenticated users
- Used Navigate component for redirects based on authentication state

### UI/UX

- Dark-themed interface for the login page
- Responsive design suitable for various device sizes
- Accessibility considerations in form elements

### Internationalization

- Implemented i18n support using react-i18next
- Language detection based on browser settings
- Manual language switching via UI component
- Translations stored in a structured JSON format

## Component Structure

### Core Components

- **App.jsx**: Main application component with routing configuration
- **Login**: User authentication interface
- **Home**: Dashboard view for authenticated users
- **Menu**: Coffee and product browsing interface
- **Stores**: Store locations display
- **Cart**: Shopping cart functionality

### Utility Components

- **LanguageSwitcher**: UI component for changing application language

### File Organization

src/
├── App.jsx            # Main application component
├── App.css            # Global styles
├── i18n.js            # i18n configuration
├── components/
│   ├── login/         # Login component files
│   ├── home/          # Home component files
│   ├── menu/          # Menu component files
│   ├── stores/        # Stores component files
│   ├── cart/          # Cart component files
│   └── languageSwitcher/  # Language switcher component
│       ├── index.jsx          # Barrel file for clean imports
│       ├── LanguageSwitcher.jsx  # Component implementation
│       └── LanguageSwitcher.css  # Component styles

## Internationalization (i18n)

### Implementation Strategy

We implemented internationalization using react-i18next with the following features:

1. **Language Detection**: Automatically detects user's preferred language based on browser settings
2. **Manual Selection**: Users can manually switch between languages via the LanguageSwitcher
3. **Translation Storage**: Translations are stored in a structured JSON format in the i18n.js file
4. **Dynamic Content**: All user-facing text is internationalized, including dynamic content

### Supported Languages

- English (en) - Default
- Spanish (es)

### Translation Organization

Translations are organized by feature area:

- Common strings
- Login-related strings
- Navigation items
- Feature-specific content

## Development Process

1. **Initial Setup**:

   - Created React application structure
   - Set up routing with React Router
   - Implemented authentication flow
2. **Feature Implementation**:

   - Added core functionality for each main component
   - Implemented protected routes
   - Created navigation between views
3. **Internationalization**:

   - Installed i18n packages
   - Created translation resources
   - Implemented language detection
   - Developed language switcher component
   - Refactored components to use translation hooks
4. **Refinement**:

   - Improved component organization
   - Enhanced styling and responsiveness
   - Refactored for better maintainability

## Usage Instructions

### Authentication

- Open the application and navigate to the login page
- Enter an email and password (any valid format for demo purposes)
- Click "Sign In" to authenticate

### Changing Languages

- Locate the language switcher in the bottom-right corner
- Click "EN" for English or "ES" for Spanish
- UI will immediately update to reflect the selected language

### Navigation

- Use the navigation menu to access different sections:
  - Home: Dashboard view
  - Menu: Browse coffee products
  - Stores: View store locations
  - Cart: Manage shopping items

## License

[Specify your license information here]
