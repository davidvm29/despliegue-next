const { exec } = require('child_process');
const now = require('performance-now');

console.log('Starting environment...');
let start = now();

let process = exec('npm run dev', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
});

process.stdout.on('data', (data) => {
    // Asumiendo que "Ready on" es parte del log cuando Next.js está listo
    if (data.includes('started server')) {
        let end = now();
        console.log(`Environment ready in ${(end - start).toFixed(2)} ms`);
        process.kill(); // Detener el servidor después de medir
    }
});
