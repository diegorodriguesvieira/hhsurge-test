import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';

import { getComics, getCharacter } from './ducks';
import * as helpers from './helpers';
import Comic from '../../components/Comic';
import Hero from '../../components/Hero';

const Home = () => {
  const user = useSelector(state => state.auth.user);
  const comics = useSelector(state => state.hero.comics);
  const character = useSelector(state => state.hero.character);
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    dispatch(getCharacter(user.heroId));
    dispatch(getComics(user.heroId));
  }, [user.heroId, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div data-testid="home">
      <Grid container spacing={2}>
        {Array.isArray(character) && <Hero />}
        <Hero {...helpers.normalizeCharacterToRender(character)} />
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
