const http = require("http");
const url = require('url')

const products = ['milk', 'eggs', 'cheese', 'pork', 'shrimp', 'chicken'];

http.createServer(function (request, response) {

    const parsedUrl = url.parse(request.url, true);

    if (parsedUrl.pathname === '/profile') {
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.write('This is the /profile page')
    } else if (parsedUrl.pathname === '/products') {
        const search = parsedUrl.query.search;
        if (search && products.includes(search)) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write('Product found')
        } else {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write('Product not found')
        }
    }
    else if (parsedUrl.pathname === '/cart') {
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.write('This is the /cart page')
    }
    else if (parsedUrl.pathname === '/register') {
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.write('This is the /register page')
    }
    else if (parsedUrl.pathname === '/login') {
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.write('This is the /login page')
    }
    else {
        response.write(request.url);
    }
    response.end();
}).listen(7070);