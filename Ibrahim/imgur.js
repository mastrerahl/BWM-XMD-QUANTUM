// 🏺🖼️ The Scroll of Imgurum Uplodus
// 🔮 Scripted in the Chamber of Codes by High Scribe: Rahl the Wise
// 📜 Purpose: To lift an image from the mortal realm to the skies of Imgurum

const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

/**
 * 📤 Rite of Uplodus: Transfer image to the Cloud Temple (Imgurum)
 * @param {string} pathOfScroll - 🧾 The sacred path to the image relic
 * @param {string} sigilOfClient - 🪪 The Imgurum Client-ID scroll
 * @returns {Promise<string>} - 🔗 The divine link bestowed by Imgurum
 */
async function uploadImageToImgur(pathOfScroll, sigilOfClient) {
  try {
    // 🧪 Mix the sacred ink
    const sacredInk = new FormData();
    sacredInk.append('image', fs.createReadStream(pathOfScroll));

    // 📜 Embed the royal seal
    const royalHeaders = {
      'Authorization': `Client-ID ${sigilOfClient}`,
      ...sacredInk.getHeaders()
    };

    // 🛐 Recite the invocation to the Sky Server
    const invocation = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.imgur.com/3/image',
      headers: royalHeaders,
      data: sacredInk
    };

    // 🧿 Call upon Imgurum
    const divineReply = await axios(invocation);
    const heavenlyLink = divineReply.data.data.link;

    console.log('📯 By the Order of Rahl, the image ascends! 📸🔗', heavenlyLink);
    return heavenlyLink;

  } catch (curse) {
    console.error('🕳️ A curse has befallen the Rite of Uplodus:', curse);
    throw new Error('🧛 Alas! The sacred rite has failed to reach Imgurum.');
  }
}

// 🏺 Expose this scroll to other Scribes
module.exports = { uploadImageToImgur };
