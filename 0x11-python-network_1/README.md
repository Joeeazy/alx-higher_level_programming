# General

How to fetch internet resources with the Python package urllib

	Making an HTTP GET Request:

	urllib: The urllib library in Python provides modules for working with URLs. To make an HTTP GET request, you can use urllib.request.urlopen(url). This sends a request to the specified URL and returns a response object. To access the content of the response, you need to use .read() and decode it using .decode('utf-8') to convert it from bytes to a UTF-8 encoded string.

How to decode urllib body response

After making a request with urllib, the response body is in bytes. To interpret it as text, you use the decode('utf-8') method, assuming the content is UTF-8 encoded.

How to use the Python package requests #requestsiswaysimplerthanurllib

How to make HTTP GET request

How to make HTTP POST/PUT/etc. request

How to fetch JSON resources

How to manipulate data from an external service
