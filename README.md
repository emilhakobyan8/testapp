# Mobile Application in React-Native

## Installation iOS

1. Make sure you have

   [NodeJS](https://nodejs.org/)

   ```
   brew install node
   ```

    [Watchman](https://facebook.github.io/watchman/)

    ```
    brew install watchman
    ```

    [cocoapods](https://cocoapods.org/) installed.

    ```
    sudo gem install cocoapods
    ```

2. Install `react-native-cli`

   ```
   npm install -g react-native-cli
   ```

   For more information please visit [here](https://facebook.github.io/react-native/docs/getting-started.html).

3. Clone down the repository

   ```
   git clone git@gitlab.com:emil.hakobyan1/testapp.git
   ```

4. Install your dependencies

   ```
   npm install
   ```

5. In `ios` folder run

   ```
   pod install
   ```

6. Start the iOS app.

   Open testapp.xcworkspace (in `testapp/ios` folder). Select device or simulator and run the project.


## Installation Android

1. Make sure you have

   [NodeJS](https://nodejs.org/)

   ```
   brew install node
   ```

   [Watchman](https://facebook.github.io/watchman/)

   ```
   brew install watchman
   ```

2. Install `react-native-cli`

   ```
   npm install -g react-native-cli
   ```

   For more information please visit [here](https://facebook.github.io/react-native/docs/getting-started.html).

3. Clone down the repository

   ```
   git clone git@gitlab.com:emil.hakobyan1/testapp.git
   ```

4. Install your dependencies

   ```
   npm install
   ```

5. Setup `Android Studio` by following [these](https://facebook.github.io/react-native/docs/getting-started.html#1-install-android-studio) steps. Run `Android Studio` and open `./android`.
   Wait for gradle indexing... :)

6. Make sure you have `NDK`, `Android SDK Tools` checked in `Android SDK` section.

7. run `npx jetify`.

8. Run the project on the device or emulator.

9. Skip this step if you running on emulator.
   Shake your device (or long press on menu or back buttons). It will open developer menu. Press on `Dev Settings`.

    <img width="443" alt="devmenu" src="https://user-images.githubusercontent.com/13519034/42525413-23dcd9d8-8484-11e8-8f61-6c82b44c4541.png">

Press on `Debug server host & port for device` and type `${your_ip_address}:8081` (e.g. `192.168.3.93:8081`).
Reload the app.

#### Available deep links
1. `testapp://` - opens app
2. `testapp://auth` - opens app and navigates to auth screen
3. `testapp://map` - opens app and navigates to map screen(authenticated)
4. `testapp://camera` - opens app and navigates to camera screen(authenticated)
