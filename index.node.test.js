const fin = require(".");
const url = "zangai://family.com";
const log = (msg, ...args) => console.log([msg, "#"].join("") + " [" + args +"]")

// catch error
try {
    fin()
} catch (err) {
    log("catch", err);
}

// work fine
let f = new fin(url);
f.once("connect", function (socket) {
    log("socket", socket.name);
});

f.on("connect-error", function (err) {
    log("connect-error", err);
});

