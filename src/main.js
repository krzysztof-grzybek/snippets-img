import { Editor } from "./editor.js";
import { Menu } from "./menu.js";
import { ScriptResolver } from "./script-resolver.js";
import { Runtime } from './runtime.js';

document.addEventListener('DOMContentLoaded', onDocReady);

const SCRIPTS = [
  { path: './examples/1-list.js', label: 'Lists' },
  { path: './examples/2-list-recursive.js', label: 'List recursive' },
];

function onDocReady() {
  const menuContainer = document.getElementById('menu-container');

  const menu = new Menu(menuContainer, SCRIPTS);
  const scriptResolver = new ScriptResolver();
  const runtime = new Runtime();
  let editor = null;
  Editor.create().then(_editor => {
    editor = _editor;
  });

  menu.onItemClick(script => {
    scriptResolver.resolve(script).then(scriptBody => {
      editor.setValue(scriptBody);
    })
  });

  document.getElementById('code-exec').addEventListener('click', () => {
    runtime.exec(editor.getValue());
  })
}




