export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d1fa310c66155018c43a126',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-imcitbrv',
                  apiId: '6b4e22c8-878f-4aa9-a7ad-dcbba0c5704d'
                },
                {
                  buildHookId: '5d1fa310f5016d017a5ac9af',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-yb9n1t6f',
                  apiId: 'c6968cb7-7e0a-4b8a-90fb-bd3ee2bbce2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cusfrank/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-yb9n1t6f.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
