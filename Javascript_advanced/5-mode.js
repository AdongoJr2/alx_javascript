function changeMode(size , weight, transform, background, color) {
  return () => {
    const bodyElement = document.getElementsByTagName('html')[0];

    bodyElement.style.fontSize = size;
    bodyElement.style.fontWeight = weight;
    bodyElement.style.textTransform = transform;
    bodyElement.style.backgroundColor = background;
    bodyElement.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraphElement = document.createElement('p');
  paragraphElement.innerHTML = 'Welcome Holberton!';

  const bodyElement = document.getElementsByTagName('body')[0];

  bodyElement.appendChild(paragraphElement);

  const spookyBtn = document.createElement('button');
  spookyBtn.textContent = 'Spooky';
  spookyBtn.onclick = (ev) => {
    spooky();
  };
  bodyElement.appendChild(spookyBtn);

  const darkModeBtn = document.createElement('button');
  darkModeBtn.textContent = 'Dark mode';
  darkModeBtn.onclick = (ev) => {
    darkMode();
  };
  bodyElement.appendChild(darkModeBtn);
  
  const screamModeBtn = document.createElement('button');
  screamModeBtn.textContent = 'Scream mode';
  screamModeBtn.onclick = (ev) => {
    screamMode();
  };
  bodyElement.appendChild(screamModeBtn);
}

main();
