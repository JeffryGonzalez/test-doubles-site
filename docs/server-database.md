# Using Containers for Test Doubles of Databases

Databases are easy to use as test doubles particularly if they are running in containers.

With containers, you can "prepare" the container with your database schema, seed it with data, and generally share a "current" starting point for all deveopers on your team.

The following command will pull a database I have prepared for this presentation.

:::code-group
```sh [Docker Command]
docker run -d -p 5432:5432 jeffrygonzalez/locations-base:1
```
:::

## Building Your Own

You can see [Containerize Postgres](./server-database-pg.md) for instrucitons if you are using Postgres.

