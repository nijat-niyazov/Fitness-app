const linkMaker = category => {
  const turkish = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü'];
  const engEquivalent = ['ch', 'g', 'i', 'o', 'sh', 'u'];

  const categoryLowerCase = category.toLowerCase().trim();
  const spreaded = [...categoryLowerCase.replaceAll(' ', '-')];

  const replacedCategory = spreaded
    .map(letter => {
      const index = turkish.indexOf(letter);
      return index === -1 ? letter : engEquivalent[index];
    })
    .join('');

  return replacedCategory;
};

export default linkMaker;
