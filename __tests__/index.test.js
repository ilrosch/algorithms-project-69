import search from "../src";

describe('Test search function: ', () => {
  test('should be deduced [], at emptiness', () => {
    expect(search([], 'test')).toEqual([]);
  });

  test('should output the id of the document in which the element was found', () => {
    const docs = [
      { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
      { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
      { id: 'doc3', text: "I'm your shooter." }
    ];

    expect(search(docs, 'shoot')).toEqual(['doc1', 'doc2']);
  });
});
