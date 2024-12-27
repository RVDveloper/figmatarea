// const darkModeButton = document.createElement('button');
//     darkModeButton.textContent = 'Toggle Dark Mode';
//     darkModeButton.className = 'dark-mode-toggle';

    
//     document.body.appendChild(darkModeButton);

    
//     darkModeButton.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//         document.querySelectorAll('header, .game-section, .game-section2').forEach(el => {
//             el.classList.toggle('dark-mode');
//         });
//     });



//?aqui
// const darkModeButton = document.createElement('button');
// darkModeButton.textContent = 'Toggle Dark Mode';
// darkModeButton.className = 'dark-mode-toggle';

// document.body.appendChild(darkModeButton);

// darkModeButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     document.querySelectorAll('header, .game-section, .game-section2').forEach(el => {
//         el.classList.toggle('dark-mode');
//     });
// });


const darkModeButton = document.createElement('button');
        darkModeButton.textContent = 'Toggle Dark Mode';
        darkModeButton.className = 'dark-mode-toggle';

        document.body.appendChild(darkModeButton);

        darkModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.querySelectorAll('header, .game-section, .game-section2, h1').forEach(el => {
                el.classList.toggle('dark-mode');
            });
        });