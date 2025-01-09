# Using Test Doubles With Server Apps

While writing tests for server apps, your language/framework no doubt provides facilities for providing test-doubles for code within your project.

As is the theme in this content, though, we are going to primarily look at ways to use test-doubles for backing services, like databases, APIs, and message brokers.

These will run *out-of-process* from our application, and we will be communicating with them with the same mechanisms we would ultimately be using in production. E.g. we will make *real* HTTP requests to other APIs, use *real* databases (not "in memory" stand ins), and talk to *real* message brokers.

The end result (and this is the goal of the browser-based test doubles presented here as well) is that the only thing that will change about our application from running locally, being tested in our pipeline or a staging environment, and in production is the *configuration*. 

> [!NOTE] Configuration is What Defines an Environment
> Maybe a bit overstated, but our goal is to not have different builds of our application running in different environments.
