const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const util = require("util");
const sources = fs.readdirSync(path.resolve(__dirname, "..", "src"));

(async function main() {
  await Promise.allSettled(
    sources.map(async (source) => {
      console.info(`Formatting ${source}...`);
      await util.promisify(child_process.exec)(`slidev format ${source}`);
    })
  );
})();
