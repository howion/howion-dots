var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// package.json
var package_default = {
  name: "howion-dots",
  version: "0.9.0",
  description: "Howion's dotfile and boilerplate manager.",
  main: ".bin/bin.js",
  keywords: [
    "dotfiles",
    "boilerplate"
  ],
  type: "commonjs",
  author: "howion",
  homepage: "https://github.com/howion/howion-dots",
  repository: "github:howion/howion-dots",
  files: [
    ".bin/dist.js",
    "dotfiles",
    "git",
    "nextjs",
    "node"
  ],
  license: "MIT",
  private: false,
  bin: ".bin/dist.js",
  scripts: {
    build: "yarn dev && echo '#! /usr/bin/env node\n' | cat - .bin/dist.js > .bin/temp.js && mv .bin/temp.js .bin/dist.js",
    dev: "npx esbuild .bin/src/main.ts --bundle --outfile=.bin/dist.js --platform=node --packages=external",
    start: "node .bin/dist.js"
  },
  dependencies: {
    "@types/minimist": "^1.2.2",
    "@types/node": "^18.15.13",
    chalk: "4.1.2",
    commander: "^10.0.1",
    minimist: "^1.2.8"
  },
  devDependencies: {
    esbuild: "^0.17.17"
  }
};

// .bin/src/main.ts
var import_commander = require("commander");

// .bin/src/commands/boil.ts
var import_chalk2 = __toESM(require("chalk"));

// .bin/src/commands/plates.ts
var import_chalk = __toESM(require("chalk"));

// .bin/src/boilerplates/nextjs.ts
async function nextjs() {
}

// .bin/src/boilerplates/node.ts
async function node() {
}

// .bin/src/commands/plates.ts
var boilerplates = {
  nextjs: {
    desc: "next@13 (swc) + ts + sass + stylelint + postcss",
    code: "nextjs",
    handle: nextjs
  },
  node: {
    desc: "esbuild + ts",
    code: "node",
    handle: node
  }
};
function plates() {
  console.log("\nAvailable boilerplates:");
  for (const plate of Object.values(boilerplates)) {
    console.log(`  * ${import_chalk.default.bold(plate.code)}: ${import_chalk.default.gray(plate.desc)}`);
  }
  console.log("");
}

// .bin/src/commands/boil.ts
async function boil(boilerplate, destination) {
  if (!boilerplates.hasOwnProperty(boilerplate)) {
    console.log(import_chalk2.default.red(`error: unknown boilerplate '${boilerplate}'`));
    plates();
  }
  const cwd = process.cwd();
}

// .bin/src/main.ts
var import_chalk3 = __toESM(require("chalk"));
var bin = new import_commander.Command();
bin.name(package_default.name).description(package_default.description).version(package_default.version, "-v, --version", "output the current version").configureOutput({
  outputError: (str, write) => write(import_chalk3.default.red(str))
});
bin.command("boil").description("Create a new folder and populate it with the selected boilerplate. This command is interactive.").argument("<boilerplate>", "boilerplate to use").argument("<destination>", "folder to populate").action(boil);
bin.command("update").description("Create a new folder and populate it with the selected boilerplate. This command is interactive.").argument("<boilerplate>", "boilerplate to use").argument("<destination>", "folder to populate").action(boil);
bin.command("boilerplates").description("List available boilerplates.").action(plates);
bin.parse();
