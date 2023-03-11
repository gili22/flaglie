const boxes = document.querySelector(`.boxes`);

const flag = document.querySelector('.flag');
const input = document.getElementById('myInput');
const xBtn = document.querySelector('.x');
const howToPlay = document.querySelector('.howToPlay');
const desc = document.querySelector('.desc');
const scoring = document.querySelector('.scoring');
const info = document.querySelector('.info');
const theCorrectGuessWas = document.querySelector('.theCorrectGuessWas');
const textLogo = document.querySelector('.textLogo');
const buyHintBtn = document.querySelector('.buyHint');
const hintMsg = document.querySelector('.hintMsg');
const hintImg = document.querySelector('.hintImg');
const xHint = document.querySelector('.xhint');
const hintDiv = document.querySelector('.hint');




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
const gameFinishedMsg = document.querySelector('.gameFinishedMsg');
const faceBook = document.querySelector('.faceBook');
const secondDesc = document.querySelector('.secondDesc');
const welcomeBtn = document.querySelector('.welcomeBtn');
const startingDiv = document.querySelector('.startingDiv');


const wrongMessage = document.querySelector('.wrongMessage');
const pointsMessage = document.querySelector('.ptsMsg');





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
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1920px-Flag_of_the_Republic_of_China.svg.png', countryName: 'taiwan', imageHint: 'https://images.unsplash.com/photo-1609147110688-83b5fd1288e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1920px-Flag_of_Jordan.svg.png', countryName: 'jordan', imageHint: 'https://images.unsplash.com/photo-1589825274556-94746a018766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png', countryName: 'sweden', imageHint: 'https://images.unsplash.com/photo-1629921976897-b4ce6795e560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1920px-Flag_of_Tunisia.svg.png', countryName: 'tunisia', imageHint: 'https://upload.wikimedia.org/wikipedia/commons/9/99/North_Africa_%28orthographic_projection%29.svg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1920px-Flag_of_Slovenia.svg.png', countryName: 'slovenia', imageHint: 'https://images.unsplash.com/photo-1562083589-3bf71182e9c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1920px-Flag_of_Iran.svg.png', countryName: 'iran', imageHint: 'https://images.unsplash.com/photo-1629573649283-837662c759a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1920px-Flag_of_Bahrain.svg.png', countryName: 'bahrain', imageHint: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Blank_map_of_Persian_Gulf.svg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png', countryName: 'denmark', imageHint: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1920px-Flag_of_Estonia.svg.png', countryName: 'estonia', imageHint: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Baltic_states.svg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1920px-Flag_of_Georgia.svg.png', countryName: 'georgia', imageHint: 'https://st2.depositphotos.com/3479649/8829/i/600/depositphotos_88291686-stock-photo-ajarian-khachapuri-on-dark-table.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1920px-Flag_of_Haiti.svg.png', countryName: 'haiti', imageHint: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Hispaniola_%28orthographic_projection%29.svg/260px-Hispaniola_%28orthographic_projection%29.svg.png'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1920px-Flag_of_Iraq.svg.png', countryName: 'iraq', imageHint: 'https://www.ncpedia.org/sites/default/files//styles/anchor_images/public/iraq_saddam_hussein.jpg?itok=W8DC_N_a'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1920px-Flag_of_Kazakhstan.svg.png', countryName: 'kazakhstan', imageHint: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Central_Asia_%28orthographic_projection%29.svg/1024px-Central_Asia_%28orthographic_projection%29.svg.png'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1920px-Flag_of_Lebanon.svg.png', countryName: 'lebanon', imageHint: 'https://www.biblicalarchaeology.org/wp-content/uploads/lebanese-cedar-1.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png', countryName: 'mexico', imageHint: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1920px-Flag_of_Montenegro.svg.png', countryName: 'montenegro', imageHint: 'https://www.worldatlas.com/upload/3b/d0/7b/shutterstock-1171714765.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1920px-Flag_of_New_Zealand.svg.png', countryName: 'new zealand', imageHint: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TWC_Wildlife_Centre%E2%80%A2_Stewart_Nimmo_%E2%80%A2_MRD_8502.jpg/1920px-TWC_Wildlife_Centre%E2%80%A2_Stewart_Nimmo_%E2%80%A2_MRD_8502.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1920px-Flag_of_Portugal.svg.png', countryName: 'portugal', imageHint: 'https://wallpaperaccess.com/full/3927047.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1920px-Flag_of_Serbia.svg.png', countryName: 'serbia', imageHint: 'https://e0.365dm.com/23/01/2048x1152/skysports-novak-djokovic-tennis_6033473.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1920px-Flag_of_South_Africa.svg.png', countryName: 'south africa', imageHint: 'https://content.fortune.com/wp-content/uploads/2023/02/GettyImages-1459166551-3.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1920px-Flag_of_Greece.svg.png', countryName: 'greece', imageHint: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1920px-Flag_of_South_Korea.svg.png', countryName: 'south korea', imageHint: 'https://www.goodfreephotos.com/albums/food/korean-bbq.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1920px-Flag_of_the_Czech_Republic.svg.png', countryName: 'czech republic', imageHint: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1920px-Flag_of_Lithuania.svg.png', countryName: 'lithuania', imageHint: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Baltic_states.svg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1920px-Flag_of_Chile.svg.png', countryName: 'chile', imageHint: 'https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1920px-Flag_of_Hungary.svg.png', countryName: 'hungary', imageHint: 'https://www.thespruceeats.com/thmb/c6CKNqmHjtBFpWGPlo3o9btkFK0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-hungarian-goulash-recipe-1805923-hero-01-0dd1f354032a41dd82b6e807b0161e6b.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1920px-Flag_of_Ireland.svg.png', countryName: 'ireland', imageHint: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/maryland-james-joyce-irish-pub-1582643352.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png', countryName: 'norway', imageHint: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/pu1bbz1dfvp5vwsthzku/VikingValleyNjardarheimrEntranceTicketinGudvangen.webp'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1920px-Bandera_de_Espa%C3%B1a.svg.png', countryName: 'spain', imageHint: 'https://images.unsplash.com/photo-1619165822106-d454162377d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1920px-Flag_of_Thailand.svg.png', countryName: 'thailand', imageHint: 'https://www.fromthecomfortofmybowl.com/wp-content/uploads/2021/03/best-vegan-pad-thai-500x375.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1920px-Flag_of_Vietnam.svg.png', countryName: 'vietnam', imageHint: 'https://images.unsplash.com/photo-1631709497146-a239ef373cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1920px-Flag_of_the_Netherlands.svg.png', countryName: 'netherlands', imageHint: 'https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1105&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/1920px-Flag_of_the_Bahamas.svg.png', countryName: 'bahamas', imageHint: 'https://e291f1206726d700191b-d0cedd1cc05016668dc83bc2742129e5.ssl.cf1.rackcdn.com/windsong/media/windsong-mega-resorts-hero-5f5297b9c9e02.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1920px-Flag_of_Romania.svg.png', countryName: 'romania', imageHint: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Bela_Lugosi_as_Dracula.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1920px-Flag_of_Peru.svg.png', countryName: 'peru', imageHint: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1920px-Flag_of_Austria.svg.png', countryName: 'austria', imageHint: 'https://assets.classicfm.com/2017/36/mozart-1504532179-list-handheld-0.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1920px-Flag_of_Cyprus.svg.png', countryName: 'cyprus', imageHint: 'https://www.alternatehistory.com/forum/attachments/byzantium0-png.10012/'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1920px-Flag_of_Singapore.svg.png', countryName: 'singapore', imageHint: 'https://images.unsplash.com/photo-1589848014442-5f540ff95bea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1920px-Flag_of_Azerbaijan.svg.png', countryName: 'azerbaijan', imageHint: 'https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1920px-Flag_of_Cuba.svg.png', countryName: 'cuba', imageHint: 'https://www.politico.com/dims4/default/7ee146f/2147483647/strip/true/crop/1160x629+0+0/resize/630x342!/quality/90/?url=http%3A%2F%2Fs3-origin-images.politico.com%2F2014%2F12%2F17%2F1974_fidel_castro_ap_629.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1920px-Flag_of_Saudi_Arabia.svg.png', countryName: 'saudi arabia', imageHint: 'https://images.unsplash.com/photo-1589827577276-65d717348780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1920px-Flag_of_Jamaica.svg.png', countryName: 'jamaica', imageHint: 'https://images.wsj.net/im-150255?width=1280&size=1.33333333'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1920px-Flag_of_Malaysia.svg.png', countryName: 'malaysia', imageHint: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png', countryName: 'germany', imageHint: 'https://images.unsplash.com/photo-1609237756221-88c4a93846b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png', countryName: 'brazil', imageHint: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1920px-Flag_of_Poland.svg.png', countryName: 'poland', imageHint: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/6/1/CC_emeril-polish-pierogies-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1483736764692.jpeg'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1920px-Flag_of_Cambodia.svg.png', countryName: 'cambodia', imageHint: 'https://images.unsplash.com/photo-1565687363630-7a81809a199c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1920px-Flag_of_the_People%27s_Republic_of_China.svg.png', countryName: 'china', imageHint: 'https://images.unsplash.com/photo-1608037521244-f1c6c7635194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1920px-Flag_of_Finland.svg.png', countryName: 'finland', imageHint: 'https://techcrunch.com/wp-content/uploads/2015/04/shutterstock_245957161.jpg'},
    {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png', countryName: 'india', imageHint: 'https://images.unsplash.com/photo-1523131328515-865dbf27fe0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png', countryName: 'france', imageHint: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png', countryName: 'united kingdom', imageHint: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1920px-Flag_of_Turkey.svg.png', secNames: ['turkey', 'türkiye'], imageHint: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80'},
    {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png', countryName: 'canada', imageHint: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}

  ];


submitButton.disabled=true;
button.disabled=true;
buyHintBtn.disabled=true;
info.disabled=true;

buyHintBtn.disabled=true;



const showModal = function() {
  var is_already_show = sessionStorage.getItem('alreadyShow');
  if(is_already_show != 'already shown'){
    sessionStorage.setItem('alreadyShow','already shown');
    startingDiv.classList.remove('hidden');
    blurOverlay.classList.remove('hidden');
  } else{
    console.log(is_already_show);
  }
}

showModal();



welcomeBtn.addEventListener('click', function() {

  submitButton.disabled=false;
  button.disabled=false;
  buyHintBtn.disabled=false;
  info.disabled=false;

  blurOverlay.classList.toggle('hidden');

  welcomeBtn.classList.add('hidden');
  startingDiv.classList.add('hidden');
  document.querySelector('.welcomeDesc').classList.add('hidden');
  // document.querySelector('body').style.backdropFilter = none;

  // buyHintBtn.classList.add('hidden');
  // info.classList.add('hidden');

});




let previousIds = [];

let isActive = true;

let purchase = false;


// const resizeOps = () => {
//   document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
// };

// resizeOps();
// window.addEventListener("resize", resizeOps);

    


let previousFlagIndexes = [];

let globalLevel = 0;
// for(let i = 0; i < levels[globalLevel].blockNum; i++) {
//     let html = `<div class="box${i} box" id="${i}"></div>`
//     boxes.insertAdjacentHTML('beforeend', html);   
// }



let points = 0;

displayPoints.textContent = `Points: ${points}`

let randomFlagIndex = Math.floor(Math.random() * srcs.length);


flag.src=srcs[randomFlagIndex].url;
hintImg.src = srcs[randomFlagIndex].imageHint;
previousFlagIndexes.push(randomFlagIndex);
// console.log(srcs[randomFlagIndex].countryName);

    const createFlag = function() {

        randomFlagIndex = Math.floor(Math.random() * srcs.length);


        while(previousFlagIndexes.includes(randomFlagIndex) === true) {
            randomFlagIndex = Math.floor(Math.random() * srcs.length);
        }

        previousFlagIndexes.push(randomFlagIndex);


        flag.src=srcs[randomFlagIndex].url;
        hintImg.src = srcs[randomFlagIndex].imageHint;

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


    let hintAmount = 0;


    const wholeInputFunction = function(event, enterEvent) {


      if(enterEvent && input.value.toLowerCase() === srcs[randomFlagIndex].countryName || enterEvent && randomFlagIndex===52 && input.value.toLowerCase() === 'türkiye' || enterEvent && input.value.toLowerCase() === 'turkey')  {
        
        hintAmount = 200;

        divelements = document.querySelectorAll("div.box");
        divBoxes = Array.from(divelements);



        hiddenBoxes = Array.from(divBoxes.filter(db => db.style.opacity == '0'));
        currentBoxes = levels[globalLevel].blockNum - hiddenBoxes.length;



        points += 200;

        pointsMessage.textContent = `+${200}`

        pointsMessage.classList.toggle('fadeFX');


        buyHintBtn.textContent = `Get Hint: ${200} points`

        
        delay(800).then(() => {
          pointsMessage.classList.toggle('fadeFX');
          pointsMessage.classList.color = 'rgb(25, 152, 20)';

        });

        if(globalLevel !== 0) {

        
        points = points + parseInt((currentBoxes / levels[globalLevel].blockNum) * 200);
        pointsMessage.textContent = `+${200 + parseInt((currentBoxes / levels[globalLevel].blockNum) * 200)}`
        
        
        buyHintBtn.textContent = `Get Hint: ${50 + parseInt((levels[globalLevel].blockNum) * 75)} points`

        hintAmount = 50 + parseInt((levels[globalLevel].blockNum) * 75)


        delay().then(() => pointsMessage.classList.toggle('fadeFX'));
        pointsMessage.classList.toggle('fadeFX');


        displayPoints.textContent = `Points: ${points}`

    }

    // divBoxes.forEach(db => {
    //     db.classList.toggle('fade');
    //     db.style.background = colors[Math.floor(Math.random() * 6)];
    //     delay(1000).then(() => db.style.background = '243, 173, 225)');

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

          });

        }

        goodJob.textContent = `${compliments[Math.floor(Math.random() * 4)]} on to level ${globalLevel+1}!`
        goodJob.classList.toggle('fade');

        purchase=false;
      
        submitButton.disabled = true;
        input.disabled = true;
        input.blur();


        if(globalLevel === 20) {


            console.log('GAME OVER');
            wrongMessage.textContent='';

            displayAttempts.textContent = `Attempts: 0`;
            blurOverlay.classList.toggle('hidden');
        
            gameFinishedMsg.textContent='Great Job! you finished the game! 👏🎉'
            gameFinishedMsg.classList.toggle('fade');

            gameOverMessage.textContent = 'Great Job! you finished the game! 👏🎉'
            gameOverMessage.style.fontSize = '50px';
            gameOverMessage.style.bottom = '700px'
            gameOverMessage.style.left = '480px'


            gameOverBtn.classList.toggle('hidden');
            shareBtn.classList.toggle('hidden');
            gameOverMessage.classList.toggle('fade');
            finalScore.classList.toggle('fade');
            levelReached.classList.toggle('fade');
        
            levelReached.textContent=`Level reached: 20`
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


        displayLevel.textContent = `Level: ${globalLevel + 1}`
        displayAttempts.textContent = `Attempts: ${attemptedGuesses}`
      

             


        boxes.innerHTML = `<div class="boxes"></div>`; 
        isActive=true;
        createBlocks();
        createFlag();


        input.value = '';
        previousIds=[]
    }); 

    } else if(enterEvent && input.value.toLowerCase() !== srcs[randomFlagIndex].countryName && input.value.length > 0 || enterEvent && randomFlagIndex===52 && input.value.toLowerCase() !== 'türkiye' && input.value.toLowerCase() === 'türkiye') {
        attemptedGuesses--;



        attemptedGuesses > 0 ? displayAttempts.textContent = `Attempts: ${attemptedGuesses}` : ''

        wrongMessage.textContent=`Wrong guess! you have ${attemptedGuesses} attempt${attemptedGuesses > 1 ? 's' : ''} left!!!`
        wrongMessage.classList.toggle('fade');

        input.value = '';
        input.blur();
        if(attemptedGuesses === 0) {
            console.log('GAME OVER');
            wrongMessage.textContent='';
            wrongMessage.classList.toggle('hidden');
            theCorrectGuessWas.innerHTML = `The correct flag was <br>${srcs[randomFlagIndex].countryName.charAt(0).toUpperCase() + srcs[randomFlagIndex].countryName.slice(1)}`
            theCorrectGuessWas.classList.toggle('fade');


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


    } else if(enterEvent && input.value === '') {

      wrongMessage.textContent = 'Please enter a country!'
      wrongMessage.classList.toggle('fade');

      delay(2000).then(() => wrongMessage.classList.toggle('fade'));
    }
  
  }



input.addEventListener("keyup", function (e) {
  


  wholeInputFunction(e, e.keyCode === 13);

});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  wholeInputFunction(e, 1===1);

});


  

button.addEventListener('click', function() {
  if(isActive === true) {

    buyHintBtn.disabled=false;


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
    gameFinishedMsg.classList.toggle('fade')
    theCorrectGuessWas.classList.toggle('fade');

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


twitter.addEventListener('click', function() {

  
  aTwitter.href = `https://twitter.com/intent/tweet?text=Level:%20${globalLevel+1},%20Points:%20${points},%20play%20Flaglie%20at%20www.flaglie.com`;

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
  secondDesc.classList.toggle('hidden');
  desc.classList.toggle('hidden');


})


xBtn.addEventListener('click', function() {

  scoring.classList.toggle('hidden');
  xBtn.classList.toggle('hidden');
  howToPlay.classList.toggle('hidden');
  secondDesc.classList.toggle('hidden');
  desc.classList.toggle('hidden');


});

async function shareMenu() {
  try {
    await navigator.share({
      text: `Level: ${globalLevel+1} Points: ${points}, play Flaglie at `,
      url: 'https://www.flaglie.com'
    })
  } catch (error) {
    console.log('Sharing failed!', error)
  }
}

faceBook.addEventListener('click', shareMenu);



buyHintBtn.addEventListener('click', function() {

  if(purchase === false) {

  purchase=true;



  divelements = document.querySelectorAll("div.box");
  divBoxes = Array.from(divelements);
  hiddenBoxes = Array.from(divBoxes.filter(db => db.style.opacity == '0'));

  console.log(hiddenBoxes);

  if(points - hintAmount >= 0 && hiddenBoxes.length > 0 || globalLevel===0) {

    pointsMessage.style.color = 'crimson';
    pointsMessage.classList.toggle('fadeFX');
    pointsMessage.textContent = `-${hintAmount}`
 

    delay(1000).then(() => {
      pointsMessage.style.color = 'rgb(25, 152, 20)';
    });


    points = points - hintAmount;
    displayPoints.textContent = `Points: ${points}`

    buyHintBtn.disabled = true;

    xHint.classList.toggle('hidden');
    hintImg.classList.toggle('hidden');
    hintMsg.classList.toggle('hidden');
    hintDiv.classList.toggle('hidden');

    delay(800).then(() => {
      pointsMessage.classList.toggle('fadeFX');
    });

} else if(points - hintAmount < 0) {
  wrongMessage.textContent = `You don't have enough points for a hint!`;
  wrongMessage.classList.toggle('fade');

  delay(2500).then(() => {
    wrongMessage.classList.toggle('fade');

  });


} else if(hiddenBoxes.length === 0 && globalLevel > 0) {

  wrongMessage.textContent = `Please remove at least 1 block before buying a hint!`;
  wrongMessage.classList.toggle('fade');

  purchase=false;

  delay(2500).then(() => {
    wrongMessage.classList.toggle('fade');

  });

}

} else if(points-hintAmount < 0) {
  wrongMessage.textContent = `You don't have enough points for a hint!`;
  wrongMessage.classList.toggle('fade');

  delay(2500).then(() => {
    wrongMessage.classList.toggle('fade');

  });

} else if(purchase !== false) {
  wrongMessage.textContent = `You can use only one hint per level`;
  wrongMessage.classList.toggle('fade');

  delay(2500).then(() => {
    wrongMessage.classList.toggle('fade');

  });
}

});

xHint.addEventListener('click', function() {

  xHint.classList.toggle('hidden');
  hintImg.classList.toggle('hidden');
  hintMsg.classList.toggle('hidden');
  hintDiv.classList.toggle('hidden');
  buyHintBtn.disabled = false;

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
  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Türkiye","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  
  

autocomplete(document.getElementById("myInput"), countries);


/////////////////////////////////////////////////////////////////////
