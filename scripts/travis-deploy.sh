#!/bin/sh

# Place ssh keys
openssl aes-256-cbc -K $encrypted_9395ba38d102_key -iv $encrypted_9395ba38d102_iv -in scripts/webdeploy.enc -out ~/.ssh/id_rsa -d
cp scripts/webdeploy.pub ~/.ssh/id_rsa.pub
chmod 0400 ~/.ssh/id_rsa

# Add pythonanwhere to known hosts
ssh-keyscan -H cavejunction.dreamhost.com >> ~/.ssh/known_hosts

# Deploy via rsync
rsync -e ssh -hav --progress _site/ --compress kyleniemeyer@cavejunction.dreamhost.com:~/kyleniemeyer.com/
