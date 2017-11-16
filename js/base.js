const shell = require('electron')

var map = {};

onkeydown = onkeyup = function(e) {
	map[e.keyCode] = e.type == 'keydown';
	if ((map[91] || map[93]) && map[82]) {
    location.reload();
    map = {};
  } else if ((map[91] || map[93]) && map[79]) {
    dialog.showOpenDialog({properties: ['openFile']}, function(filename) { 
      onChosenFileToOpen(filename.toString()); 
    });
    document.getElementById('open-dialog').innerHTML = "";
    map = {};
  }
}

document.addEventListener('click', (event) => {
  if (event.target.href) {
    // Open links in external browser
    shell.openExternal(event.target.href)
    event.preventDefault()
  } else if (event.target.classList.contains('refresh')) {
    if (confirm('Are you sure? \nAll code will be cleared')) {
      location.reload(); }
  } else if (event.target.classList.contains('quit')) {
    window.close()
  }
})