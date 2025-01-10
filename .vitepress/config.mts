import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Test Doubles",
  description: "For Developer Confidence",
  head: [
    [ 'script', { src: 'https://player.vimeo.com/api/player.js'}]
  ],  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Test Doubles', link: '/docs/intro' }
    ],

    sidebar: [
      {
        text: 'Test Doubles',
        items: [
          { text: 'Intro', link: '/docs/intro' },
          { text: 'Rationale', link: '/docs/rationale' },
          { text: 'Browser Apps', link: '/docs/browser', items: [
            { text: 'Overrides', link: '/docs/browser-overrides'},
            { text: 'Mock Service Workers', link: '/docs/msw'},
            { text:  'MSW 1  - Basic', link:  '/docs/msw-1'},
            { text: 'MSW 2 - Double First', link: '/docs/msw-2'},
            { text: 'MSW 3 - Params', link: '/docs/msw-3'},
            { text: 'MSW 3 - Posting', link: '/docs/msw-4'},
            { text: 'OIDC/OAuth2', link: '/docs/auth'}

          ]},
          { text: 'Server Apps', link:  '/docs/server', items: [
            { text:  'WireMock', link: '/docs/server-wire-mock', items: [
              { text: 'Setup',  link: '/docs/wm-1.md' },
              { text: 'Templating',  link: '/docs/wm-2.md' },
              { text: 'Recording', link:  '/docs/wm-3.md'}
            ]},
            { text: 'Test Doubles For API Calls', link: '/docs/wm-api.md'},
            { text: 'Databases', link: '/docs/server-database.md'},
            { text: 'Messaging', link: '/docs/server-messaging.md'},
            { text: '.NET Specific', link: '/docs/server-dotnet.md'}
          ]}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypertheorytraining' }
    ]
  }
})
