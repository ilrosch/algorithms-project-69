const search = (docs, token) => {
  const term = token.match(/\w+/g);
  const regexp = new RegExp(`\\b${term}\\b`, 'i');
  const search = docs.reduce((acc1, item) => {
    const { id } = item;
    const count = item.text.split(' ').reduce((acc2, el) => el.match(regexp) ? acc2 + 1 : acc2, 0);
    return [...acc1, { id, count }];
  }, [])
    .filter(({ count }) => count !== 0)
    .sort((a, b) => {
      const countA = a.count;
      const countB = b.count;

      if (countA > countB) {
        return -1;
      }

      if (countA < countB) {
        return 1;
      }

      return 0;
    })
    .map(({ id }) => id);

  return search;
};

export default search;
