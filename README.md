# week2-level3-webpack
- Explain bundlers: why we use Webpack instead of many `<script>` tags.
- Create `webpack-bundler-demo` folder and base `src` structure.
- Run `npm init -y`.

- Install dev dependencies:
  - `webpack`, `webpack-cli`, `webpack-dev-server`, `html-webpack-plugin`
  - `eslint`
  - `stylelint`, `stylelint-config-standard-scss`, `postcss`, `postcss-scss`
  - `htmlhint`

- Configure `package.json`:
  - `"dev": "webpack serve --open --mode development"`
  - `"build": "webpack --mode production"`
  - `"lint:js": "eslint \"src/**/*.js\""`
  - `"lint:scss": "stylelint \"src/**/*.scss\""`
  - `"lint:html": "htmlhint \"src/index.html\""`
  - `"lint": "npm run lint:js && npm run lint:scss && npm run lint:html"`

- Create and explain `webpack.config.js` (entry, output, devServer, HtmlWebpackPlugin).

- Create base files:
  - `src/index.html` (template with `#app-root`)
  - `src/index.js` (imports header/footer, math)
  - `src/styles.scss` (SCSS variables and base styles, not yet imported)
  - `src/components/header.js`, `src/components/footer.js`
  - `src/utils/math.js` (simple add function)

- Configure linters:
  - `.eslintrc.cjs` (browser env, ES modules, modern rules)
  - `stylelint.config.cjs` (SCSS config)
  - `.htmlhintrc`

- Run:
  - `npm run dev` to show JS bundling with Webpack.
  - `npm run lint` to demonstrate JS/SCSS/HTML linting.
  - `npm run build` to demonstrate.