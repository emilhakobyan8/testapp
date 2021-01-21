const baseUrl = 'https://livescore-football.p.rapidapi.com';

export const getRequest = (url: string, headers?: any) =>
  fetch(`${baseUrl}/${url}`, {
    headers: {
      'x-rapidapi-key': 'a4ef239881msh1bb158df3f35a72p1b1221jsn99995a6349eb',
      'x-rapidapi-host': 'livescore-football.p.rapidapi.com',
      ...headers,
    },
  });
