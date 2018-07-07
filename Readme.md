# NodeJS Fundamentals

Run NodeJS locally:

    node index.js
    
Run NodeJS in docker:

    docker-compose up app

or (using bash shell)

    docker run -it --rm -v $(pwd):/app -w /app node:8.9 node index.js

or (using fish shell)

    docker run -it --rm -v (pwd):/app -w /app node:8.9 node index.js
    
