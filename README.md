# Property Listings

Property Listings is a take home exercise for Side Inc.

It displays real estate properties from the [SimplyRETS API](https://docs.simplyrets.com/api/index.html#/Listings/get_properties), and allow you to bookmark your favorite properties.

## Installation

Pre-requisites:

- Node.js 14 (current LTS version)
- Yarn (run `npm i -g yarn` to install)

Follow the steps below to install and run the project in your environment:

- Clone the repository
- Run `yarn` to install the dependencies (this is equivalent to `yarn install`)
- Run `yarn start` to run the project
- Copy the URL displayed in your console and open it in your preferred browser

## Decisions

- Removed redundant `react-router` core package as its own documentation recommends to not install it directly
- Replaced bootstrap's reboot for normalize.css because it's focused on CSS resetting while also having a smaller bundle size
