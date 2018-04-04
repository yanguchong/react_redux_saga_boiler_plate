# React-Redux-Saga Boilerplate
Simple startup boilerplate for react

## Getting Started 
- clone this repo: https://github.com/yanguchong/react_redux_saga_boiler_plate.git
- in the root directory *npm install*
- in the web directory *npm install*
- in the web directory *npm start* to start the web server
- in the root directory *npm run build:dev*
- goto your browser http://localhost:3000

## Features
* React
* Redux
* Redux-Saga
* Webpack
    * Commons Plugin
    * Source Map

## Overview
Very basic react project starter.  There is no directory structure.  Just a personal preference, I find
it easier to add a directory if needed.  If I'm rapidly creating new controls I find a flat structure
more convenient to work with.

Key Points:
* *Root.jsx* is the start of the application
* *SetupStore* sets up Redux and corresponding middleware
* *Reducer* self explanatory
* *Saga* self explanatory
* *LoadState* loads data from *data-param1* attribute into Redux
* *Api* and *Api_Test* contain functions to make remote Api call(s)
* *Actions* self explanatory

 
