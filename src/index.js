const search = (docs, query) => {
  const regexp = new RegExp(`\\b${query}\\b`, 'i');
  return docs.reduce((acc, item) => item.text.match(regexp) ? [...acc, item.id] : acc, [])
};

export default search;