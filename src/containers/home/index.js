import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';

import { getComics } from './ducks';
import * as helpers from './helpers';
import Comic from '../../components/Comic';

const Home = () => {
  const user = useSelector(state => state.auth.user);
  const comics = useSelector(state => state.comics.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics(user.heroId));
  });

  return (
    <div data-testid="home">
      <Grid container spacing={2}>
        {Array.isArray(comics) &&
          comics.map(comic => {
            return <Comic key={comic.id} {...helpers.normalizeComicToRender(comic)} />;
          })}
      </Grid>
    </div>
  );
};

export default Home;
