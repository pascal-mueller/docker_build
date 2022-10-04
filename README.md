# Installation

Run `npm i` to install all dependencies.

Run `node server.js` to start the server.

Test it by doing `curl localhost:3000`. You should be greeted by the
application.

# Usage
Make a POST request to the `/orders/businesscard` endpoint. It expects a JSON
object with a `name` and `brand` property.

E.g.

`curl -H "Content-Type: application/json" -d '{"name": "John Doe", "brand": "Feldschlösschen"}' -I http://localhost:3000/orders/businesscard`


