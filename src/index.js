const search = (docs, token) => {
  const term = token.match(/\w+/g);
  const regexp = new RegExp(`\\b${term}\\b`, 'i');
  return docs.reduce((acc, item) => (item.text.match(regexp) ? [...acc, item.id] : acc), []);
};

export default search;
