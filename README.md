# Kaan Genis / 01.05.2024

Project's React Native version is 0.73.4.

You can clone the repo via git cli with >"git clone https://github.com/kaangenis/KaizenCaseStudy" command.
After successfully cloned the repo on your local you have to install JS libraries and pods.

Installation:
*in project path:

> "npm install"
> "cd ios"
> "npx pod install" or "pod install" (If you are using a MacBook with chip Apple Silicon)
> cd ..
> npm start

Build Recommandations:
-If you have an error while installing JS libraries with "npm install" command you can use "npm install --legacy-peer-deps" command.
-This command ignore the peer dependencies and install the latest compatible version of the problematic libraries.

-I prefer run project manually in Xcode for my iOS builds.

*in project path:
> "cd ios"
> open .
*double click "KaizenCaseStudy.xcworkspace"

Select the device you want to use and then (CMD + R) run the project.
After the emulator ready and project installed the device successfully go to terminal and;

*in project path:
>watchman watch-del-all
>npm start

There's no complicated things in android build.

in project path
>npm run android

This project using 3rd party libraries.
Libraries listed in below.

-React Navigation,

-Stack Navigator,

-Bottom Tabs Navigator,

-Axios,

-Day.js,

-Moti,

-RN Gesture Handler,

-RN Reanimated,

-RN Safe Area Context,

-RN Screens,

-RN SVG,

-RN SVG Transformer
