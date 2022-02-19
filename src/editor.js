class Editor {
  static create() {
    return new Promise(resolve => {
      require.config({ paths: { 'vs': './vendor/monaco-editor/min/vs' }});
      require(['vs/editor/editor.main'], function() {
        monaco.editor.defineTheme('vintage', {
          "base": "vs",
          "inherit": true,
          "rules": [
            {
              "background": "F1F1F1",
              "token": ""
            },
            {
              "foreground": "406040",
              "token": "comment"
            },
            {
              "foreground": "c03030",
              "token": "string"
            },
            {
              "foreground": "0080a0",
              "token": "constant.numeric"
            },
            {
              "fontStyle": "underline",
              "token": "source.ocaml constant.numeric.floating-point"
            },
            {
              "foreground": "800000",
              "token": "constant.character"
            },
            {
              "foreground": "2060a0",
              "token": "keyword"
            },
            {
              "foreground": "2060a0",
              "token": "keyword.operator"
            },
            {
              "fontStyle": "underline",
              "token": "source.ocaml keyword.operator.symbol.prefix.floating-point"
            },
            {
              "fontStyle": "underline",
              "token": "source.ocaml keyword.operator.symbol.infix.floating-point"
            },
            {
              "foreground": "0080ff",
              "token": "entity.name.module"
            },
            {
              "foreground": "0080ff",
              "token": "support.other.module"
            },
            {
              "foreground": "a08000",
              "token": "storage.type"
            },
            {
              "foreground": "008080",
              "token": "storage"
            },
            {
              "foreground": "c08060",
              "token": "entity.name.class.variant"
            },
            {
              "fontStyle": "bold",
              "token": "keyword.other.directive"
            },
            {
              "foreground": "800000",
              "token": "entity.name.function"
            },
            {
              "foreground": "800080",
              "token": "storage.type.user-defined"
            },
            {
              "foreground": "8000c0",
              "token": "entity.name.type.class.type"
            }
          ],
          "colors": {
            "editor.foreground": "#000000",
            "editor.background": "#F1F1F1",
            "editor.selectionBackground": "#B0B0FF",
            "editor.lineHighlightBackground": "#00000026",
            "editorCursor.foreground": "#000000",
            "editorWhitespace.foreground": "#BFBFBF"
          }
        });

        const rootEl = document.getElementById('monaco-editor');
        var monacoEditor = monaco.editor.create(rootEl, {
          value: 'alert(\`\n  1. Choose example from the list\n  2. Open browser console\n  3. Click "Run the code!" button\n  4. Play with the code!\n  5. Repeat ;)\n\`);',
          language: 'javascript',
          fontFamily: 'Special Elite',
          fontSize: 18,
          theme: 'vintage',
          renderIndentGuides: false
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
