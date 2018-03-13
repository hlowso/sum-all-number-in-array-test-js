function sumItems(array) {
  if(!Array.isArray(array)) return array;
  return array.reduce(
    (a, b) => sumItems(a) + sumItems(b), 
    0
  );
}

module.exports = sumItems;