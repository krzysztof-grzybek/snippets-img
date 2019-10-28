import { Editor } from "./editor.js";
import { Menu } from "./menu.js";
import { ScriptResolver } from "./script-resolver.js";
import { Runtime } from './runtime.js';

document.addEventListener('DOMContentLoaded', onDocReady);

const SCRIPTS = [
  { path: './examples/1-list.js', label: 'Lists' },
  { path: './examples/2-list-recursive.js', label: 'List recursive' },
  { path: './examples/3-task-solution-readable.js', label: 'Task solution - readable solution' },
  { path: './examples/4-task-solution.js', label: 'Task solution' },
  { path: './examples/5-task-solution-single-arg.js', label: 'Task solution - single argument' },
  { path: './examples/6-if-else.js', label: 'If - else' },
  { path: './examples/7-arithmetic.js', label: 'Arithmetic' },
  { path: './examples/8-z-combinator.js', label: 'Z Combinator' },
  { path: './examples/9-task-solution-no-recursion.js', label: 'Task solution - no recursion' },
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




