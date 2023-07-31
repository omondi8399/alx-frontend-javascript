export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const mp = new Map();
  for (const element of arr) {
    mp.set(element[0], element[1]);
  }
  return mp;
}
