import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { getComics } from './ducks';
import * as helpers from './helpers';
import Comic from '../../components/Comic';
import Hero from '../../components/Hero';

const Home = () => {
  const user = useSelector(state => state.auth.user);
  const comics = useSelector(state => state.hero.comics);
  const dispatch = useDispatch();

  const fetchComics = useCallback(() => {
    dispatch(getComics(user.heroId));
  }, [user.heroId, dispatch]);

  useEffect(() => {
    fetchComics();
  }, [fetchComics]);

  return (
    <div data-testid="home">
      <Grid container spacing={2}>
        <Hero />
        <Grid item xs={12}>
          <Box mt={4}>
            <Typography variant="h3" component="h2">
              Comics
            </Typography>
          </Box>
        </Grid>
        {Array.isArray(comics) &&
          comics.map(comic => {
            return <Comic key={comic.id} {...helpers.normalizeComicToRender(comic)} />;
          })}
      </Grid>
    </div>
  );
};

export default Home;
