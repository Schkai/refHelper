# Refugee Helper
This guide shows you the requirements for developing on the refugeeHelper App. The App is based on the [Ionic 2 Framework](https://ionicframework.com/docs/), so you need to have a few services on your system.

Ionic apps are created and developed primarily through the Ionic command line utility (the This guide shows you the requirements for developing on the refugeeHelper App. The App is based on the [Ionic 2 Framework](https://ionicframework.com/docs/), so you need to have a few services on your system.“CLI”), and use Cordova to build and deploy as a native app. This means we need to install a few utilities to get developing.

## Setup
First of all, install [Node.js 6](<https://nodejs.org/en/>) or greater. Then proceed to install Ionic CLI and Cordova for native app development.

```$ npm install -g ionic cordova ```

You maybe need to add "sudo" in front of all commands to install the utilities globally. That's it for now, your basic development setup is ready.

## Platform Guides
Each platform (iOS and Android) has certain features and installation requirements before you can get developing. 

For iOS developers, look at the [Cordova iOS Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/) and follow the instructions to install XCode, and learn how to start testing you app in the simulator or a real device.

For Android devs, take a look at the [Cordova Android Platform Guide]([https://cordova.apache.org/docs/en/latest/guide/platforms/android/](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/) and follow the instructions to install the SDK needed.

## Start developing
After you successfully set up your development environment, it's time to load the refugeeHelper App.

First of all, Since we are working in a project with node dependencies, install those with
 ```$ npm install``` 
in your working directory.

Then, satisfy your dependencies with
```$ ionic state restore```

After that, you can start a local development server using
```$ ionic serve --lab```
which will set up a local server with live reload and all platforms previously added.

## Pages

The app loads with the `NeedPage` as the default. 

The entry and main pages can be configured easily by updating the corresponding
variables in `src/app/app.component.ts`.

in
[src/pages/pages.ts](https://github.com/ionic-team/starters/blob/master/ionic-angular/official/super/src/pages/pages.ts).

Please read the
[Pages](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/super/src/pages)
readme, and the readme for each page in the source for more documentation on
each.

## Providers

The app comes with an implementations of the translation provider. It automatically detects you device's language and sets the according i18n translation. If no corresponding file is found, the app will use the default english language.


## i18n

The app comes with internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file. 

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify
`translate.use('en')` to use the LANGCODE from `src/assets/i18n/`
