document.addEventListener('DOMContentLoaded', function () {
    const steps = [
        ["Checkout code…", 400],
        ["Setup Node.js 20…", 1000],
        ["Install deps (pnpm)…", 3000],
        ["Lint…", 1800],
        ["Lint passed (32 files)", 300],
        ["Test…", 2500],
        ["128 tests passed • coverage 92%", 300],
        ["Build…", 2500],
        ["Build complete (12.4 MB)", 300],
        ["Containerize…", 1500],
        ["Image pushed ghcr.io/maxklema/site:427", 300],
        ["Deploy to Proxmox…", 1200],
        ["Deployed • 2 pods • 35ms p95", 300],
        ["🟢 Pipeline succeeded in 15s", 200]
    ];

    const logEl = document.getElementById("log");
    const rerun = document.getElementById("rerun");
    const ciInfo = document.getElementById("ciInfo");
    let buildNo = 1;
    
    let currentTimeouts = []; // Track all running timeouts
    
    function clearAllTimeouts() {
        currentTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
        currentTimeouts = [];
    }
    
    rerun.addEventListener("click", () => {
        run();
    });

    function getTime() {
        const d = new Date();
        const pad = n => String(n).padStart(2, '0');

        let seconds = pad(d.getSeconds());
        let minutes = pad(d.getMinutes());
        let hours = pad(d.getHours());
        return `[${hours}:${minutes}:${seconds}] `
    }

    function run() {
        clearAllTimeouts();
        let i = 0;
        ciInfo.textContent = `mklema-ci • build #${buildNo}`;
        logEl.textContent = "";

        function displayStep() {
            i++;
            if (i >= steps.length) {
                const restartTimeoutId = setTimeout(() => {
                    buildNo++;
                    run();
                }, 3000);
                currentTimeouts.push(restartTimeoutId);
                return;
            }

            logEl.textContent += getTime() + steps[i][0] + "\n";
            logEl.scrollTop = logEl.scrollHeight;
            
            const timeoutId = setTimeout(displayStep, steps[i][1]);
            currentTimeouts.push(timeoutId);
        }

       
        logEl.textContent = getTime() + steps[i][0] + "\n";
        logEl.scrollTop = logEl.scrollHeight;
        
        const nextTimeoutId = setTimeout(displayStep, steps[i][1]);
        currentTimeouts.push(nextTimeoutId)        
    }

    //wait for hydration to complete to avoid server-client mismatch
    const initialTimeoutId = setTimeout(run, 1000);
    currentTimeouts.push(initialTimeoutId);
});
