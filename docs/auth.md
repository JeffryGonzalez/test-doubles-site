# Using Test Doubles for Authentication

When we are using a *shared language* API like an  OIDC/Oauth2 identity server, you can use a test-double that  implements that API, but does not require real  authentication.

This is can be  super useful for testing one of - if  not **the** most  important parts  of your application - *authentication and authorization**.

For this test double,  we will use a  Docker container. (`docker-compose.yml`) using the [https://github.com/navikt/mock-oauth2-server](https://github.com/navikt/mock-oauth2-server)  container.

```yaml {title: "docker-compose.yml"}
services:
  auth:
    image: ghcr.io/navikt/mock-oauth2-server:2.1.10
    ports:
      - 9090:8080
```

## Video  Walkthrough
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1045426557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Browser-Oidc-Oauth2"></iframe></div>