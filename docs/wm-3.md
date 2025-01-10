# WireMock - Recording Multiple  Responses

## Video Walkthrough

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1045791730?h=b8f63b582c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="WireMock - Recording and  Multiple"></iframe></div>

:::code-group
```json [mocks\mappings\todos.json]
{
  "id" : "82e4b333-f497-3464-a3bc-450135076c90",
  "request" : {
    "url" : "/todos",
    "method" : "GET"
  },
  "response" : {
    "status" : 200,
    "bodyFileName" : "body-todos.json",
    "headers" : {
      "Content-Type":  "application/json"
    }
  },
  "uuid" : "82e4b333-f497-3464-a3bc-450135076c90"
}
```

```json  [mocks\__files\todos-body.json]
[
  {
    "userId": 1,
    "id": 1,
    "title": "Clean Garage",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Shovel Snow",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Cancel United Card",
    "completed": false
  }
]
```

```json [examples\mappings\todos-404.json]
{
    "request": {
        "url": "/todos",
        "method": "GET"
    },
    "response":  {
        "status":  404
    }
}
```
::: 