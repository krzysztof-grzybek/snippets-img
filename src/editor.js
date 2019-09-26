class Editor {
  static create() {
    return new Promise(resolve => {
      require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' }});
      require(['vs/editor/editor.main'], function() {
        const rootEl = document.getElementById('monaco-editor');
        var monacoEditor = monaco.editor.create(rootEl, {
          value: 'alert(\`\n  1. Choose example from the list\n  2. Open browser console\n  3. Click "Run the code!" button\n  4. Play with the code!\n  5. Repeat ;)\n\`);',
          language: 'javascript',
          theme: 'vs-dark'
        });
        resolve(new Editor(monacoEditor));
      });
    });
  }

  constructor(delegate) {
    this.delegate = delegate;
  }

  setValue(val) {
    this.delegate.setValue(val);
  }

  getValue() {
    return this.delegate.getValue();
  }
}

export { Editor }
