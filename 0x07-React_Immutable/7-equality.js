const { is } = require('immutable');

const areMapsEqual = (map1, map2) => is(map1, map2);

export default areMapsEqual;
