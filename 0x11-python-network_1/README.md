# General

* How to fetch internet resources with the Python package urllib

	Making an HTTP GET Request:

	urllib: The urllib library in Python provides modules for working with URLs. To make an HTTP GET request, you can use urllib.request.urlopen(url). This sends a request to the specified URL and returns a response object. To access the content of the response, you need to use .read() and decode it using .decode('utf-8') to convert it from bytes to a UTF-8 encoded string.

* How to decode urllib body response

	After making a request with urllib, the response body is in bytes. To interpret it as text, you use the decode('utf-8') method, assuming the content is UTF-8 encoded.

* How to make HTTP GET request using the Python package requests #requestsiswaysimplerthanurllib

	requests: The requests library is a popular alternative to urllib for making HTTP requests. To make an HTTP GET request using requests, you can use requests.get(url). The response object's .text attribute gives you the content as a string.

* How to make HTTP POST/PUT/etc. request

	requests: requests simplifies making various types of HTTP requests. For example, requests.post(url, data=data) sends an HTTP POST request with the specified data. You can use other methods like requests.put(), requests.delete(), etc., for different HTTP methods.

* How to fetch JSON resources

     Using urllib:
	When working with JSON resources, you can use urllib to make a request, read the response content, and then parse it into a Python object using the json.loads() method.

     Using requests:
	requests simplifies the process of working with JSON. By calling the .json() method on the response object, you directly get a Python object (e.g., a dictionary) representing the JSON content.

* How to manipulate data from an external service

	When dealing with data from an external service, the general steps include making a request to the service's API, receiving a response (usually in JSON format), and then extracting and manipulating the relevant data based on the API documentation. Understanding the structure of the response and the API documentation is crucial for effective data manipulation. It often involves iterating through data structures, accessing specific fields, and performing the desired operations.
