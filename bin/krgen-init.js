#!/usr/bin/env node

require('rget-cli')('https://github.com:rgy19930329/ky-react-template#master', {
    replaceFiles: ['package.json', 'README.md', 'template.html']
});
