var editorKey = "html5-notepad";
var editor = document.getElementById("editor");
var preview = document.getElementById("preview");
var cache = localStorage.getItem(editorKey);

if (cache) {
  //   editor.innerHTML = cache;
  editor.innerHTML = marked(cache);
}

function autosave() {
  var newValue = editor.innerHTML;
  if (cache != newValue) {
    cache = newValue;
    localStorage.setItem(editorKey, cache);
  }
}

editor.addEventListener("input", autosave);
