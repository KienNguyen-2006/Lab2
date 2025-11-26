# Project Structure

## Folder Organization
- `src/components/` - Reusable UI components
  - `common/` - Shared components like Header, Button
  - `forms/` - Form-related components
- `src/screens/` - Screen components
  - `Auth/` - Authentication screens
  - `Home/` - Home screen and related
  - `Profile/` - User profile screens
- `src/services/` - API and configuration services
- `src/utils/` - Utility functions
- `src/constants/` - App constants (colors, strings)
- `src/hooks/` - Custom React hooks
- `src/context/` - React Context providers
- `src/styles/` - Global styles and themes
- `src/assets/` - Static assets
  - `images/` - Image files
  - `fonts/` - Font files

## Development Scripts
- `npm run dev:android` - Start development for Android
- `npm run dev:ios` - Start development for iOS
- `npm run lint` - Check code quality
- `npm run lint:fix` - Automatically fix linting issues
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean project dependencies

## Environment Configuration
- Development: `.env.development`
- Production: `.env.production`

## Import Conventions
Use index files for clean imports:
```javascript
// Instead of:
import Header from '../components/common/Header';

// Use:
import {Header} from '../components';