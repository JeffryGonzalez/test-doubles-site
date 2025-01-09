# Setting Up for the Test Doubles for Developers Pre-Compiler

I'm happy you have decided to attend the Test Toubles for Developer Confidence pre-compiler at Codemash 2025!

## What You'll Need

There will be two sections to this pre-compiler. The first session will be aimed primarily at frontend developers, and the second for developers building backend services.





### Frontend Developer Tools

The examples and the lab work will be done using Angular 19. There will be demonstrations/documentation of using the same techniques used in a Vue and a React application. 

You can use whatever editor you are comfortable with. In the workshop I'll use Visual Studio Code because that seems to be the lowest common denominator for most folks, 
but if you are more comfortable with another editor, like WebStorm of NeoVim, or whatever, that'll work as well.

If you are new to frontend work, I suggest Visual Studio Code. It'll be easier to follow along with me during the class.

You will also need a recent (LTS) install of NodeJS and NPM. If you don't already have that, an installation link is below.

We will use containers, particularly for the backend portion of the pre-compiler. Please have a container runtime installed that supports the `docker` CLI, along with `docker-compose`. 
The most commonly used container runtime is Docker Desktop. 

#### Download Links:

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Jetbrains Webstorm (Free License Available)](https://www.jetbrains.com/webstorm/download/)
- [NodeJS](https://nodejs.org/en/download/prebuilt-installer/current)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Backend Developer Tools

We will use primarily Microsoft .NET for the example code, but examples will be given for some of the practices in other languages (TypeScript/Node, Go).

Please ensure you have the latest version of the .NET Software Development Kit installed.

While you *can* use Visual Studio code as your editor/IDE for this, you may want to install either Visual Studio Community Edition (If you don't already have a version of Visual Studio on your machine, Windows only), or JetBrains Rider (a free for personal use version is available, Windows, Mac, Linux).

#### Download Links:

- [Dotnet 9 Software Development Kit](https://dotnet.microsoft.com/en-us/download)
- [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/)
- [Jetbrains Rider](https://www.jetbrains.com/rider/download/)

#### Pre-Download Container Images

To save some time and bandwidth during the pre-compiler, please consider pulling the following container images to your local machine ahead of the session.

> Make sure you have your container runtime (like Docker Desktop) and go to a terminal shell and enter the following commands:

*Wiremock*

```sh
docker pull wiremock/wiremock:3.10.0
```
*Postgres*

```sh
docker pull postgres:16.6-bullseye
```

*Mock Oauth2 Oidc Server*

```sh
docker pull ghcr.io/navikt/mock-oauth2-server:2.1.10
```

*Test Containers*

```sh
docker pull testcontainers/ryuk:latest
```

*Kafka Broker* (optional, will be demonstrated)

```sh
docker pull bitnami/kafka:latest
```


