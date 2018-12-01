# CommonApp v1.0 Release Notes

### Introduction
This document communicates the major features of this first release of the Common App along with known bugs and workarounds.

### Feature Updates
1. *Implemented*: User account management using email address and password and third party authentication via Facebook and Google.
2. *Implemented*: University searching and filtering by any combination of name, location, type (private vs public) and majors offered.
3. *Implemented*: University application module with common and univerity-specific questions, including offline saving/syncing capability.
4. *Implemented*: Application status check functionality for students and application status update functionality for admissions officers.
5. *Implemented*: Mobile money payment platform for university application fee processing.
6. *Implemented*: Admissions decision feature for university admissions officers.

### Known Bugs and Workarounds








=====================================================================================

# CommonApp Installation Guide

- **Pre-requisites**:
	- Hardware:
		- *Physical Device*:
			- Android: Mobile phone running latest version of Android OS
			- iOS: Apple device running latest version of iOS
		- *Virtual Device*:
	  		- Android: Computer with Android Studio [installed](https://developer.android.com/studio/install)
			- iOS: Computer with Xcode [installed](https://developer.apple.com/xcode/)
	- Software:
  		- Computer with latest version of node.js installed [installed](https://nodejs.org/en/)
	
- **Dependent Libraries**:
	- React-Native [installation instructions](https://facebook.github.io/react-native/docs/getting-started.html)

- **Download Instructions**:
	- Clone the application code directly from here

- **Build, Installation and Run Instructions**:
	- Navigate to the folder where the project was cloned from the previous step on Terminal (on Mac) or Command Prompt (on Windows)
	- Open up Android emulator or iOS simulator depending on run platform of choice. If using a physical device, ensure that device is connected to computer using a USB (or other) cable.
	- Now type `npm i` and run the command on the Terminal or Command Prompt. This will install the application dependcies.
	- Then, run `react-native run-android` to build and run the application for Android or `react-native run-ios` to build and run the application for iOS.

The application show now be running on your device!
