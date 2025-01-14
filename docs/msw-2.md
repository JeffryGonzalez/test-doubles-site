# Mock Service Workers 2 - Using MSW to Specify an API

In this example, I will use MSW to allow me to design an Angular component for an API that doesn't exist (yet). 

This is one of the super-powers of MSW for me. If I'm working with a team of developers, there can be *deadlocks*  where you get in a situation where the frontend developer can't do their work  because the API isn't created yet, and the API developer gets stuck because they aren't completely sure what the API needs to provide until the frontend is created. When I am in the situation where I am building  *both* the frontend and the API, I prefer to work this way - it helps keep me focused as well as let's me validate *exactly* what the API needs to  provide before I create it.

Although beyond the scope of this content, this workflow can also accomodate the style of development called "Consumer Driven Contract Testing". MSW can be used in my tests, and those tests can provide a set of contracts that *must* be provided by the server before the application is deployed.

## Video Walkthrough
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1045118100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="mssw3"></iframe></div>
