# WireMock - More Advanced Stubbing and Templates

## Video  Walkthrough

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1045778869?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="WireMock - Post and Template"></iframe></div>

##  The First Version of the Mapping File
:::code-group
```json [/mocks/mappings/add-friend.json]
{
    "request": {
        "method": "POST",
        "url": "/friends"
    }, 
    "response": {
        "status": 201,
        "body":  "Added Your Friend"
    }
}
```
:::

##  The Second Version

:::code-group

```json [/mocks/mappings/add-friend.json]
{
    "request": {
        "method": "POST",
        "url": "/friends"
    }, 
    "response": {
        "status": 201,
        "transformers": ["response-template"],
        "bodyFileName":  "added-friend.json"
    }
}
```


```handlebars [mocks/__files/added-friend.json]
{{#formatJson}}
    {{#assign 'base'}}
        {
            "status": "Succes",
            "id": "{{randomValue type='UUID'}}"
        }
    {{/assign}}

    {{#assign 'friendRequest'}}
        {{request.body}}
    {{/assign}}

    {{jsonMerge base friendRequest}}
{{/formatJson}}
```
:::