# Property Listings

Property Listings is a take home exercise for Side Inc.

It displays real estate properties from the [SimplyRETS API](https://docs.simplyrets.com/api/index.html#/Listings/get_properties), and allow you to bookmark your favorite properties.

## Installation

Pre-requisites:

- Node.js 14 (current LTS version)
- Yarn (run `npm i -g yarn` to install)

Follow the steps below to install and run the project in your environment:

- Clone the repository
- Copy the `.env.example` file into `.env` and modify the test credentials if necessary
- Run `yarn` to install the dependencies (this is equivalent to `yarn install`)
- Run `yarn start` to run the project
- Copy the URL displayed in your console and open it in your preferred browser

## Decisions

- Removed redundant `react-router` core package as its own documentation recommends to not install it directly
- Replaced bootstrap's reboot for normalize.css because it's focused on CSS resetting while also having a smaller bundle size
- Switched grayed out text color #979797 from design to the closest AA-compliant color which turned out to be #757575
- Did not written unit tests for UI components because it would take too much time for very little value
- Written only integration tests for the Property Listings page because they add a good value for the time investment, the next component I'd tests for is `PropertyCard`
- Mocked `window.fetch` for controlled integration tests (ensure that the required property fields are displayed)
- Design didn't have scales for paddings, so I've picked a close enough scale in em/rem units

## What's next?

- Write end-to-end test for the Property Listings page and test with the real backend API
- Configure continuous integration with GitHub actions to run jest and end-to-end tests
- Set up [Storybook](https://storybook.js.org/), create stories for all UI components, and configure a [Chromatic](https://www.chromatic.com/) account with continuous integration on GitHbu actions, so that we would
- Apply global styles from styled-components and create an appropriate theme for all basic text and background colors, to allow for simpler theme customization
- Replace `window.fetch` mocking for a more decoupled mocking solution like [msw](https://mswjs.io/)
- Write unit test for the `PropertyCard` component, low investment and a fine investment (any regression would prevent hitting Chromatic, saving unnecessary runs that will definitely fail)
