class Runtime {
  exec(code) {
    eval(this.sandboxCode(code))
  }

  sandboxCode(code) {
    return `;(function(){${code}})()`;
  }
}

export { Runtime };
