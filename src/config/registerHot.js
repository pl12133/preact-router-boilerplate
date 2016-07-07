// Taken from `developit/preact-boilerplate:/src/index.js`
export default function registerHot (appPath, initCallback) {
  if (module.hot) {
    module.hot.accept(appPath, () => requestAnimationFrame(() => {
      flushLogs();
      initCallback();
    }));

    // optional: mute HMR/WDS logs
    let log = console.log;
    let logs = [];
    console.log = (t, ...args) => {
      if (typeof t === 'string' && t.match(/^\[(HMR|WDS)\]/)) {
        if (t.match(/(up to date|err)/i)) logs.push(t.replace(/^.*?\]\s*/m, ''), ...args);
      } else {
        log.call(console, t, ...args);
      }
    };
    let flushLogs = () => console.log(`%c🚀 ${logs.splice(0, logs.length).join(' ')}`, 'color:#888;');
  }
}
