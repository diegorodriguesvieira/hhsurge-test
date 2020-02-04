import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import Comic from '../../components/Comic';

const data = {
  data: {
    results: [
      {
        id: 85729,
        title: "X-Men/Fantastic Four Director's Cut Edition (2020) #1",
        issueNumber: 1,
        description:
          "Dust settles over the rubble of Tokyo. What emerges, for better or worse, will define the next generation of mutantkind. PLUS, as the survivors return to Utopia, there is a reckoning between Wolverine and Teon. One way or the other, it's another unforgettable issue of Generation Hope.",
        modified: '2020-02-03T17:47:34-0500',
        format: 'Comic',
        pageCount: 40,
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/85729/x-menfantastic_four_directors_cut_edition_2020_1?utm_campaign=apiRef&utm_source=b4f55cae9e47788b52ff355bffbc1fe1',
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/5e38a206367b6',
          extension: 'jpg',
        },
        creators: {
          items: [
            {
              name: 'Salvador Espin',
            },
            {
              name: 'Kieron Gillen',
            },
            {
              name: 'Scott Koblish',
            },
            {
              name: 'Greg Land',
            },
            {
              name: 'Nick Lowe',
            },
            {
              name: 'Frank Martin',
            },
            {
              name: 'Dave Sharpe',
            },
          ],
        },
      },
    ],
  },
};

const Home = () => {
  const normalizeComic = comic => {
    const { description, format, id, issueNumber, pageCount, thumbnail, title, urls } = comic;

    const creators = Array.isArray(comic.creators.items) ? comic.creators.items : [];
    const normalizedCreators = creators.map(({ name }) => name).join(' / ');

    let normalizedMoreDetails = Array.isArray(urls) ? urls.find(url => url.type === 'detail') : '';
    normalizedMoreDetails = normalizedMoreDetails ? normalizedMoreDetails.url : '';

    const normalizeThumbnail = `${thumbnail.path}.${thumbnail.extension}`;
    const normalizedEdition = `Edition nº ${issueNumber}`;
    const normalizedPages = `${pageCount === 1 ? `${pageCount} page` : `${pageCount} pages`}`;
    const normalizedDescription = description || '';

    return {
      id,
      title,
      format,
      pages: normalizedPages,
      creators: normalizedCreators,
      cover: normalizeThumbnail,
      edition: normalizedEdition,
      description: normalizedDescription,
      moreDetails: normalizedMoreDetails,
    };
  };

  return (
    <Box data-testid="home" component={Paper} square pt={3} pb={3} pl={2} pr={2}>
      <Grid container spacing={2}>
        {data.data.results.map(comic => {
          return <Comic key={comic.id} {...normalizeComic(comic)} />;
        })}
      </Grid>
    </Box>
  );
};

export default Home;
