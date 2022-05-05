export const queries = {
  skills: `
  {
    skills {
      id,
      title,
      description,
      tech,
      tag
    }
  }
	`,
  projects: `
        {
            projects(orderBy: order_ASC) {
                id,
                name,
                url,
                git,
                mission,
                description,
                tech,
                image {
                    url,
                    name
                }
            }
        }
        `,
  paragraphs:`
    {
      paragraphs {
        id
        header
        subheader {
          text
          json
        }
        name
        media {
          url
          name
        }
      }
    }
    `,
  socials:`
    {
      socials {
        name
        url
      }
    }
    `,
  metas:`
     {
      metas {
        title
        description
        domain
        favicon {
          url
        }
        logo {
          url
        }
        logo192 {
          url
        }
        logo512 {
          url
        }
      }
    }
    `,
  resume:`
    {
      assets (where: {name: "resume"}) {
        url
      }
    }
  `,
}
