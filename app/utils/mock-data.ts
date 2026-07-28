import {
  HomePageData,
  ProjectsPageData,
  ProjectPageData,
  ProjectsPageStaticData,
} from '../types/page-info'

const mockIntroduction = {
  raw: {
    children: [
      {
        type: 'paragraph',
        children: [
          { text: 'Sou desenvolvedor com mais de ' },
          { text: '5 anos de experiência', bold: true },
          { text: ' em ' },
          { text: 'Delphi e SQL', bold: true },
          { text: ', com foco em sistemas ' },
          { text: 'ERP', bold: true },
          {
            text: ', arquitetura de banco de dados e integrações de sistemas. Atuo no desenvolvimento de soluções robustas e eficientes para regras de negócio complexas.',
          },
        ],
      },
    ],
  },
}

const mockTechnologies = [
  { name: 'Delphi' },
  { name: 'SQL' },
  { name: 'PHP' },
  { name: 'JavaScript' },
  { name: 'jQuery' },
  { name: 'PostgreSQL' },
  { name: 'Firebird' },
  { name: 'MySQL' },
  { name: 'APIs REST' },
]

const mockSocials = [
  {
    url: 'https://linkedin.com/in/joão-renato-repker-voros-885207154',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  },
  {
    url: 'mailto:jrvoros1@gmail.com',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  },
]

const mockKnownTechs = [
  {
    name: 'Delphi',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
    startDate: '2021-01-01',
  },
  {
    name: 'SQL',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
    startDate: '2021-01-01',
  },
  {
    name: 'PHP',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
    startDate: '2022-01-01',
  },
  {
    name: 'PostgreSQL',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    startDate: '2021-01-01',
  },
]

const mockProjects = [
  {
    slug: 'questor-erp',
    title: 'Sistemas ERP Questor',
    shortDescription:
      'Desenvolvimento e manutenção de funcionalidades ERP complexas com foco em regras fiscais, contábeis e trabalhistas e relatórios gerenciais.',
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    pageThumbnail: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    },
    technologies: [
      { name: 'Delphi' },
      { name: 'SQL' },
      { name: 'nReport' },
      { name: 'Firebird' },
      { name: 'PostgreSQL' },
      { name: 'Oracle' },
    ],
    sections: [
      {
        title: 'Módulos Fiscais e Contábeis',
        image: {
          url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
        },
      },
      {
        title: 'Otimização de Banco de Dados',
        image: {
          url: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
        },
      },
    ],
    description: {
      raw: {
        children: [
          {
            type: 'paragraph',
            children: [
              { text: 'Trabalho focado no ' },
              {
                text: 'desenvolvimento e otimização de soluções ERP',
                bold: true,
              },
              {
                text: ' críticas para negócios na Questor Sistemas. Inclui o levantamento e análise de requisitos, interpretação de regras fiscais e trabalhistas, além do desenvolvimento de relatórios corporativos com o gerador nReport e otimização de consultas em grandes volumes de dados SQL.',
              },
            ],
          },
        ],
      },
      text: 'Trabalho focado no desenvolvimento e otimização de soluções ERP críticas para negócios na Questor Sistemas.',
    },
    liveProjectUrl: 'https://www.questor.com.br',
    githubUrl: 'https://github.com',
  },
  {
    slug: 'pegasus-integrations',
    title: 'Portal de Integrações Pegasus',
    shortDescription:
      'Desenvolvimento de integrações de sistemas de gestão (ERP) com portais e aplicações web utilizando PHP e APIs REST.',
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    },
    pageThumbnail: {
      url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    },
    technologies: [
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'jQuery' },
      { name: 'APIs REST' },
      { name: 'MySQL' },
      { name: 'Firebird' },
    ],
    sections: [
      {
        title: 'Integração Web e Sincronização',
        image: {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        },
      },
    ],
    description: {
      raw: {
        children: [
          {
            type: 'paragraph',
            children: [
              { text: 'Criação de pontes de comunicação e ' },
              { text: 'integrações web com sistemas ERP', bold: true },
              {
                text: ' desktop. Desenvolvimento de scripts PHP, manipulação de APIs REST e manipulação de bancos de dados relacionais MySQL e Firebird para sincronizar informações em tempo real.',
              },
            ],
          },
        ],
      },
      text: 'Criação de pontes de comunicação e integrações web com sistemas ERP desktop usando PHP e APIs REST.',
    },
    liveProjectUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
]

const mockWorkExperiences = [
  {
    companyLogo: {
      url: 'https://media.licdn.com/dms/image/v2/D4D0BAQFZ2suH0MrU8w/company-logo_100_100/B4DZraIaYzHwAg-/0/1764596230250/questor_sistemas_logo?e=1786579200&v=beta&t=7ZVZR5rwD5Xe_yle-uPFut2P5ad-Hbk5v14B0YEUTGk',
    },
    role: 'Desenvolvedor de Software',
    companyName: 'Questor Sistemas',
    companyUrl: 'https://www.questor.com.br',
    startDate: '2025-02-01',
    endDate: '2026-07-31',
    technologies: [
      { name: 'Delphi' },
      { name: 'SQL' },
      { name: 'nReport' },
      { name: 'PostgreSQL' },
      { name: 'Oracle' },
    ],
    description: {
      raw: {
        children: [
          {
            type: 'bulleted-list',
            children: [
              {
                type: 'list-item',
                children: [
                  { text: 'Desenvolvimento de funcionalidades ERP em Delphi.' },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Criação e otimização de relatórios gerenciais com Delphi e nReport.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Levantamento e análise de requisitos, interpretando regras de negócio fiscais, contábeis e trabalhistas.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Otimização de consultas SQL (Firebird, PostgreSQL e Oracle).',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Refatoração de código legado para melhoria de desempenho, legibilidade e manutenibilidade.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Participação em equipes ágeis (Scrum), atuando em refinamentos, sprints e entregas contínuas.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Controle de versão com SVN (Tortoise SVN) e aplicação de padrões de arquitetura (MVC).',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  {
    companyLogo: {
      url: 'https://media.licdn.com/dms/image/v2/C560BAQErRwgshcrhVg/company-logo_100_100/company-logo_100_100/0/1630651117335/pegasus_sistemas_lp_logo?e=1786579200&v=beta&t=zY4WkmFeBpdwzX-8eSKgVP5boMmteb01vUsFdJ0c-e8',
    },
    role: 'Desenvolvedor de Software',
    companyName: 'Pegasus Sistemas LP',
    companyUrl: 'https://example.com',
    startDate: '2022-01-01',
    endDate: '2025-01-31',
    technologies: [
      { name: 'Delphi (VCL)' },
      { name: 'Firebird' },
      { name: 'MySQL' },
      { name: 'DevExpress' },
      { name: 'PHP' },
      { name: 'JavaScript' },
    ],
    description: {
      raw: {
        children: [
          {
            type: 'bulleted-list',
            children: [
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Desenvolvimento e manutenção de aplicações desktop utilizando Delphi (VCL).',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Modelagem, manutenção e otimização de bancos de dados Firebird e MySQL.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Desenvolvimento e otimização de consultas SQL e criação de interfaces com DevExpress.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Desenvolvimento de integrações com aplicações web utilizando PHP, JavaScript e jQuery.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Correção de falhas, implementação de melhorias e evolução de funcionalidades.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  { text: 'Controle de versão utilizando Tortoise SVN.' },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  {
    companyLogo: {
      url: 'https://media.licdn.com/dms/image/v2/C560BAQErRwgshcrhVg/company-logo_100_100/company-logo_100_100/0/1630651117335/pegasus_sistemas_lp_logo?e=1786579200&v=beta&t=zY4WkmFeBpdwzX-8eSKgVP5boMmteb01vUsFdJ0c-e8',
    },
    role: 'Analista de Sistemas',
    companyName: 'Pegasus Sistemas LP',
    companyUrl: 'https://example.com',
    startDate: '2019-10-01',
    endDate: '2021-12-31',
    technologies: [
      { name: 'ERP Cloud' },
      { name: 'SQL' },
      { name: 'Migração de Dados' },
      { name: 'Treinamento' },
    ],
    description: {
      raw: {
        children: [
          {
            type: 'bulleted-list',
            children: [
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Implantação, configuração e parametrização de sistemas ERP em ambiente cloud.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Atendimento consultivo, levantamento de requisitos e entendimento das necessidades dos clientes.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Planejamento e execução de migração e conversão de dados entre sistemas.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Treinamento e capacitação de usuários para utilização do ERP.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Atuação como ponte entre equipes técnicas e áreas de negócio.',
                  },
                ],
              },
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Análise de processos e identificação de oportunidades de melhoria contínua.',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  {
    companyLogo: {
      url: 'https://media.licdn.com/dms/image/v2/C4D0BAQFuChbxBk33IA/company-logo_100_100/company-logo_100_100/0/1630539615078/lpx_tecnologia_logo?e=1786579200&v=beta&t=SgcqbzVrdltuoEWuHN7U_2TS54Zy_YiVpTwfufFly4U',
    },
    role: 'Analista de Suporte',
    companyName: 'LPX Tecnologia',
    companyUrl: 'https://example.com',
    startDate: '2019-03-01',
    endDate: '2019-09-30',
    technologies: [
      { name: 'Suporte Técnico' },
      { name: 'Análise de Dados' },
      { name: 'Resolução de Chamados' },
    ],
    description: {
      raw: {
        children: [
          {
            type: 'bulleted-list',
            children: [
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Suporte técnico especializado, diagnóstico de incidentes via análise de dados e resolução de chamados prioritários.',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  {
    companyLogo: {
      url: 'https://media.licdn.com/dms/image/v2/C4D0BAQFw82g0wCu0uQ/company-logo_100_100/company-logo_100_100/0/1630537260680?e=1786579200&v=beta&t=cOXs1yQrhEE9d2cBqBbA_KmqzPmJ4QJeAHSwvcpicFc',
    },
    role: 'Analista de Suporte',
    companyName: 'Icozweb',
    companyUrl: 'https://example.com',
    startDate: '2018-10-01',
    endDate: '2019-02-28',
    technologies: [
      { name: 'Suporte Técnico' },
      { name: 'Análise de Dados' },
      { name: 'Resolução de Chamados' },
    ],
    description: {
      raw: {
        children: [
          {
            type: 'bulleted-list',
            children: [
              {
                type: 'list-item',
                children: [
                  {
                    text: 'Suporte técnico especializado, diagnóstico de incidentes via análise de dados e resolução de chamados prioritários.',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
]

export const getMockData = (query: string): any => {
  if (query.includes('PageInfoQuery')) {
    return {
      page: {
        introduction: mockIntroduction,
        technologies: mockTechnologies,
        profilePicture: {
          url: 'https://media.licdn.com/dms/image/v2/D4D35AQFTC3oZACesPg/profile-framedphoto-shrink_800_800/B4DZ.UQLySJwAk-/0/1784898698766?e=1785873600&v=beta&t=NywHTe1zQy47SdnJS62i4i4U_t-pruhPUIoaxncaznY',
        },
        socials: mockSocials,
        knownTechs: mockKnownTechs,
        highlightProjects: mockProjects,
      },
      workExperiences: mockWorkExperiences,
    }
  }

  if (query.includes('ProjectsQuery')) {
    return {
      projects: mockProjects,
    }
  }

  if (query.includes('ProjectsSlugsQuery')) {
    return {
      projects: mockProjects.map((p) => ({ slug: p.slug })),
    }
  }

  if (query.includes('ProjectQuery')) {
    const match =
      query.match(/slug:\s*"([^"]+)"/) || query.match(/slug:\s*\\?"([^"]+)\\?"/)
    const slug = match ? match[1] : ''
    const project = mockProjects.find((p) => p.slug === slug) || mockProjects[0]
    return {
      project,
    }
  }

  return {}
}
