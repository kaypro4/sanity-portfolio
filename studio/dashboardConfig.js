export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f53e37ccbf55b534e3a2427',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-it7n31vn',
                  apiId: 'c1a04ee0-9c01-4f68-93d4-3c9f9aebaa94'
                },
                {
                  buildHookId: '5f53e37cc1f0979fd515892f',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-web-vsrs6yzp',
                  apiId: 'ac4ce830-6ce2-49d2-82a0-aa9e9b126395'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaypro4/sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-web-vsrs6yzp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
