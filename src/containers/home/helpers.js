export const normalizeComicToRender = comic => {
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

export default normalizeComicToRender;
