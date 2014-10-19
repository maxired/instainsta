InstaInsta
==========================

InstaInsta is a sample App displaying the instagram feed of one user.

#Content

A demo is available on [here](http://54.172.18.170:3000).
It consist of a web page displaying the Instagram feed of a user.

You can also get a custom APK dedicated to a user or on [http://54.172.18.170:3000/android/<username>](http://54.172.18.170:3000/android/<username>), for example [http://54.172.18.170:3000/android/barackobama](http://54.172.18.170:3000/android/barackobama ) 

The front is powered by Ionic framework and based on [ionic angular cordova seed](https://github.com/driftyco/ionic-angular-cordova-seed).
The web server is a NodeJS server.


#Installation
##dependencies
The software is designed to run on linux.
When running on a 64 bits host, 32 bits compatibiblity library might be needed for aapt to be working

We tryed to minimised dependencies, and embed lots of stuff in the repo. Still you will need to have a JDK installed on your system.

###
```npm i```

#Running
```node server.js```

By default the server run on port 3000.
You can customized the port by setting the PORT env variable
