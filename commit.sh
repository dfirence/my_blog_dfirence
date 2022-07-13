#! /usr/bin/bash

echo "# my_blog_dfirence" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:dfirence/my_blog_dfirence.git
git push -u origin main
