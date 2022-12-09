#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `Hadu?, nice to meet you`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000,`,
    bold: true,
    clear: true,
});

console.log(`
Fred Farwenel 

Nature Aficionado! Autodidact Developer whose formative years were in the slum of Duala/Gbalasua.

Twitter: https://twitter.com/fredfarwenel
Github: https://github.com/nonSerp
Blog: https://libklout.com/

`);