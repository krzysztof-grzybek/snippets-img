class ScriptResolver {
  resolve(script) {
    return fetch(script.path)
      .then(scriptBody => scriptBody.text());
  }
}
export { ScriptResolver }
