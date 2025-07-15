// 📜 The Scrolls of Lord Rahl — Command Registry
let scrolls = [] // 🪶 Commands inscribed by noble hands
const commandTablets = [] // Reserved for future sacred texts

// 📯 Herald of the Throne – Royal event system
const royalHerald = {
    events: {},
    on(occasion, decree) {
        if (!this.events[occasion]) {
            this.events[occasion] = []
        }
        this.events[occasion].push(decree)
    },
    emit(occasion, message) {
        if (this.events[occasion]) {
            this.events[occasion].forEach((decree) => decree(message))
        }
    }
}

// 🖋️ Rahl's Seal – Register a new spell on the royal scroll
function rahl(metadata, execution) {
    let commandInfo = metadata
    if (!commandInfo.categorie) commandInfo.categorie = "General"
    if (!commandInfo.reaction) commandInfo.reaction = "👑" // Royal insignia
    commandInfo.fonction = execution
    scrolls.push(commandInfo)
    return commandInfo
}

// 🏰 Royal Decree – Exported artifacts of the Kingdom
module.exports = {
    rahl,          // Replaces adams()
    cm: scrolls,   // The Scrolls of Lord Rahl
    ev: royalHerald // Event system remains as ev
}
