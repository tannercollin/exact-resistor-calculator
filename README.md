# Exact Resistor Calculator
Recommends resistors to combine in parallel to meet an exact target.

## Usage

Enter the target resistance you wish to make in the first field.
The app will then recommend a value for a resistor to start with.
It will be the same value as you entered because that will obviously get you to your target.

Next go find a resistor as close to the recommended value and then measure it.
Enter the reading into the list of resistors that you have.
Then keep doing this for all the resistor values that the app recommends.

Within 2-3 resistors, you'll notice the percent error from your target will drop well into a suitable range.

## Setup

Please install Exact Resistor Calculator from the Google Play Store on your Android phone for free.

## Source Code

### License

Exact Resistor Calculator is free and open-source software released under the MIT License.

### Building

Building Exact Resistor Calculator from source is very easy.
Clone this repository, set up react-native, and then run these commands:

```
$ npm install
$ react-native run-android
$ react-native start
```

If you want to debug on your physical phone, be sure to run ```adb reverse tcp:8081 tcp:8081``` first.
