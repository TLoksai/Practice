

This is a React-based practice project designed to enhance your development skills. It includes various features such as routing, component-based structure, and custom styling. The project incorporates a setup guide, registration, login functionality, and other pages like About, Contact, and Setup Guide.

Features

Responsive Design: Built using modern CSS practices, including flexbox and grid.

Routing: Includes react-router-dom for seamless navigation between pages.

Reusability: Component-based architecture for better maintainability.

Dynamic Header: A header with "Register" and "Login" buttons visible across all pages.

Custom Pages:

Home Page

About Page

Setup Guide Page

Contact Page


  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
