#!/bin/bash
echo "Is Production: $1"
echo "hash: $2"

ENV="beta"
if [ "$1" = "true" ]; then
  ENV="prod"
fi

FILE=$2.tar.gz
if test -f "$FILE"; then
  echo "$FILE exists."
fi

# Save private key to a temporary file
echo "$SSH_PRIVATE_KEY" > id_rsa
chmod 400 id_rsa

ssh -i id_rsa $SSH_USERNAME@$SSH_HOST << EOF
  mkdir -p Code/DarkThrone/$ENV/Website/builds
  mv builds/$FILE Code/DarkThrone/$ENV/Website/builds
  cd Code/DarkThrone/$ENV/Website/builds
  tar -xzf $FILE
  mv build $2
  rm $FILE
  cd ..
  rm current
  ln -s builds/$2 current
  ls
EOF

# Remove the temporary private key file
rm -f id_rsa
