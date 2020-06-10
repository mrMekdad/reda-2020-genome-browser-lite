export function summarize(state) { return `author=${state.author};tick=${state.tick}`; }

export function detail(state) { return JSON.stringify(state); }
