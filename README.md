# Installation without Docker

1. Install dependencies: `npm install`
2. Run app: `npm start`
3. Test app: `curl localhost:3000` (Change port by exposing $PORT)

# Installation with Docker
1. Build the docker image: `docker build . -t "docker_build_exercise"`
2. Run the image: `docker run -e PORT=3000 -p 4000:3000 -d "docker_build_exercise"`
3. Test the app: `curl localhost:4000`

# Installation from DockerHub
Just use `pascaldmueller/docker_build_exercise:latest` to get the image. E.g.
`docker run --rm --name order-business-card-service -e PORT=4000 -p 4000:
4000 pascaldmueller/docker_build_exercise:latest`

# Usage
Make a POST request to the `/orders/businesscard` endpoint. It expects a JSON
object with a `name` and `brand` property.

E.g. (**Adjust PORT if needed**)

`curl -H "Content-Type: application/json" -d '{"name": "John Doe", "brand": "Feldschlösschen"}' -i http://localhost:4000/orders/businesscard`
