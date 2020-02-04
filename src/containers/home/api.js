import marvelAPI from '../../services/axios';

export const getComicsByCharacterId = characterId => {
  return marvelAPI.get(`/characters/${characterId}/comics`, {
    params: {
      format: 'comic',
      formatType: 'comic',
      orderBy: '-modified',
    },
  });
};

export const getCharacterById = characterId => {
  return marvelAPI.get(`/characters/${characterId}`);
};
