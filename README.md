# Timestamp Microservice - FreeCodeCamp

### User Stories:

1. The API endpoint is `GET [project_url]/:date`
2. When the user passes a **valid** date string in format of an Unix timestamp or natural language, the API returns a JSON with the Unix timestamp and the natural language form of that date.
3. If the date string is **invalid** the API returns a JSON with unix timestamp and natural language values **null**.

#### Example Usage:
* [https://fcc-timestamp.gomix.me/feb%2025,%202017](https://fcc-timestamp.gomix.me/feb%2025,%202017)
* [https://fcc-timestamp.gomix.me/february%2025,%202017](https://fcc-timestamp.gomix.me/february%2025,%202017)
* [https://fcc-timestamp.gomix.me/2-25-2017](https://fcc-timestamp.gomix.me/2-25-2017) 
* [https://fcc-timestamp.gomix.me/1487980800000](https://fcc-timestamp.gomix.me/1487980800000)

#### Example Output:
`{ "unix": 1487980800000, "natural": "February 25, 2017" }`
