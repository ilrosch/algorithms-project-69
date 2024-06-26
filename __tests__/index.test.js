import search from '../src/index.js';

describe('Test search function:', () => {
  test('should be deduced [], at emptiness', () => {
    expect(search([], 'test')).toEqual([]);
  });

  test('should output the id of the document in which the element was found', () => {
    const docs = [
      { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
      { id: 'doc2', text: "Don't shoot that thing at me." },
      { id: 'doc3', text: "I'm your shooter." },
    ];

    expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1']);
  });

  test('should find words regardless of punctuation marks', () => {
    const docs = [
      { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
    ];

    expect(search(docs, 'pint')).toEqual(['doc1']);
    expect(search(docs, 'pint!')).toEqual(['doc1']);
  });

  test('should use the relevance metric', () => {
    const docs = [
      { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
      { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
      { id: 'doc3', text: "I'm your shooter." },
    ];

    expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1']);
  });

  test('should give the desired result even if the searched sentence is not contained in the whole document / a few words', () => {
    const docs = [
      { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
      { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
      { id: 'doc3', text: "I'm your shooter." },
    ];

    expect(search(docs, 'shoot at me')).toEqual(['doc2', 'doc1']);
  });

  test('should corresponds to the TF-IDF relevance metric', () => {
    const docs = [
      { id: 'doc1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc.' },
      { id: 'doc2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum.' },
      { id: 'doc3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus dictum at tempor commodo ullamcorper.' },
    ];

    expect(search(docs, 'lorem ipsum')).toEqual(['doc2', 'doc3', 'doc1']);
  });
});
