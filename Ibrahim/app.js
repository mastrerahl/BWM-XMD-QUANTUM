"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reagir = void 0;

/**
 * 👑 react with a royal emoji upon the scroll of a user
 * @param {string} dest - The noble chat receiving the reaction
 * @param {object} zok - The sacred messenger of the Crown (e.g., sock or conn)
 * @param {object} msg - The honored scroll (message) to be sealed
 * @param {string} emoji - The sigil (emoji) representing royal response
 */
async function reagir(dest, zok, msg, emoji) {
    // 🪙 Imprint the Royal Seal (emoji) upon the chosen message
    await zok.sendMessage(dest, {
        react: {
            text: emoji,
            key: msg.key
        }
    });
    console.log(`🔱 Royal Reaction sent to ${dest} — Emblem: ${emoji}`);
}

exports.reagir = reagir;
