const boxes = document.querySelector(`.boxes`);

const flag = document.querySelector('.flag');
const input = document.getElementById('myInput');
const xBtn = document.querySelector('.x');
const howToPlay = document.querySelector('.howToPlay');
const desc = document.querySelector('.desc');
const scoring = document.querySelector('.scoring');
const info = document.querySelector('.info');

console.log('hey gili! hey world!');

const submitButton = document.querySelector('.submitButton');
const button = document.querySelector('.button');
const displayLevel = document.querySelector('.yourLevel');
const displayPoints = document.querySelector('.yourPoints');
const displayAttempts = document.querySelector('.yourAttempts');
const blurOverlay = document.querySelector('.overlay')
const gameOverBtn = document.querySelector('.gameOver');
const shareBtn = document.querySelector('.shareBtn');
const gameOverMessage = document.querySelector('.gameOverMessage');
const finalScore = document.querySelector('.finalScore');
const levelReached = document.querySelector('.levelReached');
const copyClipboard = document.querySelector('.copyClipboard');
const goodJob = document.querySelector('.goodJob');
const twitter = document.querySelector('.twitter');
const aTwitter = document.getElementById('atwitter');
const btnCopyToClipboard = document.querySelector('.clipIcon');


const wrongMessage = document.querySelector('.wrongMessage');
const pointsMessage = document.querySelector('.ptsMsg')


const levels = [
    {blockNum: 1, column: 1, row: 1},
    {blockNum: 2, column: 1, row: 2},
    {blockNum: 3, column: 1, row: 3},
    {blockNum: 4, column: 2, row: 2},
    {blockNum: 5, column: 1, row: 5},
    {blockNum: 6, column: 2, row: 3},
    {blockNum: 7, column: 7, row: 1},
    {blockNum: 8, column: 4, row: 2},
    {blockNum: 9, column: 3, row: 3},
    {blockNum: 10, column: 5, row: 2},
    {blockNum: 16, column: 4, row: 4},
    {blockNum: 20, column: 5, row: 4},
    {blockNum: 25, column: 5, row: 5},
    {blockNum: 27, column: 9, row: 3},
    {blockNum: 32, column: 8, row: 4},
    {blockNum: 36, column: 6, row: 6},
    {blockNum: 40, column: 8, row: 5},
    {blockNum: 45, column: 9, row: 5},
    {blockNum: 50, column: 10, row: 5},
    {blockNum: 60, column: 10, row: 6},
    {blockNum: 1, column: 1, row: 1},

];



const srcs = [
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1920px-Flag_of_the_Republic_of_China.svg.png', countryName: 'taiwan'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1920px-Flag_of_Jordan.svg.png', countryName: 'jordan'},
    {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png', countryName: 'sweden'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1920px-Flag_of_Tunisia.svg.png', countryName: 'tunisia'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1920px-Flag_of_Slovenia.svg.png', countryName: 'slovenia'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1920px-Flag_of_Iran.svg.png', countryName: 'iran'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1920px-Flag_of_Bahrain.svg.png', countryName: 'bahrain'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png', countryName: 'denmark'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1920px-Flag_of_Estonia.svg.png', countryName: 'estonia'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1920px-Flag_of_Georgia.svg.png', countryName: 'georgia'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1920px-Flag_of_Haiti.svg.png', countryName: 'haiti'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1920px-Flag_of_Iraq.svg.png', countryName: 'iraq'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1920px-Flag_of_Kazakhstan.svg.png', countryName: 'kazakhstan'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1920px-Flag_of_Lebanon.svg.png', countryName: 'lebanon'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png', countryName: 'mexico'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1920px-Flag_of_Montenegro.svg.png', countryName: 'montenegro'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1920px-Flag_of_New_Zealand.svg.png', countryName: 'new zealand'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1920px-Flag_of_Portugal.svg.png', countryName: 'portugal'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1920px-Flag_of_Serbia.svg.png', countryName: 'serbia'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1920px-Flag_of_South_Africa.svg.png', countryName: 'south africa'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1920px-Flag_of_Greece.svg.png', countryName: 'greece'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1920px-Flag_of_South_Korea.svg.png', countryName: 'south korea'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1920px-Flag_of_the_Czech_Republic.svg.png', countryName: 'czech republic'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1920px-Flag_of_Lithuania.svg.png', countryName: 'lithuania'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1920px-Flag_of_Chile.svg.png', countryName: 'chile'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1920px-Flag_of_Hungary.svg.png', countryName: 'hungary'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1920px-Flag_of_Ireland.svg.png', countryName: 'ireland'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png', countryName: 'norway'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1920px-Bandera_de_Espa%C3%B1a.svg.png', countryName: 'spain'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1920px-Flag_of_Thailand.svg.png', countryName: 'thailand'},
];
let previousIds = [];

let isActive = true;



    


let previousFlagIndexes = [];

let globalLevel = 0;
// for(let i = 0; i < levels[globalLevel].blockNum; i++) {
//     let html = `<div class="box${i} box" id="${i}"></div>`
//     boxes.insertAdjacentHTML('beforeend', html);   
// }



let points = 0;

displayPoints.textContent = `Points: ${points}`

let randomFlagIndex = Math.floor(Math.random() * srcs.length);

let colors = ['red', 'magenta', 'brown', 'blue', 'lime', 'green', 'pink']

flag.src=srcs[randomFlagIndex].url;
previousFlagIndexes.push(randomFlagIndex);
// console.log(srcs[randomFlagIndex].countryName);

    const createFlag = function() {

        randomFlagIndex = Math.floor(Math.random() * srcs.length);

        while(previousFlagIndexes.includes(randomFlagIndex) === true) {
            randomFlagIndex = Math.floor(Math.random() * srcs.length);
        }

        previousFlagIndexes.push(randomFlagIndex);
        // console.log(srcs[randomFlagIndex].countryName);

        flag.src=srcs[randomFlagIndex].url;
    
    }

    

    const createBlocks = function() {

        for(let i = 0; i < levels[globalLevel].blockNum; i++) {
            let html = `<div class="box${i} box" id="${i}"></div>`
            boxes.insertAdjacentHTML('beforeend', html);   
        }

        divelements = document.querySelectorAll("div.box");
        divBoxes = Array.from(divelements);


    
        boxes.style.setProperty('grid-template-columns', 'repeat(' + levels[globalLevel].column + ', 1fr)');
        boxes.style.setProperty('grid-template-rows', 'repeat(' + levels[globalLevel].row + ', 1fr)');
   
    }

    let attemptedGuesses = 3;

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    let divelements = document.querySelectorAll("div.box");
    let divBoxes = Array.from(divelements);





    const wholeInputFunction = function(event) {

      console.log(event.pointerType);

      

      if(event.pointerType === 'mouse' || event.pointerType === 'touch' ? input.value.toLowerCase() === srcs[randomFlagIndex].countryName : event.keyCode === 13 && input.value.toLowerCase() === srcs[randomFlagIndex].countryName) {
        

        divelements = document.querySelectorAll("div.box");
        divBoxes = Array.from(divelements);



        hiddenBoxes = Array.from(divBoxes.filter(db => db.style.opacity == '0'));
        currentBoxes = levels[globalLevel].blockNum - hiddenBoxes.length;



        points += 200;

        pointsMessage.textContent = `+${200}`
        pointsMessage.classList.toggle('fadeFX');
        
        delay(800).then(() => pointsMessage.classList.toggle('fadeFX'));

        if(globalLevel !== 0) {

        
        points = points + parseInt((currentBoxes / levels[globalLevel].blockNum) * 200);
        pointsMessage.textContent = `+${200 + parseInt((currentBoxes / levels[globalLevel].blockNum) * 200)}`


        delay().then(() => pointsMessage.classList.toggle('fadeFX'));
        pointsMessage.classList.toggle('fadeFX');


        displayPoints.textContent = `Points: ${points}`
        
    }

    // divBoxes.forEach(db => {
    //     db.classList.toggle('fade');
    //     db.style.background = colors[Math.floor(Math.random() * 6)];
    //     delay(1000).then(() => db.style.background = 'rgb(43, 173, 225)');

    // }); 
        

        const animationDuration = 1500;

        const frameDuration = 1000 / 60;

        const totalFrames = Math.round( animationDuration / frameDuration );

        const easeOutQuad = t => t * ( 2 - t );

        const animateCountUp = el => {
            let frame = 40;
            const countTo = points

            const counter = setInterval( () => {
                frame++;

                const progress = easeOutQuad( frame / totalFrames );

                const currentCount = Math.round( countTo * progress );


                if (parseInt((currentBoxes / levels[globalLevel].blockNum) * 200) !== currentCount) {
                    displayPoints.textContent = `Points: ` + currentCount;
                }

                if ( frame === totalFrames ) {
                    clearInterval( counter );
                }
            }, frameDuration );
        };

          animateCountUp()

        
      
    
        divelements = document.querySelectorAll("div.box");
        divBoxes = Array.from(divelements);



        hiddenBoxes = Array.from(divBoxes.filter(db => db.style.opacity == '0'));
        currentBoxes = levels[globalLevel].blockNum - hiddenBoxes.length;
    
        divBoxes.forEach(db => db.classList.toggle('fade'))


        globalLevel++

        let compliments = ['Good Job!', 'Well Done!', 'Amazing!', 'Nice!!', 'Great Job!'];

        if(globalLevel === 20) {
          goodJob.textContent = ''
          goodJob.style.backGroundColor = 'green';
          goodJob.classList.toggle('hidden');

          delay(2000).then(() => {
            goodJob.classList.toggle('hidden');

          })

        }

        goodJob.textContent = `${compliments[Math.floor(Math.random() * 4)]} on to level ${globalLevel+1}!`
        goodJob.classList.toggle('fade');

      
        submitButton.disabled = true;
        input.disabled = true;
        input.blur();


        if(globalLevel === 20) {



            console.log('GAME OVER');
            wrongMessage.textContent='';

            displayAttempts.textContent = `Attempts: 0`;
            blurOverlay.classList.toggle('hidden');
        
            gameOverMessage.textContent = 'Great Job! you finished the game! 👏🎉'
            gameOverMessage.style.fontSize = '50px';
            gameOverMessage.style.bottom = '700px'
            gameOverMessage.style.left = '480px'


            gameOverBtn.classList.toggle('hidden');
            shareBtn.classList.toggle('hidden');
            gameOverMessage.classList.toggle('fade');
            finalScore.classList.toggle('fade');
            levelReached.classList.toggle('fade');
        
            levelReached.textContent=`Level reached: ${globalLevel+1}`
            finalScore.textContent=`Final score: ${points}`
        
        
            input.blur();
            input.value = ''
            globalLevel === 0;

        }
      




        // hiddenBoxes = Array.from(divBoxes.filter(db => db.style.opacity == '0'));
        delay(2000).then(() => {
          input.disabled = false
          submitButton.disabled = false


        goodJob.classList.toggle('fade');
        attemptedGuesses = 3;

        // var text = document.createTextNode(globalLevel + 1);


        displayLevel.textContent = `Level: ${'_'}${globalLevel + 1}`
        displayAttempts.textContent = `Attempts: ${attemptedGuesses}`
      

             


        boxes.innerHTML = `<div class="boxes"></div>`; 
        isActive=true;
        createBlocks();
        createFlag();


        input.value = '';
        previousIds=[]
    }); 

    } else if(event.pointerType === 'mouse' || event.pointerType === 'touch' ? input.value.toLowerCase() !== srcs[randomFlagIndex].countryName : event.keyCode === 13 && input.value.toLowerCase() !== srcs[randomFlagIndex].countryName ) {
        attemptedGuesses--;


        attemptedGuesses > 0 ? displayAttempts.textContent = `Attempts: ${attemptedGuesses}` : ''

        wrongMessage.textContent=`Wrong guess! you have ${attemptedGuesses} attempt${attemptedGuesses > 1 ? 's' : ''} left!!!`
        wrongMessage.classList.toggle('fade');

        if(attemptedGuesses === 0) {
            console.log('GAME OVER');
            wrongMessage.textContent='';
            wrongMessage.classList.toggle('hidden');
            


            displayAttempts.textContent = `Attempts: 0`;
            blurOverlay.classList.toggle('hidden');
            gameOverBtn.classList.toggle('hidden');
            shareBtn.classList.toggle('hidden');
            gameOverMessage.classList.toggle('fade');
            finalScore.classList.toggle('fade');
            levelReached.classList.toggle('fade');

            levelReached.textContent=`Level reached: ${globalLevel+1}`
            finalScore.textContent=`Final score: ${points}`


            input.blur();
            input.value = ''

        } 

        
        
        delay(2000).then(() => wrongMessage.classList.toggle('fade'));


    }
    }



input.addEventListener("keyup", function (e) {
  


  wholeInputFunction(e);

});

submitButton.addEventListener("touch", function (e) {
  e.preventDefault();


  wholeInputFunction(e);

});


  

button.addEventListener('click', function() {
  if(isActive === true) {

    divelements = document.querySelectorAll("div.box");
    divBoxes = Array.from(divelements);
    let hiddenBoxes = Array.from(divBoxes.filter(db => db.style.opacity == '0'));


    // divelements = document.querySelectorAll("div.box");
    // divBoxes = Array.from(divelements);
    // hiddenBoxes = Array.from(divBoxes.filter(db => db.style.opacity == '0'));



    let randomId = Math.floor(Math.random() * divBoxes.length);


    while(previousIds.includes(randomId) === true) {
        randomId = Math.floor(Math.random() * divBoxes.length);
    }



    divBoxes[randomId].style.opacity = 0;

   

    const checkEmptyBoxes = (boxInDB) => boxInDB.style.opacity == '0';


    if(divBoxes.every(checkEmptyBoxes) === true) {
        isActive = false;
    } 


    previousIds.push(randomId);

}

});


gameOverBtn.addEventListener('click', function() {
    
    submitButton.form.submit();

    blurOverlay.classList.toggle('hidden');
    gameOverBtn.classList.toggle('hidden');
    shareBtn.classList.toggle('hidden');

    wrongMessage.classList.toggle('hidden');


    gameOverMessage.classList.toggle('fade');
    finalScore.classList.toggle('fade');
    levelReached.classList.toggle('fade');


    displayLevel.textContent='Level: 1'
    displayAttempts.textContent='Attempts: 3'
    displayPoints.textContent='Points: 0';
    boxes.innerHTML = `<div class="boxes"></div>`; 
    createFlag();

    previousFlagIndexes = [];
    points = 0;
    globalLevel=0;
    attemptedGuesses=3;
});


twitter.addEventListener('mouseover', function() {

  
  aTwitter.href = `https://twitter.com/intent/tweet?text=Level:%20${globalLevel+1},%20Points:%20${points},%20play%20flagle%20at%20www.flagle.com`;

});

btnCopyToClipboard.addEventListener('click', function() {
    navigator.clipboard.writeText(`Level: ${globalLevel+1}, Points: ${points}, play flagle at www.flagle.com`);
    // copyClipboard.style.zIndex = 56;
    copyClipboard.classList.toggle('fade');
    // copyClipboard.classList.toggle('hidden');


    delay(1900).then(() => {
        // copyClipboard.style.zIndex = -13;
        copyClipboard.classList.toggle('fade');
    });

});

info.addEventListener('click', function() {
  
  
  scoring.classList.toggle('hidden');
  xBtn.classList.toggle('hidden');
  howToPlay.classList.toggle('hidden');
  desc.classList.toggle('hidden');


})


xBtn.addEventListener('click', function() {

  scoring.classList.toggle('hidden');
  xBtn.classList.toggle('hidden');
  howToPlay.classList.toggle('hidden');
  desc.classList.toggle('hidden');


});



//Auto complete code:


function autocomplete(inp, arr)   {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);

          }
        }
    });
    
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();

          }
        }
    });
    
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        // e.preventDefault();
        closeAllLists(e.target);
    });
  }

  
  /*An array containing all the country names in the world:*/
  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  
  

autocomplete(document.getElementById("myInput"), countries);


/////////////////////////////////////////////////////////////////////
