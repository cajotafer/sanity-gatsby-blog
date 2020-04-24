export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea2e735b784aaae588d6679',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ivrv5b1i',
                  apiId: 'c32cde02-e203-4706-9010-019477684d2d'
                },
                {
                  buildHookId: '5ea2e73594615ac57f703678',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2g67s6uo',
                  apiId: '7d345d9c-cbf8-4988-b115-9f774e0e4fa7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cajotafer/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2g67s6uo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
