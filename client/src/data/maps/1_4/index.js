const tiles = [
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 4, 5, 5, 0, 0, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 4, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 4, 0, 4, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 4, 5, 5, 5, 4, 0, 5, 5, 5, 5, 0, 5, 5, 5, 0, 5, 4, 0, 4, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 3, 0, 0, 4, 0, 0, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 4, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 4, 0, 0, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 5, 5, 0, 0, 2, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 4, 0, 0, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5]
];

// grid coordinates are Horizontal then Vertical, count starts at 0 index
// chests: 19 | goblins: 11 | stone-golems: 4

const monsters = [
  {
  }
];

const stairs = {
  down: '1_3',
  up: '1_5'
};

const message = {
  title: 'Level 4',
  body: 'Currently empty of everything but goblins, stone-golems and jack-o-lanterns for play testing!'
};

export default {
  tiles,
  monsters,
  stairs,
  message
};
