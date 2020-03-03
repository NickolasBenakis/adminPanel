

# AdminPanel

<p align="center">
  <img width="128" height="128" src="https://res.cloudinary.com/nickolasben/image/upload/v1583234789/adminpanel/fugrfq97kge6hf05x58y.png">
</p>

## Table of Contents

-   [Intro](#intro)
-   [Install](#install)
-   [Build](#build)
-   [Run](#run)
-   [Optimizations](#Optimizations)

## Intro

Production built is deployed -> https://adminpanel-mvp.surge.sh/.

adminPanel is a single page application that updates users. 
It is built in React with hooks and Context Api.[React.js](https://reactjs.org/).

## Features

-   Built with bundler (create-react-app)
-   Mobile-first design
-   Update, Save, Cancel 

## Install

To install, `cd` to project root and run:

```
$ npm install
```

## Build

To build for production, `cd` to project root and run:

```
$ npm run build
```

## Run

To run the app in development, `cd` to project root and run:

```
$ npm start
```

## Test

Deploy this application with 

```
$ npm run deploy
```

### Optimizations

A few optimizations have been implemented to help improve the performance of the app, including:

-   Used CDN cloudinary for prefeching images in order to optimize image resolution, responsiveness depending on the viewport and the device [here](https://cloudinary.com/) see more at `src/utils/handleImageUrl.js`
-   Global State with React Hooks ,Context Api with redux pattern [Action,Reducer,State].
-   React.memo and useMemo for Optimal re-rendering
