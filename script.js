//your JS code here. If required.


//your JS code here. If required.
const container = document.getElementById('color-board');

        // Function to generate a random hex color
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Create 800 squares with random background color
        for (let i = 0; i < 800; i++) {
            const square = document.createElement('div');
            square.classList.add('square');

            // Add a transition end event listener to smoothly revert the color
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = getRandomColor();
            });

			square.addEventListener('mouseout', () => {
                square.style.backgroundColor = '#1d1d1d';
            });

            container.appendChild(square);
        }
