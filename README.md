# Node js Structure

Nodejs project structure using expressjs,socket.io

## Install

###Install current stable version of nodejs

curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh

sudo bash nodesource_setup.sh

sudo apt-get install nodejs

Nodejs current version check

nodejs -v

###Install redis server

wget http://download.redis.io/redis-stable.tar.gz

tar xvzf redis-stable.tar.gz

cd redis-stable

sudo apt-get install make

sudo apt-get install gcc

sudo apt-get install tcl

sudo apt-get install build-essential

sudo apt-get update

if there is another error like "fatal error: jemalloc/jemalloc.h: No such file or directory"

just run "make distclean"

make

make test

https://askubuntu.com/questions/868848/how-to-install-redis-on-ubuntu-16-04
https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-redis-on-ubuntu-16-04

###Install mongodb

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo service mongod start

sudo service mongod stop

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

## Env setup
create .env file in root folder

add this line in .env file for env set

NODE_ENV="local"

##Database connection
default database info (mongodb)

db name - demo

db port - 27017 (default mongodb port)

db user - demo

db pass - demo

##Redis server 
it is use for token store

default redis server setup

server: 'localhost',

port: 6379, (default redis port)

## Development server
base url -
   http://localhost:5001

## Staging server
base url -
   http://localhost:5002

## Production server
base url -
   http://localhost:5003

## Swagger Doc link

http://localhost:5001/apiDocs/

