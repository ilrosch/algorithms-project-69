# Search engine

[![Actions Status](https://github.com/ilrosch/algorithms-project-69/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ilrosch/algorithms-project-69/actions)

Search Engine - a project in which we will learn the basic algorithms and data structures in search engines. We will practice various search methods, indexing, ranking, relevance metrics, and reverse index building.

## Description

The World Wide Web is hard to imagine without search engines. To make them work effectively, they use different search engines. In this project we will write our own implementation of a search engine.

## Usage example

```console
  import search from '@hexlet-code';

  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];

  search(docs, 'shoot'); // ['doc2', 'doc1']
```
