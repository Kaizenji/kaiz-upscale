# kaiz-upscale

A simple Node.js package for upscaling images 2x.

## Installation :
```bash
npm i kaiz-upscale
```

## Usage for ImageUrl :
```js
const kaiz = require('kaiz-upscale');

const imageUrl = 'https://example.com/image.jpg';
const outputPath = './upscaled-image.jpg';

kaiz.upscale(imageUrl, outputPath)
  .then(() => console.log('Upscaled successfully!'))
  .catch(err => console.error('Upscale failed.', err.message));
```

## Usage for Binary :
```js
const fs = require('fs');
const kaiz = require('kaiz-upscale');

const imageBinary = fs.readFileSync('./image.jpg');
const outputPath = './upscaled-image.jpg';

kaiz.upscale(imageBinary, outputPath)
  .then(() => console.log('Upscaled successfully!'))
  .catch(err => console.error('Upscale failed.', err.message));
```
## Output Example :
```js
{
    ./upscaled-image.jpg
}
```
