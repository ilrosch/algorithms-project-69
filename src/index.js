const search = (docs, token) => {
  const term = token
    .split(' ')
    .flatMap((query) => query.toLowerCase().match(/\w+/g));

  const index = docs.reduce((acc, { id, text }) => {
    text.split(' ').forEach((word) => {
      const key = word.toLowerCase().match(/\w+/g);

      if (!acc[key]) {
        acc[key] = {
          docs: [],
          counter: {}
        };
      }

      if (!acc[key].docs.includes(id)) {
        acc[key].docs.push(id);
      }

      acc[key].counter[id] = (acc[key].counter[id] ?? 0) + 1;
    });

    return acc;
  }, {});

  const data = term.reduce((acc, key) => {
    if (!index[key]) { return acc; }

    const ids = index[key].docs;
    ids.forEach((id) => {
      acc[id] = (acc[id] ?? 0) + index[key].counter[id];
    });

    return acc;
  }, {});

  const result = Object.entries(data)
    .sort(([, a], [, b]) => b - a)
    .map(([id]) => id);

  return result;
};

export default search;
