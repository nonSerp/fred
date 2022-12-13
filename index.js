#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

// Alerts.
const sym = require('log-symbols');
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword(`orange`);
const error = chalk.red.bold;

welcome({
    title: `Fred Farwenel`,
    tagLine: `Hadu?, nice to meet you`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#6937FF`,
    color: `#000000,`,
    bold: true,
    clear: true,
});

log(`
${italic(
  `Nature Aficionado! Autodidact Developer whose formative years were in the slum of Duala/Gbalasua.`
)}
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/fredfarwenel`)}
${githubClr(` Github `)} ${dim(`https://github.com/nonSerp`)}
${purple(`Blog `)} ${dim(`https://libklout.com/`)}

`);

console.log(`
${sym.success} ${success(` SUCCESS `)} Thanks for checking out my CLI.

${sym.info} ${info(` INFO `)} I'm creating a course on LIBKLOUT.com

${sym.warning} ${warning(` WARNING `)}: Please don't copy me. Be yourself.

${sym.error} ${error(` ERROR `)} I'm on vacation. Contact me next week.
`);