export const normalizeComicToRender = comic => {
  if (!comic) {
    return false;
  }

  const {
    description,
    format,
    id,
    issueNumber,
    modified,
    pageCount,
    thumbnail,
    title,
    urls,
  } = comic;

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
    modified,
  };
};

export const normalizeCharacterToRender = character => {
  if (!character) {
    return false;
  }

  const { id, name, description, thumbnail } = character;
  const normalizeThumbnail = `${thumbnail.path}.${thumbnail.extension}`;

  return { id, title: name, description, cover: normalizeThumbnail };
};
