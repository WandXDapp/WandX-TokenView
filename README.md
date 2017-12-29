# Setup Project
django-admin startproject tokenview
python manage.py migrate
python manage.py startapp home

# README #

This project was generated with Django 2 and Angular

### What is this repository for? ###

* Quick summary: Token View panel to view different token's info and social feeds
* Version: 0.1

### Scripts included ###

* AngularJS
* Angular Strap
* Bootstrap
* Bootstrap Daterangepicker
* Bootstrap Datetimepicker
* Fastclick
* Font Awesome
* Gentella
* iCheck
* jQuery
* moment.js
* NProgress

### How do I get set up? ###

* Summary of set up
Download the project as zip file and extract in place of your choice.
Install all dependencies.
Once you have all the dependencies installed in your system simple run project.py file.
Command: python project.py
* Configuration
You will be asked to setup your company when you run the application for first time
* Dependencies
** Python 2.7.10 or later
** Python Django
** Python Jinja2
** PyMySQL
** MySQLClient
** PyPiWin32
* Database configuration
There is a database database_setup.py file included in the project to assist with database setup. Run that file to create a blank database.
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Ubuntu Server Setup ###

Steps to deploy the application on a ubuntu server. These setups assume you have a clean image of ubuntu with nothing installed.

* SSH into server: ssh -i "vikas3434.pem" ubuntu@34.203.225.0
* Run following commands to install dependencies

sudo apt-get update
sudo apt-get upgrade

export LC_ALL="en_US.UTF-8"
export LC_CTYPE="en_US.UTF-8"
sudo dpkg-reconfigure locales

sudo apt-get install python-pip
sudo apt-get install python-dev
sudo apt-get install build-essential

sudo apt-get install python3-venv
python3 -m venv env

source env/bin/activate
export LC_ALL="en_US.UTF-8"
export LC_CTYPE="en_US.UTF-8"
pip install django
pip install gunicorn
git clone https://github.com/SecureBlocks/WandX-TokenView
deactivate

sudo apt-get install nginx

sudo vim /etc/nginx/nginx.conf
change user line to -> user ubuntu ubuntu;

sudo vim /etc/nginx/sites-enabled/default
find section server {}
under location /{} add below line between starts
************************
proxy_set_header X-Forwarded-Host $host;
proxy_set_header X-Forwarded-Server $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_pass http://127.0.0.1:8000;
************************
sudo service nginx start
sudo service nginx stop
sudo service nginx start


