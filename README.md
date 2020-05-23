# NLP Sentiment Analysis App

- Author - Kumar Saurabh Raj
- Technologies Used - NodeJS, express, APIs, NLP, webpack, jest, workbox, SaSS, Semantic UI

## Introduction

This application analyses the sentiment of aticles on provided url using `Aylien API` and displays it on the screen. It is similar to a progressive web app and all parts of the app other the fetching results from the API are functional offline.

## Get Up and Running

First clone this repo using the following command

    git clone https://github.com/ksraj123/sentimentAnalysisApp.git

Sign up [here](https://developer.aylien.com/signup) for the API key and ID
create a `.env` file in the project root of the following format

    API_ID=<API ID HERE>
    API_KEY=<API KEY HERE>

`cd` into your project folder and run:

- ```npm install```
- ```npm start``` to start the app
- this app runs on localhost:8080, but you can of course edit that in server.js