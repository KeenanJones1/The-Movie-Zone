# The-Movie-Zone

A dynamic movie app that receives data from an external RapidApi and an internal API built with Ruby on Rails saves to local storage. Built with React JS, below is a list of the packages and properties used.

## Installation

Clone the repo from github

```shell
cd backend
```

### Check your Ruby version

```shell
ruby -v
```
The ouput should start with something like `ruby 2.5.1`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
 rvm use 2.7.2
```

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler) and [Yarn](https://github.com/yarnpkg/yarn):

```shell
bundle install
```

# Check if PostgreSQL is installed

postgres -V

- bash: postgres: command not found

# Install PostgreSQL via Homebrew

brew install postgresql
postgres -V

### postgres (PostgreSQL) 11.3


### Initialize the database

```shell
rails db:setup db:migrate db:seed
```

## Serve

```shell
rails s -p 3000
```

Make sure that the rails backend is running on localhost: 3000 before starting the react server.
```bash
  cd frontend
  npm install
  npm start
```

## Lessons Learned

This was project was used as my introduction to react-spring. I wanted to take this opportunity to practice using animations.
Even though the animations I used were rudimentary I learned the fundamentals and enjoyed myself while doing so. The biggest obstracles this project provided were just understand the flow of API request I wanted to make and where to place them to be most efficient.

## Demo

![](https://media4.giphy.com/media/KgJ3X3qSuMSq9VRw94/giphy.gif?cid=790b7611a3e63c3ca6c2e7e872c9bbc9efcd3e2c79b0fdce&rid=giphy.gif&ct=g)


