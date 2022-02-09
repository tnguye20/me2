import { queries } from './queries';

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
};

export const get = async ({ name, preview }) => {
  const data = await fetchAPI(queries[name], {preview});

  if (name == 'resume') {
    return data.assets[0].url;
  }

  return data[name];
}

export const getSkills = ({preview = false}) => get({name: 'skills', preview});
export const getProjects = ({preview = false}) => get({name: 'projects', preview});
export const getParagraphs = ({preview = false}) => get({name: 'paragraphs', preview});
export const getSocials = ({preview = false}) => get({name: 'socials', preview});
export const getMetas = ({preview = false}) => get({name: 'metas', preview});
export const getResume = ({preview = false}) => get({name: 'resume', preview});
