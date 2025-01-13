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

kaiz.upscale(imageUrl, outputPath);
```

## Usage for Binary :
```js
const fs = require('fs');
const kaiz = require('./kaiz-upscale');

const imageBinary = fs.readFileSync('./image.jpg');
const outputPath = './upscaled-image.jpg';

kaiz.upscale(imageBinary, outputPath);
```
## Output Example :
```js
{
    ./upscaled-image.jpg
}
```
