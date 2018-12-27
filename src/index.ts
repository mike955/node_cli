import * as program from "commander";
import * as path from "path";
import help from "./packages/help";
import init from "./packages/init";
import log from "./packages/log";

const version = require("../package.json").version;
program
  .version(version, "-v, --version")

program
  .command("init")
  .description("initialize your meet config")
  .action(init);

program
  .command("help")
  .description("view command version")
  .action(help);

program
  .command("log")
  .version(version, "-v, --version")
  .description("view help")
  .action(log);

program
  .command("*")
  .description("unknown commander")
  .action(help);

program.parse(process.argv);
