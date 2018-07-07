# NodeJS Fundamentals

Install dependencies:

    npm install 

or 

    docker-compose run --rm app npm install

Start web server:

locally:

    npm start

or using docker:

    docker-compose up app

execute request:

locally:

    curl -i localhost:8080/api/posts
    curl -i "localhost:8080/api/posts?from=1"
    curl -i "localhost:8080/api/posts?size=1"

or using docker:

    docker-compose exec app curl -i localhost:8080/api/posts
    docker-compose exec app curl -i "localhost:8080/api/posts?from=1"
    docker-compose exec app curl -i "localhost:8080/api/posts?size=1"
