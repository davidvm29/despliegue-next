const { exec } = require('child_process');
const now = require('performance-now');

let buildStart = now();

// Usar npm run build
exec('npm run build', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    let buildEnd = now();
    console.log(`Build completed in ${(buildEnd - buildStart).toFixed(2)}ms`);
});

