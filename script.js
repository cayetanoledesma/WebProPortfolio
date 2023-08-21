
let menuVisible = false;
//función de ocultar menu
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;

}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Php");
        habilidades[3].classList.add("kotlin");
        habilidades[4].classList.add("Swift");
        habilidades[5].classList.add("SQL");
        habilidades[6].classList.add("Laravel");
        habilidades[7].classList.add("Bootstrap");
        habilidades[8].classList.add("Xcode");
        habilidades[9].classList.add("Android");
        habilidades[10].classList.add("Mysql");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("trabajo");
        habilidades[13].classList.add("resiliencia");
        habilidades[14].classList.add("compromiso");
        habilidades[15].classList.add("compromiso");
        habilidades[16].classList.add("compromiso");
        habilidades[17].classList.add("compromiso");
        habilidades[18].classList.add("compromiso");
        habilidades[19].classList.add("compromiso");
        habilidades[20].classList.add("compromiso");
        habilidades[21].classList.add("compromiso");

    
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

// function([string1, string2],target id,[color1,color2])    
consoleText(['#Desarrollador','#Frontend','#Backend', '#Web', '#Ios', '#Android', '#Diseño'], 'text',['white','white','white', 'white', 'white','white','white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


