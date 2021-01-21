import {getRequest} from './index';

export const getNews = async () =>
  getRequest('soccer/news-list?page=1')
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.error(e);
    });
