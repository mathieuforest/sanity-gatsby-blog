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
                  buildHookId: '5e67a7a212cb83fd95e42500',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-36tb363v',
                  apiId: '218fa029-2f9a-4d18-808c-f9757c22aec5'
                },
                {
                  buildHookId: '5e67a7a599c071dbd08870cb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-quf9u7ud',
                  apiId: 'e14bad3e-428f-4ebb-951c-288d0531e598'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mathieuforest/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-quf9u7ud.netlify.com', category: 'apps' }
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
