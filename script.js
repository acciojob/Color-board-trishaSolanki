//your JS code here. If required.
var container = document.getElementById('boxConatiner');
for (var i=0; i<800; i++){
	var box = document.creatElement('div');
	box.className = 'square';
	container.appendChild(box);
}