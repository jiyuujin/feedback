# Permission Denied
# chmod +x deploy.sh

#!/usr/bin/env sh

set -e

# Webpack4 Build
yarn run build

# Output Directory
cd dist

git init
git add -A
git commit -m 'deploy'

# Deploy to https://jiyuujin.github.io/vue-fes-japan-2018-feedback
git push -f git@github.com:jiyuujin/vue-fes-japan-2018-feedback.git master:gh-pages

cd -
