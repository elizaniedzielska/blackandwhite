let red = 100;
let green = 100;
let blue = 100;
const div1 = document.querySelector('.arrow-up');
const div2 = document.querySelector('.arrow-down');


document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;



const changeColor = (e) => {
switch (e.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red+=3}, ${green+=3}, ${blue+=3})`;
    
      if (document.body.style.backgroundColor === `rgb(255, 255, 255)`){
        div2.style.display = "block"
        div1.style.display = "none"
      } else {
        div2.style.display = "none"
      }
      console.log(document.body.style.backgroundColor);
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red-=3}, ${green-=3}, ${blue-=3})`;
   
      if(document.body.style.backgroundColor === `rgb(0, 0, 0)`){
        div1.style.display = "block"
        div2.style.display = "none"
      } else {
        div1.style.display = "none"
      }
      console.log(document.body.style.backgroundColor);
      break;

  }
}

window.addEventListener('keydown', changeColor);