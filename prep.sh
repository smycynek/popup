#! /bin/bash
yarn build
rm -rf popup
rm popup.zip
mv build popup
zip -r popup.zip popup