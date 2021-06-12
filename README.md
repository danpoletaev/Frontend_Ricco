# Ricco - 5. Longer life for furniture

Team Ricco at GreenHack hackathon would love to introduce you its lovely child - App for buying Spare Parts. Ricco app is a mobile platform that helps people to buy spare parts for their furniture or sell it back to IKEA.
## Project Description:

There will be project description...

## Installation and running
To successfully install and run Ricco app you would need to:
* clone this frontend repository to your local machine;
* install Expo app on your mobile device;
* install the requirements for the frontend client and run it.
Let's install and run the application step-by-step.

### 1. Pull the repository
 
```
git clone https://github.com/danpoletaev/Frontend_Ricco.git  <project_directory>
```
Where <project_directory> is your desired folder to clone the repository into.

### 2. Running of the backend server on your machine
### NOTE: You should not do it, because of our server is hosted on Heroku. Just go to Frontedn part and use it :)

The project's backend is written in Python with the usage of Flask web framework and an SQLite database.
To install these, make sure that you have Python3.6 or higher and pip installed on your machine.
It is also recommended to create a new virtual environment for the project, so make sure to execute these:

```
python3 -m venv venv
```

```
source ./venv/bin/activate
```

After the virtual environment was created, you can install requirements for the backend part:

```
(venv) pip3 install -r requirements.txt
```

Finally, to run the server, execute this:

```
(venv) python3 main.py
```

### 3. Install Expo app on your mobile device
Install Expo app either on Android or on iPhone:

* App Store: https://apps.apple.com/us/app/expo-go/id982107779

* Play Market: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US

### 4. Install the requirements for the frontend client and run it
#### Make sure you have installed Node.js, npm and yarn

### Go to Frontend folder
```
cd Frontend/
```
### and run:

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
