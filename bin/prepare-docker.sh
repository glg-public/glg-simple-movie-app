#!/usr/bin/env bash

function _which () {
  which "$1" > /dev/null
}

for cmd in base64 docker; do
  if ! _which $cmd; then
    echo "You must install the command `$cmd`" && exit 1
  fi
done

