# README #

This project was generated with Django 2 and Angular

### What is this repository for? ###

* Quick summary: Token View panel to view different token's info and social feeds
* Version: 0.1

### Ubuntu Server Setup ###

Steps to deploy the application on a ubuntu server. These setups assume you have a clean image of ubuntu with nothing installed. Ensure you have port 80 opened on the server.

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
cd /home/ubuntu/WandX-TokenView
chmod +x gunicorn.sh
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
add a new location with below code
************************
location /static/ {
	alias /home/ubuntu/WandX-TokenView/static/;
    gzip_static on;
    expires max;
    add_header Cache-Control public;
}
************************
sudo service nginx start
sudo service nginx stop
sudo service nginx start

./gunicorn.sh

### Run project after server restart ###

cd /home/ubuntu/WandX-TokenView
./gunicorn.sh
sudo service nginx start
