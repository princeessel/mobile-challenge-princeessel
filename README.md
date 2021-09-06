# Flogistix Mobile Challenge

## Background
* We have been asked to build a native mobile application that easily allows user to visualize, filter, and understand trends from the Earth Meteorite Landing dataset from NASA:
  * Overview of dataset: https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh
  * Direct link to JSON file: https://data.nasa.gov/resource/y77d-th95.json

## Requirements
* The ability to view the dataset in an organized, sensible way.
* The ability to search for individual meteorites by Name and/or ID.
* The ability to save a list of their favorite meteorites that persists after application termination.
* The application should be written with React Native

## Objectives & Deliverables
* Initial application should run on iOS with code being capable of building for Android with minimal additional code
* Code committed to Github and ready for building
* Build instructions for iOS
* Overview of step for making it Android-ready
* General end-user instructions for using the app 

## Mobile - app Challenge Documentation
##System Minimum Requirements

The installation of the following will be described in `Setting Up the Development Environment` section,  please make sure they have sufficient versions.

###### General

* Node.js ≥ 12.9.0
* Watchman ≥ 4.9.0

###### IOS

* Homebrew ≥ 2.5.11
* Xcode ≥ 12.0
* CocoaPods ≥ 1.10.0

###### Android

* JDK ≥ 8
* Android Studio ≥ 4.1
* Android SDK ≥ 29




## Setting Up the Development Environment

###### General


Install Node  through the [Homebrew package manager](https://brew.sh/index_ru):

`brew install node`

######Target OS - Android

##### Installing dependencies

You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

##### Node & Watchman

It's recommended installing Node and Watchman using [Homebrew][https://brew.sh/]. Run the following commands in a Terminal after installing Homebrew:

`brew install node`

`brew install watchman`


[https://brew.sh/]: https://brew.sh/

##### Java Development Kit

`brew cask install adoptopenjdk/openjdk/adoptopenjdk8`

##### Android development environment

**1. Install Android Studio**

[Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

* `Android SDK`

* `Android SDK Platform`

* `Android Virtual Device`

* If you are not already using Hyper-V: `Performance (Intel ® HAXM)`

Then, click "Next" to install all of these components.

_If the checkboxes are grayed out, you will have a chance to install these components later on._

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

**2. Install the Android SDK**

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `Android 10 (Q)` SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

_The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK._

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android 10 (Q)` entry, then make sure the following items are checked:

* `Android SDK Platform 29`
* `Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that `29.0.2` is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

**3. Configure the ANDROID_HOME environment variable**

The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using `zsh` then `~/.zprofile` or `~/.zshrc`) config file:

`export ANDROID_HOME=$HOME/Library/Android/sdk
`

`export PATH=$PATH:$ANDROID_HOME/emulator
`

`export PATH=$PATH:$ANDROID_HOME/tools
`

`export PATH=$PATH:$ANDROID_HOME/tools/bin
`

`export PATH=$PATH:$ANDROID_HOME/platform-tools
`

Type source `$HOME/.bash_profile` for `bash` or `source $HOME/.zprofile` to load the config into your current shell. Verify that ANDROID_HOME has been set by running `echo $ANDROID_HOME` and the appropriate directories have been added to your path by running `echo $PATH`.

_Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK._

##### React Native Command Line Interface

React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, it's recommended to access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.


##### Preparing the Android device

You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer.

Either way, you will need to prepare the device to run Android apps for development.

**Using a physical device**

If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](https://reactnative.dev/docs/running-on-device).

**Using a virtual device**

If you use Android Studio to open `./AwesomeProject/android`, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio.

If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the Q API Level 29 image.

_If you don't have HAXM installed, follow [these instructions](https://github.com/intel/haxm/wiki/Installation-Instructions-on-macOS) to set it up, then go back to the AVD Manager._

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.



######Target OS - IOS

##### Installing dependencies

You will need Node, Watchman, the React Native command line interface, and Xcode.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

##### Node & Watchman

Install  Node & Watchman as described in steps for Android setup.

##### Xcode & CocoaPods

The easiest way to install Xcode is via the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 9.4 or newer.

##### Command Line Tools

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

##### Installing an iOS Simulator in Xcode

To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

##### CocoaPods

CocoaPods is build with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, however we recommend that you use the standard Ruby available on macOS unless you know what you're doing.

Using the default Ruby install will require you to use sudo when installing gems. (This is only an issue for the duration of the gem installation, though.)

`sudo gem install cocoapods`


## Before Running the App

Install required JS libraries and link native code in order to resolve dependencies between libraries, fetch the resulting source code, then link it together in an Xcode workspace to build the project:
 
`npm install`

## Running the App
**Step 1: Start Metro**

First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—[Metro Docs](https://facebook.github.io/metro/docs/concepts/)

To start Metro, run `npm run start` inside app folder. This will start Metro Bundler.

`npm run start`

**Step 2: Start the application**

Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

IOS: `npx react-native run-ios`

Android: `npx react-native run-android`

##### Running on a device

The above command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device, please follow the instructions [here](https://reactnative.dev/docs/running-on-device).


## General end-user instructions for using the app
Asumptions: App is launched successfully and User is on the Main Screen

1. Once app is launched successfully and user is on the main screen
 a). User can search different meoterite's data using either the name or Id by entering it in the search input field.

 b). Add your favorite meteorite to the favorite screen by tapping on the plus(+) icon next to the name. A dialog box will pop up. Tap 'OK' button to dismiss it.

 c). To View the favorite screen from the main screen tap on the heart icon at the top right corner of the header bar. 

 2. User is on the favorite screen.
  a). On this screen user will see the list of his/her favorite meteorites added.

  b). User can delete any of the meteorite by tapping on the 'X' icon next to the name of the meteorite.

  c). When no meteorite has been added to favorites, user is presented with an empty screen with an option to add favorites by tapping on the floating action button at the lower right conner of the screen or just hit back arrow to navigate to the main/homescreen.

  3. Data Persistance after termination of the app.
   a) Make sure you have added your favorite meteorites to the favorites screen.
   b) Kill the app and relaunch it.
   c) Navigate to the favorite screen. It's expected that your favorites meoterites are still there.

   ## Note
   App design is not too fancy. I rather focused on functionality rather than design for this code challenge. On a real project we will have UI/UX design team to design the comps for us to build. We can always make it fancy at a later time.

