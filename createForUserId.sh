#!/bin/bash

export PATH="`pwd`/sdk/tools/":"`pwd`/node_modules/.bin/":"`pwd`/bin/":$PATH
export ANDROID_HOME="`pwd`/sdk"
echo "userId=$userId" > www/js/userId.js

export ANT_HOME="`pwd`/lib/ant/"

./node_modules/.bin/ionic platform android

wget --quiet $picurl -O tmpUrl.jpg

convert tmpUrl.jpg -resize 96x96 ./platforms/android/res/drawable/icon.png
convert tmpUrl.jpg -resize 96x96 ./platforms/android/res/drawable-xhdpi/icon.png
convert tmpUrl.jpg -resize 36x36 ./platforms/android/res/drawable-ldpi/icon.png
convert tmpUrl.jpg -resize 48x48 ./platforms/android/res/drawable-mdpi/icon.png
convert tmpUrl.jpg -resize 72x72 ./platforms/android/res/drawable-hdpi/icon.png

./node_modules/.bin/ionic build 

#./www/res/icon/android/
