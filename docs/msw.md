# Mock Service  Workers

We will use Mock Service Workers [mswjs.com](https://mswjs.io/) to provide test doubles for our browser-based applications. 

This is a *great* library that can be used for providing test doubles for HTTP (e.g. "REST") APIs, GraphQL APIs, and standards-based websockets.

It can be used to support multiple scenarios:

- **As part of your isolated automated tests.** Tests can each use a different double for the same response.
- **During manual testing / development.** You can use MSW only during development as you run your application to provide isolation, and allow the developer to experiment with different scenarios. 
- **In Production** - I've used MSW as a way to "insulate" my application logic from complex API logic, and as a "shim" until changes are implemented on the backend. For example, using MSW as a sort of centralized "mapping" layer for API access.

## About Service Workers

Service Workers are a browser standard [See Mock Service Workers at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). They allow a JavaScript file to be loaded in an isolated environment alongside an application that run a separate (logical) thread of execution from your application. They have no direct access to the DOM, but can be communicated with through your application code.

One key use of service workers is their ability to intercept HTTP requests made by the web browser's APIs (XHR, Fetch). They are frequently used to provide "offline" functionality and syncing of data from servers with stateful applications running in a browser. Another common use is notifications. 

## Mock Service Workers

The Mock Service Worker (MSW) library uses service workers in the browser to intercept HTTP requests made by our application code. 

MSW can be used to provide test doubles for HTTP, Websocket, and GraphQL requests. We will only be looking at HTTP Requests in this training.

Using MSW, we can:

### Intercept and Override HTTP Requests

In the places in your application where your code calls external APIs, those requests can be intercepted without making any changes to your application code. This is useful because it allows us to experiment with different *scenarios*. If you are calling an API from your application, you are doing so because the data or the functionality provided by that API has a different rate of change from your built/deployed application. You may have a "dev" version of an API you can work against, but having that API support different scenarios/responses is challenging.

For example, you may have the following scenarios for a fictional playlist application:

1. "When displaying the list of songs in the user's playlist, each song should be shown in a UI element in order of when they were added by the user".
  1. If the description for a song provided by the user is longer than the display element can hold, it should indicate an overflow with an ellipses (...).
  2. Every song added within the last seven days should have the "new song" badge. 
2. "When there are no products from the API, a message should be shown to the user, encouraging them to add songs".
3. "If a playlist contains more than 50 songs, the results should be paginated, 25 at a time".
4. "If there is an error returning the playlist, the user should be given an error message, and our telemetry API should be notified."

Another scenario you might want to consider is if the API returns a success status code, but the content of the response doesn't conform to the format your application was coded against. 

MSW is *usually* intended for use during development, or testing, however, I've even used them in production to *hide* complex API interactions from the frontend code as a sort of *adapter*, usually as a first step to migrating to a *backend for frontend* pattern.

Suppose your need information about the logged-in user's order history. Maybe your backend is an old-skool Service Oriented Architecture (SOA), so in order to get the data the frontend needs you would have to call several APIs and aggregate the responses. 

### "Patch" or Modify Requests Made to APIs

[See Response Patching](https://mswjs.io/docs/recipes/response-patching)

I find this technique helpful in removing *deadlocks* between the frontend and the backend developers. Suppose you have an API that has an endpoint that returns *some* of the data you need, but your next version will require the API developer (maybe you!) to attach some additional data on the response. 

### Intercept Requests to APIs that Don't Exist (Yet)

This is the "sweet spot" in my work. While *some* of the APIs that my frontend applications utilize pre-exist the creation of my application, and are "owned" by other teams/companies, etc., mostly I prefer when the API(s) are created in *response* to the needs of the frontend application. The is the basis of the ["Backend for Frontend" pattern](https://aws.amazon.com/blogs/mobile/backends-for-frontends-pattern/). 

My MSW handlers end up becoming a sort of specification for the backend API. As a matter of fact, with *contract testing* with a tool like [Pact](https://docs.pact.io/), your MSW handlers can become a set of tests for the API to fulfill. [See also  Tooling Integration - MSW](https://docs.pactflow.io/docs/bi-directional-contract-testing/tools/msw).




