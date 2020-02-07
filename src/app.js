// Red@ entrypoint for Genome Browser Lite
const root = document.getElementById('app');
const state = { project: 'genome-browser-lite', author: 'Red@', theme: 'bioinformatics', milestones: 3 };
if (root) root.textContent = JSON.stringify(state, null, 2);
