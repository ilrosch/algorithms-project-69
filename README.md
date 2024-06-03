# Поисковый движок

[![Actions Status](https://github.com/ilrosch/algorithms-project-69/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ilrosch/algorithms-project-69/actions)

Поисковый движок — проект, в котором мы изучим основные алгоритмы и структуры данных в поисковых системах. На практике применим различные методы поиска, индексирование, ранжирование, метрики релевантности и построим обратный индекс.

## Описание

Всемирную сеть сложно представить без поисковиков. Чтобы они эффективно работали, используют разные поисковые движки. В этом проекте мы напишем собственную реализацию поискового движка.

## Пример использования

```console
  import search from '@hexlet-code';

  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];

  search(docs, 'shoot'); // ['doc2', 'doc1']
```
