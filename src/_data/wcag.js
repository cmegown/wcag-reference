const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
  const url = 'https://gist.githubusercontent.com/cmegown/4d99f0ab012c71b613ccb65b392528fb/raw/84d4a907b0e5211551f1e08410913ef955c33d50/wcag.json';

  return Cache(url, { type: 'json' });
};
