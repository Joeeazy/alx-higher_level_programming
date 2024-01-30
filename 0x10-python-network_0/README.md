# General

* What a URL is

    A URL(uniform resource locator is a reference or address used to access resources on the internet. It is composed of several components, including the scheme, domain name, path, query parameters, and fragment identifier.

* What HTTP is

    HTTP is a protocol used for transmitting hypermedia documents, such as HTML. It is the foundation of data communication on the World Wide Web. HTTP defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.

* How to read a URL

    A URL is typically broken down into several components: scheme://domain:port/path?query#fragment. Each part has a specific role in identifying the resource.

    https://www.example.com:8080/path/to/resource?name=value#section:

     Scheme: https
     
     Domain: www.example.com
     
     Port: 8080
     
     Path: /path/to/resource
     
     Query: ?name=value
     
     Fragment: #section

* The scheme for a HTTP URL

    The scheme is the protocol used to access the resource. For HTTP, it is usually "http://" or "https://".

* What a domain name is

    A domain name is a human-readable address that corresponds to an IP address on the internet. It uniquely identifies a website.

* What a sub-domain is

    A sub-domain is a subdivision of a domain. It is used to organize and navigate to different sections or services within the main domain.

* How to define a port number in a URL

    Port numbers specify the endpoint of a communication channel. In a URL, it follows the domain and is separated by a colon (e.g., http://example.com:8080/path).

* What a query string is

    The query string is a set of parameters appended to the end of a URL, usually used to pass data to a web server.

* What an HTTP request is

    An HTTP request is a message sent by a client (e.g., a web browser) to request a specific action from a server. It includes a method, headers, and sometimes a message body.

* What an HTTP response is

    An HTTP response is the message sent by a server in response to an HTTP request. It includes a status code, headers, and sometimes a message body.

* What HTTP headers are

    HTTP headers provide additional information about the request or response. They include metadata such as content type, content length, and more.

* What the HTTP message body is

    The message body contains the actual data being sent with the request or response. For example, it could be HTML content, JSON data, etc.

* What an HTTP request method is

    The HTTP request method specifies the desired action to be performed on a resource. Common methods include GET, POST, PUT, DELETE, etc.

* What an HTTP response status code is

    The status code is a three-digit number in an HTTP response that indicates the success or failure of the request. Examples include 200 (OK), 301 (permanent redirection), 404 (Not Found), and 500 (Internal Server Error).

* What an HTTP Cookie is

    An HTTP cookie is a small piece of data stored on the user's device by the web browser. It is often used to track user activity and maintain session information.

* How to make a request with cURL

    cURL is a command-line tool used to make HTTP requests and interact with web servers. It supports various protocols, including HTTP, HTTPS, FTP, and more.

* What happens when you type google.com in your browser (Application level)

    When you type "google.com" in your browser and press Enter, the browser sends an HTTP request to the Google servers. The server then responds with an HTTP response containing the HTML content of the Google homepage. The browser interprets this HTML, renders the page, and may make additional requests for resources like images and scripts referenced in the HTML. Cookies may also be exchanged to maintain session information. The result is the display of the Google homepage in your browser.
