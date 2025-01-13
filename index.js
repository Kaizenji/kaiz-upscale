const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const IMGUR_CLIENT_ID = '0293c6684c97aaf';

const kaiz = {
  upscale: async function (imageInput, outputPath) {
    try {
      let imageUrl;

      if (Buffer.isBuffer(imageInput)) {
        imageUrl = await kaiz.uploadToImgur(imageInput);
      } else if (typeof imageInput === 'string' && imageInput.startsWith('http')) {
        imageUrl = imageInput;
      } else {
        throw new Error("Invalid input. Provide either a binary image or image URL.");
      }

      const response = await axios({
        url: `https://kaiz-apis.gleeze.com/api/upscale?imageUrl=${encodeURIComponent(imageUrl)}`,
        method: 'GET',
        responseType: 'stream',
      });

      response.data.pipe(fs.createWriteStream(outputPath));
      console.log(`Image saved to ${outputPath}`);
    } catch (error) {
      console.error('Error upscaling image:', error.message);
    }
  },

  uploadToImgur: async function (imageBinary) {
    const formData = new FormData();
    formData.append('image', imageBinary);

    try {
      const response = await axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
        },
      });

      return response.data.data.link;
    } catch (error) {
      console.error('Error uploading image to Imgur:', error.message);
      throw error;
    }
  },
};

module.exports = kaiz;