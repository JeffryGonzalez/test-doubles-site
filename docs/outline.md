# Overview

Test Doubles are things we use to stand in for things (services) in software development and in testing software. 

> "...Test  Double  as the  generic term for  any kind of pretend object used in place of a real object for testing purposes." [Martin Fowler, Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html)

There are various ways to use test doubles.  
- 


## Should be Fun 

"Build" a full-stack app. Start with an Angular frontend - give them a lot of code snippets, etc.


## Service Relationships

[Customer/Supplier](https://ddd.acloudfan.com/4.strategic/40.relationships/#pattern--customer-supplier)

Consumer Contract Testing - a form of interface segregation principle. 

Being self-reliant: your application should try to do everything on its own, but when collaboration is needed with other services,
you should rely upon a shared language (a standard) or a contract that your application owns. 
       
### Shared Language

* OAUTH2/OIDC - https://github.com/navikt/mock-oauth2-server
* Database - SQL? Version?

## Browser-Based Apps

[Mock Service Works](https://mswjs.io/) 

[Pact MSW Integration](https://docs.pactflow.io/docs/bi-directional-contract-testing/tools/msw)


