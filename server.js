const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        res.end("<h1>Welcome to My Node.js Server</h1>");
    } 
    else if (req.url === "/about") {
        res.end("<h1>About Page</h1><p>This is my Web Dev III assignment.</p>");
    } 
    else if (req.url === "/contact") {
        res.end("<h1>Contact Page</h1><p>Welcome to the contact page.</p>");
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});