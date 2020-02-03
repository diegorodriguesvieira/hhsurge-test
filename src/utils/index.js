export const delay = ms => new Promise(resolve => window.setTimeout(resolve, ms));

export default delay;
