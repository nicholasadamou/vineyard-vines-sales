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
</p>

---

## What is '_Vineyard Vines / Sales_'?

I started this project first as a web-scrapper to obtain the latest data on their sales for mens and womens. Then, I decided, since I have the data from Vineyard Vines, why not try to reconstruct their sales page for both men's an womens?

## Why is this repository deprecated?

With Vineyard Vines moving to a dynamic SSR application, the use of [*JSSoup*](https://github.com/chishui/JSSoup) will no longer work. Therefore, I have decided to deprecate this repository.

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

yarn install # alteratively, 'npm' can be used

yarn start
```

In order for this application to function properly, you must install and use [`CORS Unblock`](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/) extension for Chrome. This is required to allow JSSoup to scrap data from Vineyard Vines and use it in the front-end.

## License

Vineyard Vines / Sales is © Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
