//your JS code here. If required.
 var container = document.getElementById('boxContainer');

  // Generate 800 boxes dynamically
  for (var i = 0; i < 800; i++) {
    var box = document.createElement('div');
    box.className = 'square';

    // Append the box to the container
    container.appendChild(box);
  }