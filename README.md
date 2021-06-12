# Ricco - 5. Longer life for furniture

Team Ricco at GreenHack hackathon would love to introduce you its lovely child - App for buying Spare Parts. Ricco app is a mobile platform that helps people to buy spare parts for their furniture or sell it back to IKEA.
## Project Description:

Materialistic and wasteful approach to furniture and goods in general is harming our planet and economy. Sometimes people get rid of the furniture that is in good condition, needs slight repair or misses one component. Oftentimes they get rid of the furniture without returning the unwanted furniture back to the producer or without recycling it properly. Most people are discouraged from doing so because the service that IKEA provides is complicated, requires manuals for the furniture that are usually lost. 
The project itself is a mobile application for both Android and iOS platforms which aims to make IKEA service easier, faster and more accessible for their customers. The application allows users to ask for a specific spare part for that piece of furniture or sell the furniture back to IKEA. The application is a great tool for both IKEA and their customers, since it improves IKEA’s Second life for furniture program and helps people to save money. 

## Installation and running
To successfully install and run Ricco app you would need to:
* clone this frontend repository to your local machine;
* install Expo app on your mobile device;
* install the requirements for the frontend client and run it.
Let's install and run the application step-by-step.

### 1. Pull the repository

Frontend:
```
git clone https://github.com/danpoletaev/Frontend_Ricco.git  <project_directory>
```

Backend:
```
git clone git@github.com:nickdee1/backend-riico.git <project_directory>
```

Where <project_directory> is your desired folder to clone the repository into.

### 2. Backend part description
### NOTE: You should not do it, because of our server is hosted on Heroku. Just go to Frontend part and use it :)

The project's backend is written in Python with the usage of Flask web framework and an SQLite database.
To install these, make sure that you have Python3.6 or higher and pip installed on your machine.
It is also recommended to create a new virtual environment for the project, so make sure to execute these:


### 3. Install Expo app on your mobile device
Install Expo app either on Android or on iPhone:

* App Store: https://apps.apple.com/us/app/expo-go/id982107779

* Play Market: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US

### 4. Install the requirements for the frontend client and run it
#### Make sure you have installed Node.js, npm and yarn

### Run:

```
sudo npm install --unsave-perm -g expo-cli
```
### Then install all packages:
```
yarn install
```
### Then run project:
```
yarn web
```

The web application will automatically load, scan QR code with your mobile.

#### In case it does not load, go to:
```
http://0.0.0.0:19006/
```

* If you use Android -> open Expo app and click Scan

* If you use iPhone -> open your camera and scan QR code, the window will pop up, click on it and wait until it builds

#### Note:
We did not do web platform, so don't mention it

## Team members:
Daniil Poletaev - https://www.linkedin.com/in/danpoletaev

Roman Zhuravskyi - https://www.linkedin.com/in/zhurarom/

Nikita Dvoriadkin - https://www.linkedin.com/in/nickdee1/

Daniil Nilov - https://www.linkedin.com/in/daniil-nilov-8994021b7
