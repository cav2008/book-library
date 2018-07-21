# VIOOH Front-end Technical Test

## Requirements

You are required to build a page showing a list of books organized by category. Please see the included screenshot in the `screens` folder.

The test is divided into three phases, to be completed in the given order. Should you run out of time before completing all three, please explain how would you proceed further.

Show us your best code!

### Phase 1 - Display the data

Display a list of categories and books (see `phase 1.png`). The layout is required to be responsive (see `small screens.png`).

### Phase 2 - Filter by category

Allow the user to filter the list of books by category, (see `phase 2.png`)

### Phase 3 - Category editing

Allow the user to edit the name of the selected category as following:

1. The selected category show an `edit` button
1. The user click the `edit` button
1. The category text is replaced by a text input
1. As the user enter the text, the category name in the books list update in real-time
1. The user exit the editing mode by clicking anywhere in the page

see `phase 3 - selected.png` and `phase 3 - editing.png`

### Retrieving the data

The data live in an in-memory database and served via a `REST` API.
The database gets created on the fly when you run `yarn run start` and populated with random generated data.

The following two endpoints are available:

`GET http://localhost:3000/categories` returns an array of categories

`GET http://localhost:3000/books` returns an array of books

The property `categoryId` in each book is a reference to the `id` value present in each item of the category list.

There is also a third endpoint `GET http://localhost:3000/db` which allows you to see all the data, but this must not be used in the test.

## Browser compatibility

Browser compatibility requirements are limited to the last major version of all major browsers. No IE support is required.

## About the package
The package provides the following tools:

- [react 16.3](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [classnames](https://github.com/JedWatson/classnames)
- [SASS](https://sass-lang.com/)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [eslint](https://eslint.org/)
- [jest](https://facebook.github.io/jest/)
- [enzyme](http://airbnb.io/enzyme/)

Dependency management is done via [Yarn](https://yarnpkg.com/en/)

All Javascript [ES2017](http://exploringjs.com/es2016-es2017/) features are supported via `babel`.

The package does not include any third party library. Any library you need, you'll have to add it to the package by yourself.

The project is built using `webpack` and served for local development using `webpack-serve`.
Please run the following command in your shell to start developing.

```shell
$ yarn run start
```

Your default browser should open to `http://localhost:8080/`.
In case it doesn't, please manually navigate to the address.

## Importing modules

The base paths for your modules are `node_modules` and `<repo root>/src`.
That means that from whatever position inside the `src` folder you can use absolute paths
for importing your modules or third party modules:

```javascript
import axios from 'axios';
import MyComponent from 'components/MyComponent';
import { doSomething } from 'store/actions/my-actions';
```

## Working with CSS Modules

All the CSS is managed by Webpack, and then automatically injected into the DOM. This means that all CSS files are "per component" and need to be imported in order to be managed by Webpack.
Once you imported you CSS file in your component, the exported object provides you with a map of the class names declared in the file.

```css
.c { background: red; }
.c2 { font-size: 18px; }
```

```js
import styles from './comp.scss';

const comp = () => <div className={styles.c}><div className={styles.c2} /></div>
```

## Running tests

All files contained inside the `src` folder and matching the pattern `[filename].test.(js|jsx)` are recognized as tests, and can be executed using the following command

`yarn run test`

We use [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) for testing, and they're already provided in the package.
Should you prefer a different testing framework, feel free to add it to the package and use it.

Having a good/full test coverage in your project will be considered as a plus.

## Linting files

Linting is done via `eslint`. The configuration extends [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) and [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
Linting is applied to all files under the `src` folder with extension `js` or `jsx`. In order to run the linter use the following command:

`yarn run lint`

If your editor has a plugin supporting `eslint` it should automatically apply the configuration provided by the `eslintrc.json` file. In case it doesn't, you may need to manually instruct your plugin to use the aforementioned configuration file.

Having no linting errors in your project will be considered as a plus.

