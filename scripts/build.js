const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const util = require("util");
const sources = fs.readdirSync(path.resolve(__dirname, "..", "src"));

(async function build() {
  for await (const source of sources) {
    const absolutePath = path.resolve(__dirname, "..", "src", source);
    const slideName = source.split(".")[0];

    console.info(`Building ${slideName}...`);
    await util.promisify(child_process.exec)(`slidev build --out ${slideName} --base /${slideName}/ ${absolutePath}`);
  }
})();
