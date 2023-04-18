export const menuItems = [
  {
    name: 'Home',
  },
  {
    name: 'Services',
    submenus: [
      {
        name: 'web design',
      },
      {
        name: 'web development',
        submenus: [
          {
            name: 'Frontend',
          },
          {
            name: 'Backend',
            submenus: [
              {
                name: 'NodeJS',
                submenus: [
                  {
                    name: 'Vanilla JS',
                    url: 'node',
                  },
                  {
                    name: 'Express',
                    url: 'php',
                    submenus: [
                      {
                        name: 'framework',
                        url: 'node',
                      },
                      {
                        name: 'library',
                        url: 'php',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'PHP',
              },
            ],
          },
        ],
      },
      {
        name: 'SEO',
      },
    ],
  },
  {
    name: 'About',
    submenus: [
      {
        name: 'Who we are',
      },
      {
        name: 'Our values',
      },
    ],
  },
];
