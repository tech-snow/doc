#!/usr/bin/env sh

set -e

npm run build

cd public/

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Chris-Kin/cookie-master-doc.git master:gh-pages

cd -
