#!/usr/bin/env bash

set -ex

npx tsc --declaration --sourceMap
npx tsc

npm install -g