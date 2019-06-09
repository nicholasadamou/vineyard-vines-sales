<h1 align="center">
  <br>
  <a href="https://github.com/nicholasadamou/vineyard-vines-sales"><img src="data/images/logo.png" alt="Logo"></a>
  <br>
  Vineyard Vines / Sales
  <br>
</h1>

<h4 align="center">A dynamic web app that fetches and displays the latest Vineyard Vines sales</h4>

<p align="center">
  <a href="https://github.com/nicholasadamou/vineyard-vines-sales/blob/master/LICENSE.txt">
      <img src="https://img.shields.io/badge/license-GPLv3-blue.svg?style=flat-square" alt="License">
  </a>
  <a href="https://david-dm.org/nicholasadamou/vineyard-vines-sales#info=devDependencies">
      <img src="https://img.shields.io/david/dev/nicholasadamou/vineyard-vines-sales.svg?style=flat-square" alt="devDependencies">
  </a>
  <a href="https://dependabot.com">
      <img src="https://api.dependabot.com/badges/status?host=github&repo=nicholasadamou/vineyard-vines-sales" alt="dependabot">
  </a>
  <a href="https://travis-ci.org/nicholasadamou/vineyard-vines-sales">
      <img src="https://img.shields.io/travis/nicholasadamou/vineyard-vines-sales/master.svg?style=flat-square" alt="Build Status">
  </a>
  <a href="https://snyk.io/test/github/nicholasadamou/SickFits?targetFile=package.json">
      <img src="https://snyk.io/test/github/nicholasadamou/vineyard-vines-sales/badge.svg?targetFile=package.json" alt="Vulnerabilities">
  </a>
  <a href="https://saythanks.io/to/NicholasAdamou">
      <img src="https://img.shields.io/badge/say-thanks-ff69b4.svg" alt="Say Thanks">
  </a>
</p>

---

## 📚 The Tech. Stack

This project uses the following technologies:

**The Front-End**:

- [**React.js**](https://reactjs.org/) - For building the interface along with:
  - [**React Router**](https://reacttraining.com/react-router/) for declarative routing for React.
  - [**Styled-Components**](https://www.styled-components.com/) for styling.

**The Back-End**:

- [**JSSoup**](https://github.com/chishui/JSSoup) - JavaScript + [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) = JSSoup
  - For scraping [Vineyard Vines](https://vineyardvines.com/) and returning parsable data to the front-end.

## How To Use

```bash
git clone https://github.com/nicholasadamou/vineyard-vines-sales

cd vineyard-vines-sales

yarn install # alteratively, `npm` can be used

yarn start
```

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## License

Vineyard Vines Sales is © 2019, Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
