export function nextTick(state) { return { ...state, tick: (state.tick || 0) + 1 }; }
