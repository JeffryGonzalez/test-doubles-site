# WireMock Setup and Basic Stubbing

## Running a WireMock Server

While you can run WireMock natively, and there is even an `npx wiremock` distribution, you must have the appropriate version of the Java Runtime installed. I prefer to use the WireMock docker container.

##  Video  Walkhtrough

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1045765433?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="WireMock - Docker Startup"></iframe></div>

:::code-group
```yml [compose.yml]
services:
  wiremock:
    image: "wiremock/wiremock:3.10.0"
    container_name: my_wiremock
    ports:
      - "8443:8443"
      - "8080:8080"
    volumes:
      - ./mocks/__files:/home/wiremock/__files
      - ./mocks/mappings:/home/wiremock/mappings
    entrypoint: [ "/docker-entrypoint.sh",  "--disable-gzip", "--https-port=8443", "http-port=8080", "--record-mappings", "--enable-stub-cors", "--verbose" ]
```
:::

See [WireMock Docs - Docker](https://wiremock.org/docs/standalone/docker/) and [WireMock Standalone](https://wiremock.org/docs/standalone/java-jar/) for details.


:::code-group
```json [mocks\mappings\some-stuff.json]
{
    "request": {
        "method":  "GET",
        "url": "/some/thing"
    },
    "response":  {
        "status": 200,
        "body": "Hello, Codemash!  It's a beautiful day!",
        "headers": {
            "Content-Type": "text/plain"
        }
    }
}
```

```http [wiremock.http]
### Link to the Admin Response
GET http://localhost:8080/__admin

### See The Mappings
GET http://localhost:8080/__admin/mappings

### Reset  (reload mappings, files, etc.)
POST http://localhost:8080/__admin/reset

### Requests  (See the requests that have been  received - useful for debugging)
GET http://localhost:8080/__admin/requests

```


:::