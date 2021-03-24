const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump(){
  dino.classList.add('jump-animation');
  setTimeout (() => {
  dino.classList.remove('jump-animation');
  }, 800);
}

document.addEventListener('keypress',() => {
    if (!dino.classList.contains('jump-animation')){
        jump();
    }
    })

    setInterval(() => {
        score.innerText ++;
        const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
        const rockleft = parseInt(window.getComputedStyle(rock)
        .getPropertyValue('left'));


        if (rockleft < 0) {
            rock.style.display = 'none';
        } else{
      rock.style.display ='';
  }     
    if (rockleft < 50 && rockleft > 0 && dinoTop > 150) {
        alert("You got a score of:" + score.innerText + 
        "\n\nPlay again?");
        location.reload();
    } 
    }, 50);
