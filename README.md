# Single Screen Starter with Expo

[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://github.com/expo/expo) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo)

[![follow @calebnance](https://img.shields.io/twitter/follow/calebnance.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/calebnance)

## Table of Contents

- [Install & Build](#install--build)
- [Features](#features)
- [Testing with Jest](#testing-with-jest)
- [Linting](#linting)
- [Assets](#assets)
- [Device Learnings](#device-learnings)
- [Release Notes](#release-notes)
- [Demo](#demo)

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

Install: `yarn` or `yarn install`

Run Project Locally: `yarn dev` or `yarn start`

## Features

- Expo SDK 41
- iOS, Android and PWA (Web App)
- Test with Jest
- PropTypes

## Testing with Jest

- `yarn test`
  - **"jest --watch --coverage=false --changedSince=origin/master"**
- `yarn testDebug`
  - **"jest -o --watch --coverage=false"**
- `yarn testFinal`
  - **"jest"**
  - this will generate
    - a report within the console
    - a html code coverage report within `/coverage/`
    - <img src="screenshots/jest-coverage.png?raw=true" />
- `yarn updateSnapshots`
  - **"jest -u --coverage=false"**

***helpful notes:*** for animation and delays, make sure you add: `jest.useFakeTimers();`

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Assets Used

[black rabbit icon](https://thenounproject.com/search/?q=rabbit&i=1211060) was bought (royalty-free license)

## Device Learnings

**ios:** the notch on iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max is **30px** from top

## Release Notes

below is the inspiration for this single screen app starter functionality with side by side comparison

### version: 0.0.2 (current)

- upgraded to [Expo SDK 41](https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
- upgraded to [Expo SDK 40](https://blog.expo.io/expo-sdk-40-is-now-available-d4d73e67da33)
- upgraded to [Expo SDK 39](https://blog.expo.io/expo-sdk-39-is-now-available-4c10aa825e3f)
- upgraded to [Expo SDK 38](https://blog.expo.io/expo-sdk-38-is-now-available-ab6cd30ca2ee)
- upgraded to [Expo SDK 37](https://blog.expo.io/expo-sdk-37-is-now-available-dd5770f066a6)
- upgraded to [Expo SDK 36](https://blog.expo.io/expo-sdk-36-is-now-available-b91897b437fe)
- upgraded to [Expo SDK 35](https://blog.expo.io/expo-sdk-35-is-now-available-beee0dfafbf4)
- upgraded to [Expo SDK 34](https://blog.expo.io/expo-sdk-34-is-now-available-4f7825239319)
- upgraded to [Expo SDK 33](https://blog.expo.io/expo-sdk-v33-0-0-is-now-available-52d1c99dfe4c)
- upgraded to [Expo SDK 32](https://blog.expo.io/expo-sdk-v32-0-0-is-now-available-6b78f92a6c52)
- upgraded to [Expo SDK 31](https://blog.expo.io/expo-sdk-v31-0-0-is-now-available-cad6d0463f49)
- started with [Expo SDK 30](https://blog.expo.io/expo-sdk-30-0-0-is-now-available-e64d8b1db2a7)

### version: 0.0.1

this starter app is at a good state

- menu screen that slides in from the left or the right (native StatusBar fades out on open)
- persistant `<InfoBar />`
- `<ProgressBar />` within `<InfoBar />`, that animates up by 10% each menu open (for example on usage)

## Demo

<p align="left">
  <img src="screenshots/side-by-side.gif?raw=true" width="320" />
</p>
