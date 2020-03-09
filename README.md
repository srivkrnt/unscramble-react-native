# Building APK from a react-native project

* Generate a keystore
- keytool -genkey -v -keystore your_key_name.keystore -alias your_key_alias -keyalg RSA -keysize 2048 -validity 10000

* Add it to your project
- Firstly, you need to copy the file your_key_name.keystore and paste it under the android/app directory in your React Native project folder.

- You need to open your android\app\build.gradle file and add the keystore configuration. There are two ways of configuring the project with keystore.
android {
....
  signingConfigs {
    release {
      storeFile file('your_key_name.keystore')
      storePassword 'your_key_store_password'
      keyAlias 'your_key_alias'
      keyPassword 'your_key_file_alias_password'
    }
  }
  buildTypes {
    release {
      ....
      signingConfig signingConfigs.release
    }
  }

* Release APK generation
- cd android
- ./gradlew assembleRelease

As a result, the APK creation process is done. You can find the generated APK at android/app/build/outputs/apk/app-release.apk. This is the actual app, which you can send to your phone or upload to the Google Play Store.