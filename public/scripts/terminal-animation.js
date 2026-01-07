document.addEventListener('DOMContentLoaded', function () {
    const steps = [
        ["[10:00:00] Checkout code…", 400],
        ["[10:00:00] Setup Node.js 20…", 1000],
        ["[10:00:01] Install deps (pnpm)…", 3000],
        ["[10:00:04] Lint…", 1800],
        ["[10:00:06] Lint passed (32 files)", 300],
        ["[10:00:06] Test…", 2500],
        ["[10:00:09] 128 tests passed • coverage 92%", 300],
        ["[10:00:09] Build…", 2500],
        ["[10:00:12] Build complete (12.4 MB)", 300],
        ["[10:00:12] Containerize…", 1500],
        ["[10:00:14] Image pushed ghcr.io/maxklema/site:427", 300],
        ["[10:00:14] Deploy to Proxmox…", 1200],
        ["[10:00:15] Deployed • 2 pods • 35ms p95", 300],
        ["[10:00:15] 🟢 Pipeline succeeded in 15s", 200]
    ];

    const logEl = document.getElementById("log");
    const rerun = document.getElementById("rerun");
    
    let currentTimeouts = []; // Track all running timeouts
    
    function clearAllTimeouts() {
        currentTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
        currentTimeouts = [];
    }
    
    rerun.addEventListener("click", () => {
        clearAllTimeouts();
        run();
    });

    function run() {
        clearAllTimeouts();
        let i = 0;
        logEl.textContent = "";

        function displayStep() {
            i++;
            if (i >= steps.length) {
                const restartTimeoutId = setTimeout(() => {
                    run();
                }, 3000);
                currentTimeouts.push(restartTimeoutId);
                return;
            }

            logEl.textContent += steps[i][0] + "\n";
            logEl.scrollTop = logEl.scrollHeight;
            
            const timeoutId = setTimeout(displayStep, steps[i][1]);
            currentTimeouts.push(timeoutId);
        }

        //wait for hydration to complete to avoid server-client mismatch
        const initialTimeoutId = setTimeout(() => {
            logEl.textContent = steps[i][0] + "\n";
            logEl.scrollTop = logEl.scrollHeight;
            
            const nextTimeoutId = setTimeout(displayStep, steps[i][1]);
            currentTimeouts.push(nextTimeoutId);
        }, 1000);
        
        currentTimeouts.push(initialTimeoutId);
    }

    run();
});
