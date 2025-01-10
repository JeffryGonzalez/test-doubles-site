# Using WireMock to Intercept HTTP Requests

If our service is *integrating* with other services by making network requests as *remote procedure calls*, we can run into many of the same situations and *deadlocks* we discussed in the browser section of this content. 

1. **Speed**: The speed of the remote server may *harsh our mellow* and become an annoyance during development. 
2. **Availability**: If the remote service is not available, you can't run your code. 
3. **Cost**: Some remote services charge for use. Address verification services, for example, charge for each call. 
4. **Predictability**: We don't know *exactly* what a remote API is going to call for any given request. If we *did know*, we wouldn't need to make a late-bound network call in the first place. Using shared "dev" or "test" APIs can be hard to keep consistent. In other words, even though the API is not predictable, we need to write code to handle expected variations of the responses, including error.
5. **Deployment Timing**: Maybe the remote API isn't even available yet - another person or team is building it. 

> [!NOTE] RPCs are Not the Best Integration Pattern
> The list above, in particular points 1-3, are true outside of our development environment as well. 

## WireMock

[WireMock](https://github.com/wiremock) is a Java application (suite of applications), with a cloud offering. It is open-source, and has been widely used in development, especially by software testers, for many years.

It is, itself, an HTTP based API and can be configured and managed through HTTP requests. While it has an included SDK for configuration in Java, SDKs for other languages are plentiful.

- [Go WireMock](https://github.com/wiremock/go-wiremock)
- [Python WireMock](https://github.com/wiremock/python-wiremock)
- [DotNet](https://wiremock.org/docs/solutions/dotnet/)

It can also integrate with [Test Containers](https://github.com/WireMock-Net/WireMock.Net/wiki/Using-WireMock.Net.Testcontainers).

