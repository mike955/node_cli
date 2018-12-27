import * as shell from 'shelljs';

export default async function() {
  console.log("------------ log");
  shell.exec("echo shell log")
}