export const returnPaginationRange = (page, limit) => {
  const array = [];

  for (let i = 0; i < limit; i++) {
    array.push(i + 1)
  }

  return array;
}