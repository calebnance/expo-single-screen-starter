# React Native Single Page Starter with Expo

## install
`yarn install`

***note:*** *make sure you at least have node ^v10.8.0*

### run on physical device
- first, your machine and physical device should be on the same wifi connection
- make sure you have Expo CLI installed globally, if not run: `npm install -g expo-cli`
- then navigate to this project's directory on your machine and run: `expo start`
- now download the Expo Client app on your preferred physical device: **Android** [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) and/or **Apple** [App Store](https://itunes.apple.com/us/app/expo-client/id982107779)
- scan the QR code generated when this project was started, allow the build to compile and you should be good to go!
  - *for apple users:* if you have at least iOS 11, you can open your camera app up to scan the QR code.
- having issues? check the [installation page](https://docs.expo.io/versions/latest/introduction/installation) for any pitfalls you may have.

## project notes

### linting: prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

### helpful links
- [using nvm](https://davidwalsh.name/nvm)
- [setup prettier/eslint within project](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)

### adding this linter config to another project
- yarn:
  - `yarn add eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --dev`
- npm:
  - `npm install eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --save-dev`
- then copy over:
  - `.eslintrc`
  - `.prettierignore`
  - `.prettierrc`
