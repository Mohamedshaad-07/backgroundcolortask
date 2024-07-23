document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const currentColor = document.body.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    document.body.style.backgroundColor = newColor;
    document.getElementById('colorName').textContent = newColor.charAt(0).toUpperCase() + newColor.slice(1);
});
