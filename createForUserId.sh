#!/bin/bash

export PATH="/home/maxired/Downloads/android-studio/sdk/tools/":$PATH

echo "userId=$userId" > www/js/userId.js

wget --quiet $picurl -O tmpUrl.jpg

convert tmpUrl.jpg -resize 96x96 ./platforms/android/res/drawable/icon.png
convert tmpUrl.jpg -resize 96x96 ./platforms/android/res/drawable-xhdpi/icon.png
convert tmpUrl.jpg -resize 36x36 ./platforms/android/res/drawable-ldpi/icon.png
convert tmpUrl.jpg -resize 48x48 ./platforms/android/res/drawable-mdpi/icon.png
convert tmpUrl.jpg -resize 72x72 ./platforms/android/res/drawable-hdpi/icon.png

ionic build 

#./www/res/icon/android/
