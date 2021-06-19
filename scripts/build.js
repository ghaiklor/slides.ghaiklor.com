const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const util = require("util");
const sources = fs.readdirSync(path.resolve(__dirname, "..", "src"));

(async function main() {
  for (const source of sources) {
    const absolutePath = path.resolve(__dirname, "..", "src", source);
    const slideName = source.split(".")[0];

    if (fs.existsSync(slideName) && fs.statSync(absolutePath).mtime === fs.statSync(slideName).mtime) {
      console.info(`Skipping the build for ${slideName}, it's already built`);
      continue;
    }

    console.info(`Building ${slideName}...`);
    await util.promisify(child_process.exec)(`slidev build --out ${slideName} --base /${slideName}/ ${absolutePath}`);
  }
})();
