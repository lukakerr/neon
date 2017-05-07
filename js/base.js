var map = {};
onkeydown = onkeyup = function(e){
	map[e.keyCode] = e.type == 'keydown';
	if(map[91] && map[83]){
		document.getElementById("nav").classList.add('flash');
		window.setTimeout(function() {
			document.getElementById("nav").classList.remove('flash');
		}, 300)
		map = {};
	}
}

var map2 = {};
onkeydown = onkeyup = function(e){
    map2[e.keyCode] = e.type == 'keydown';
    if(map2[91] && map2[82]){
        location.reload();
        map2 = {};
    }
}

var map3 = {};
onkeydown = onkeyup = function(e){
  map3[e.keyCode] = e.type == 'keydown';
  if(map3[91] && map3[79]){
    dialog.showOpenDialog({properties: ['openFile']}, function(filename) { 
      onChosenFileToOpen(filename.toString()); });
    map3 = {};
    document.getElementById('open-dialog').innerHTML = "";
  }
}

const {shell} = require('electron')

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