#! /bin/bash
echo "# docasaurus-ma-ui" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:dfirence/docasaurus-ma-ui.git
git push -u origin main