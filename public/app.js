

let loggedIn = localStorage.getItem('loggedIn');
let dataBase  = JSON.parse(localStorage.getItem('usersData') )
let CurrentUsesr  = JSON.parse(localStorage.getItem('CurrentUsesr') )
let Fees  = JSON.parse(localStorage.getItem('Fees') ) || []
let markAllStu  = JSON.parse(localStorage.getItem('markAllStu') ) || []
let leftImages = document.getElementById('leftImages')
let leftProName = document.getElementById('leftProName')



if(loggedIn === 'false'){

    location.href = './index.html'
}

let html = [
    {
        question: 'HTML ka full form kya hai?',
        options: [
            'Hyper Text Markup Language',
            'High Text Machine Language',
            'Hyper Tool Multi Language',
            'Home Text Markup Language'
        ],
        answer: 'Hyper Text Markup Language'
    },
    {
        question: 'CSS ka full form kya hai?',
        options: [
            'Creative Style System',
            'Cascading Style Sheets',
            'Computer Style Sheet',
            'Colorful Style Sheet'
        ],
        answer: 'Cascading Style Sheets'
    },
    {
        question: 'JavaScript ko kis liye use kiya jata hai?',
        options: [
            'Website ko structure dene ke liye',
            'Website ko style dene ke liye',
            'Website ko interactive banane ke liye',
            'Database manage karne ke liye'
        ],
        answer: 'Website ko interactive banane ke liye'
    },
    {
        question: 'HTML me sab se bari heading ka tag kaunsa hai?',
        options: [
            'h6',
            'heading',
            'h1',
            'head'
        ],
        answer: 'h1'
    },
    {
        question: 'CSS me text ka color change karne ke liye kaunsi property use hoti hai?',
        options: [
            'background-color',
            'font-color',
            'text-color',
            'color'
        ],
        answer: 'color'
    },
    {
        question: 'JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?',
        options: [
            'var',
            'int',
            'string',
            'define'
        ],
        answer: 'var'
    },
    {
        question: 'HTML me link banane ke liye kaunsa tag use hota hai?',
        options: [
            'a',
            'link',
            'href',
            'url'
        ],
        answer: 'a'
    },
    {
        question: 'CSS me id selector kis symbol se start hota hai?',
        options: [
            '.',
            '#',
            '*',
            '&'
        ],
        answer: '#'
    },
    {
        question: 'JavaScript me console par output dikhane ke liye kya use hota hai?',
        options: [
            'print()',
            'console.log()',
            'echo()',
            'write()'
        ],
        answer: 'console.log()'
    },
    {
        question: 'HTML document ka main container tag kaunsa hota hai?',
        options: [
            'body',
            'html',
            'main',
            'div'
        ],
        answer: 'html'
    }
]
let css = [
    {
        question: 'CSS ka use kis liye hota hai?',
        options: [
            'Website ka structure banane ke liye',
            'Website ko style dene ke liye',
            'Database manage karne ke liye',
            'Server run karne ke liye'
        ],
        answer: 'Website ko style dene ke liye'
    },
    {
        question: 'CSS ka full form kya hai?',
        options: [
            'Creative Style Sheets',
            'Cascading Style Sheets',
            'Computer Style Sheets',
            'Colorful Style Sheets'
        ],
        answer: 'Cascading Style Sheets'
    },
    {
        question: 'CSS ko HTML me kaise add kiya jata hai?',
        options: [
            'script tag se',
            'link tag se',
            'style tag se',
            'div tag se'
        ],
        answer: 'style tag se'
    },
    {
        question: 'Inline CSS kis attribute me likha jata hai?',
        options: [
            'class',
            'id',
            'style',
            'font'
        ],
        answer: 'style'
    },
    {
        question: 'CSS me class selector kis symbol se start hota hai?',
        options: [
            '#',
            '.',
            '*',
            '@'
        ],
        answer: '.'
    },
    {
        question: 'CSS me background color change karne ke liye kya use hota hai?',
        options: [
            'color',
            'bgcolor',
            'background-color',
            'background-style'
        ],
        answer: 'background-color'
    },
    {
        question: 'CSS me text size change karne ke liye kaunsi property use hoti hai?',
        options: [
            'text-size',
            'font-style',
            'font-size',
            'size'
        ],
        answer: 'font-size'
    },
    {
        question: 'CSS me element ko center karne ke liye kya use hota hai?',
        options: [
            'align',
            'margin: auto',
            'center',
            'text-align: left'
        ],
        answer: 'margin: auto'
    },
    {
        question: 'CSS me border dene ke liye kaunsi property use hoti hai?',
        options: [
            'outline',
            'border',
            'frame',
            'line'
        ],
        answer: 'border'
    },
    {
        question: 'CSS me display property ka kya use hai?',
        options: [
            'Color change karna',
            'Element ka layout control karna',
            'Font change karna',
            'Image add karna'
        ],
        answer: 'Element ka layout control karna'
    }
];
let JavaScript = [
    {
        question: 'JavaScript ka use kis liye hota hai?',
        options: [
            'Website ka structure banane ke liye',
            'Website ko style dene ke liye',
            'Website ko interactive banane ke liye',
            'Database manage karne ke liye'
        ],
        answer: 'Website ko interactive banane ke liye'
    },
    {
        question: 'JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?',
        options: [
            'var',
            'int',
            'string',
            'define'
        ],
        answer: 'var'
    },
    {
        question: 'JavaScript me output console par dikhane ke liye kya use hota hai?',
        options: [
            'print()',
            'console.log()',
            'echo()',
            'write()'
        ],
        answer: 'console.log()'
    },
    {
        question: 'JavaScript me function kaise declare kiya jata hai?',
        options: [
            'function myFunc()',
            'func myFunc()',
            'create myFunc()',
            'def myFunc()'
        ],
        answer: 'function myFunc()'
    },
    {
        question: 'JavaScript me array kaise likha jata hai?',
        options: [
            '{}',
            '[]',
            '()',
            '<>'
        ],
        answer: '[]'
    },
    {
        question: 'JavaScript me object kaise likha jata hai?',
        options: [
            '[]',
            '{}',
            '()',
            '<>'
        ],
        answer: '{}'
    },
    {
        question: 'JavaScript me loop ka example kaunsa hai?',
        options: [
            'if',
            'for',
            'switch',
            'break'
        ],
        answer: 'for'
    },
    {
        question: 'JavaScript me condition check karne ke liye kya use hota hai?',
        options: [
            'loop',
            'if',
            'function',
            'array'
        ],
        answer: 'if'
    },
    {
        question: 'JavaScript me strict equality operator kaunsa hai?',
        options: [
            '==',
            '===',
            '=',
            '!='
        ],
        answer: '==='
    },
    {
        question: 'JavaScript me event handle karne ke liye kya use hota hai?',
        options: [
            'eventListener',
            'addEventListener',
            'onClick',
            'eventHandler'
        ],
        answer: 'addEventListener'
    }
];
let react = [
    {
        question: 'React JS kya hai?',
        options: [
            'Database system',
            'JavaScript library for UI',
            'Programming language',
            'Operating system'
        ],
        answer: 'JavaScript library for UI'
    },
    {
        question: 'React ko kis ne develop kiya?',
        options: [
            'Google',
            'Microsoft',
            'Facebook',
            'Twitter'
        ],
        answer: 'Facebook'
    },
    {
        question: 'React me component kya hota hai?',
        options: [
            'CSS file',
            'Reusable UI block',
            'Database table',
            'API'
        ],
        answer: 'Reusable UI block'
    },
    {
        question: 'React me JSX kya hai?',
        options: [
            'JavaScript XML syntax',
            'Database query',
            'CSS framework',
            'Server language'
        ],
        answer: 'JavaScript XML syntax'
    },
    {
        question: 'React me state kis liye use hoti hai?',
        options: [
            'Style ke liye',
            'Data store karne aur update karne ke liye',
            'Routing ke liye',
            'Database ke liye'
        ],
        answer: 'Data store karne aur update karne ke liye'
    },
    {
        question: 'React me props kya hote hain?',
        options: [
            'Functions',
            'Variables',
            'Data jo parent se child ko jata hai',
            'CSS styles'
        ],
        answer: 'Data jo parent se child ko jata hai'
    },
    {
        question: 'React me event handle karne ke liye kya use hota hai?',
        options: [
            'onclick',
            'addEventListener',
            'onClick',
            'event()'
        ],
        answer: 'onClick'
    },
    {
        question: 'React me list render karne ke liye kya use hota hai?',
        options: [
            'for loop',
            'map()',
            'while loop',
            'if condition'
        ],
        answer: 'map()'
    },
    {
        question: 'React me useState kya hai?',
        options: [
            'Hook',
            'Component',
            'Function',
            'Library'
        ],
        answer: 'Hook'
    },
    {
        question: 'React me useEffect kis liye use hota hai?',
        options: [
            'Styling ke liye',
            'Side effects handle karne ke liye',
            'Routing ke liye',
            'Database ke liye'
        ],
        answer: 'Side effects handle karne ke liye'
    }
];
let node = [
    {
        question: 'Node.js kya hai?',
        options: [
            'Frontend framework',
            'JavaScript runtime environment',
            'Database system',
            'CSS library'
        ],
        answer: 'JavaScript runtime environment'
    },
    {
        question: 'Node.js kis language par based hai?',
        options: [
            'Python',
            'Java',
            'JavaScript',
            'C++'
        ],
        answer: 'JavaScript'
    },
    {
        question: 'Node.js me file system ko handle karne ke liye kaunsa module use hota hai?',
        options: [
            'http',
            'fs',
            'url',
            'path'
        ],
        answer: 'fs'
    },
    {
        question: 'Node.js me server banane ke liye kaunsa module use hota hai?',
        options: [
            'fs',
            'http',
            'os',
            'events'
        ],
        answer: 'http'
    },
    {
        question: 'Node.js me package install karne ke liye kya use hota hai?',
        options: [
            'pip',
            'npm',
            'composer',
            'gem'
        ],
        answer: 'npm'
    },
    {
        question: 'Node.js me package.json file ka kya kaam hai?',
        options: [
            'Styling ke liye',
            'Project ki details aur dependencies store karna',
            'Database connect karna',
            'Server run karna'
        ],
        answer: 'Project ki details aur dependencies store karna'
    },
    {
        question: 'Node.js me asynchronous programming ka kya matlab hai?',
        options: [
            'Code ek line me run hota hai',
            'Code wait karta hai',
            'Code parallel ya non-blocking run hota hai',
            'Code sirf sync hota hai'
        ],
        answer: 'Code parallel ya non-blocking run hota hai'
    },
    {
        question: 'Node.js me Express kya hai?',
        options: [
            'Database',
            'Framework',
            'Library',
            'Language'
        ],
        answer: 'Framework'
    },
    {
        question: 'Node.js me require() ka kya use hai?',
        options: [
            'File delete karna',
            'Module import karna',
            'Server band karna',
            'Database banana'
        ],
        answer: 'Module import karna'
    },
    {
        question: 'Node.js me console.log() ka kya use hai?',
        options: [
            'Database connect karna',
            'Output console par dikhana',
            'Server start karna',
            'File read karna'
        ],
        answer: 'Output console par dikhana'
    }
];
let mongo = [
    {
        question: 'MongoDB kya hai?',
        options: [
            'Relational database',
            'NoSQL database',
            'Programming language',
            'Frontend framework'
        ],
        answer: 'NoSQL database'
    },
    {
        question: 'MongoDB me data kis format me store hota hai?',
        options: [
            'Tables',
            'Rows',
            'Documents (JSON-like)',
            'Graphs'
        ],
        answer: 'Documents (JSON-like)'
    },
    {
        question: 'MongoDB me database ke andar kya hota hai?',
        options: [
            'Tables',
            'Collections',
            'Files',
            'Indexes only'
        ],
        answer: 'Collections'
    },
    {
        question: 'MongoDB me collection ke andar kya hota hai?',
        options: [
            'Rows',
            'Documents',
            'Tables',
            'Schemas'
        ],
        answer: 'Documents'
    },
    {
        question: 'MongoDB me primary key ko kya kehte hain?',
        options: [
            'id',
            '_id',
            'primaryKey',
            'key'
        ],
        answer: '_id'
    },
    {
        question: 'MongoDB me data insert karne ke liye kaunsa method use hota hai?',
        options: [
            'add()',
            'insertOne()',
            'push()',
            'create()'
        ],
        answer: 'insertOne()'
    },
    {
        question: 'MongoDB me data find karne ke liye kya use hota hai?',
        options: [
            'search()',
            'get()',
            'find()',
            'select()'
        ],
        answer: 'find()'
    },
    {
        question: 'MongoDB me data update karne ke liye kya use hota hai?',
        options: [
            'updateOne()',
            'modify()',
            'change()',
            'edit()'
        ],
        answer: 'updateOne()'
    },
    {
        question: 'MongoDB me data delete karne ke liye kya use hota hai?',
        options: [
            'removeOne()',
            'deleteOne()',
            'clear()',
            'dropData()'
        ],
        answer: 'deleteOne()'
    },
    {
        question: 'MongoDB me schema flexible hota hai ya fixed?',
        options: [
            'Fixed',
            'Flexible',
            'Static',
            'None'
        ],
        answer: 'Flexible'
    }
];
// leftsideBar Resize
let leftsideBar = document.getElementById('leftsideBar')
let rightItems = document.getElementById('rightItems')
let items = document.getElementById('items')

function heightLeftBarHandle(){
    leftsideBar.style.height = `${window.innerHeight-50}px`
console.log(window.innerHeight);

}
heightLeftBarHandle()
window.addEventListener('resize' , heightLeftBarHandle)

let toggle = true
function setting(){
    let settings = document.getElementById('settings')
if(toggle){
    settings.innerHTML = `
    <div class="settings">
      <p> Notifications <i class="fa-regular fa-bell"></i></p>
           <p> <span class="pic">Profile <img src=${CurrentUsesr.imgUrl}></span></p>
            <span>${CurrentUsesr.usersName}</span>
        <button onclick='logOutPro()'>Logout</button>
    </div>
    `
    toggle = false
}
else{
    settings.innerHTML = ''
    toggle = true
}
}

// function toggleMenu() start

function toggleMenu() {
 leftsideBar.classList.toggle('toggle')   
 rightItems.classList.toggle('setToggle')   
}

// start get id 

function logOutPro(){
   localStorage.setItem('loggedIn' , 'false')
   location.href = './index.html'
   localStorage.removeItem('CurrentUsesr')
}

function homeFunction(){
    let homes = `
        <div class="items" id="items">
        <div class="box">
            <div class="itemsBox">
                <i class="fa-brands fa-html5"></i>
            </div>
            <div class="itemsBox">
                <h3>HTML Quiz</h3>
                <button id='btnQuiz' onclick="quizApp('html'); timeCounter()">Start Now</button>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
                <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div class="itemsBox">
                <h3>Css Quiz</h3>
                <button onclick="quizApp('css'); timeCounter()">Start Now</button>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
<i class="fa-brands fa-square-js"></i>
            </div>
            <div class="itemsBox">
                <h3>JavaScript Quiz</h3>
                 <button onclick="quizApp('JavaScript') ; timeCounter()">Start Now</button>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
                <i class="fa-brands fa-react"></i>
            </div>
            <div class="itemsBox">

                <h3>React js Quiz</h3>
                  <button onclick="quizApp('react') ; timeCounter()">Start Now</button>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
                <i class="fa-brands fa-node"></i>
            </div>
            <div class="itemsBox">
                <h3>Node Js Quiz</h3>
                <button onclick="quizApp('node') ; timeCounter()">Start Now</button>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
               <i class="fa-solid fa-database"></i>
            </div>
            <div class="itemsBox">
                <h3>Mongo DB Quiz</h3>
               <button onclick="quizApp('mongo') ; timeCounter()">Start Now</button>
            </div>
        </div>
        </div>
    </div>

    
    `
rightItems.innerHTML = homes
leftImages.src = CurrentUsesr.imgUrl
leftProName.innerHTML = CurrentUsesr.usersName
}
homeFunction()


let currentQues = 0;
let quizNameGlobal = "";
let currentIndex = ''
let timeStart = ''
   let minute = 2;
let second = 59;
let score = 0

// Start quiz
function quizApp(NameQuiz) {
 


    quizNameGlobal = NameQuiz; // save for next button
if(NameQuiz === 'html'){
    currentIndex = html
    let quizContainer = `
    <div class="quizApp">
        <div class="box1">
            <h1>${NameQuiz.charAt(0).toUpperCase() + NameQuiz.slice(1)} Quiz</h1>
            <h2 id='h2'></h2>
        </div>

        <div class="box1">
            <h4>${html[currentQues].question}</h4>
            <ul>
                ${html[currentQues].options.map((opt) => `
                    <li onclick="selectOption(this)">
                        ${opt}
                    </li>
                `).join('')}
            </ul>

            <div class="bottom">
                <p>${currentQues + 1}/${html.length}</p>
                <button id='next' onclick="nextBtn()">Next</button>
            </div>
        </div>
    </div>
    `;

    rightItems.innerHTML = quizContainer;
}
if(NameQuiz === 'css'){
    currentIndex = css
    let quizContainer = `
    <div class="quizApp">
        <div class="box1">
            <h1>${NameQuiz.charAt(0).toUpperCase() + NameQuiz.slice(1)} Quiz</h1>
          <h2 id='h2'></h2>
        </div>

        <div class="box1">
            <h4>${css[currentQues].question}</h4>
            <ul>
                ${css[currentQues].options.map((opt) => `
                    <li onclick="selectOption(this)">
                        ${opt}
                    </li>
                `).join('')}
            </ul>

            <div class="bottom">
                <p>${currentQues + 1}/${css.length}</p>
                <button id='next' onclick="nextBtn()">Next</button>
            </div>
        </div>
    </div>
    `;

    rightItems.innerHTML = quizContainer;
}
if(NameQuiz === 'JavaScript'){
    currentIndex = JavaScript
    let quizContainer = `
    <div class="quizApp">
        <div class="box1">
            <h1>${NameQuiz.charAt(0).toUpperCase() + NameQuiz.slice(1)} Quiz</h1>
           <h2 id='h2'></h2>
        </div>

        <div class="box1">
            <h4>${JavaScript[currentQues].question}</h4>
            <ul>
                ${JavaScript[currentQues].options.map((opt) => `
                    <li onclick="selectOption(this)">
                        ${opt}
                    </li>
                `).join('')}
            </ul>

            <div class="bottom">
                <p>${currentQues + 1}/${JavaScript.length}</p>
                <button id='next' onclick="nextBtn()">Next</button>
            </div>
        </div>
    </div>
    `;

    rightItems.innerHTML = quizContainer;
}
if(NameQuiz === 'react'){
    currentIndex = react
    let quizContainer = `
    <div class="quizApp">
        <div class="box1">
            <h1>${NameQuiz.charAt(0).toUpperCase() + NameQuiz.slice(1)} Quiz</h1>
            <h2 id='h2'></h2>
        </div>

        <div class="box1">
            <h4>${react[currentQues].question}</h4>
            <ul>
                ${react[currentQues].options.map((opt) => `
                    <li onclick="selectOption(this)">
                        ${opt}
                    </li>
                `).join('')}
            </ul>

            <div class="bottom">
                <p>${currentQues + 1}/${react.length}</p>
                <button id='next' onclick="nextBtn()">Next</button>
            </div>
        </div>
    </div>
    `;

    rightItems.innerHTML = quizContainer;
}
if(NameQuiz === 'node'){
    currentIndex = node
    let quizContainer = `
    <div class="quizApp">
        <div class="box1">
            <h1>${NameQuiz.charAt(0).toUpperCase() + NameQuiz.slice(1)} Quiz</h1>
           <h2 id='h2'></h2>
        </div>

        <div class="box1">
            <h4>${node[currentQues].question}</h4>
            <ul>
                ${node[currentQues].options.map((opt) => `
                    <li onclick="selectOption(this)">
                        ${opt}
                    </li>
                `).join('')}
            </ul>

            <div class="bottom">
                <p>${currentQues + 1}/${node.length}</p>
                <button id='next' onclick="nextBtn()">Next</button>
            </div>
        </div>
    </div>
    `;

    rightItems.innerHTML = quizContainer;
}
if(NameQuiz === 'mongo'){
    currentIndex = mongo
    let quizContainer = `
    <div class="quizApp">
        <div class="box1">
            <h1>${NameQuiz.charAt(0).toUpperCase() + NameQuiz.slice(1)} Quiz</h1>
           <h2 id='h2'></h2>
        </div>

        <div class="box1">
            <h4>${mongo[currentQues].question}</h4>
            <ul>
                ${mongo[currentQues].options.map((opt) => `
                    <li onclick="selectOption(this)">
                        ${opt}
                    </li>
                `).join('')}
            </ul>

            <div class="bottom">
                <p>${currentQues + 1}/${mongo.length}</p>
                <button id='next' onclick="nextBtn()">Next</button>
            </div>
        </div>
    </div>
    `;

    rightItems.innerHTML = quizContainer;
}
    let next = document.getElementById('next')
    next.style.pointerEvents = 'none'
next.style.opacity = '0.4'

}
function result(){
    rightItems.innerHTML = `<h2>${score < 50 ? 'Are you faild your Marks' + " " + score : 'Are you Passed your Marks' + " " + score}</h2>   <br> <button class='btn' onclick='restartQuiz()'>Restart Quiz </button>`;
     clearInterval(timeStart);
let studentMarks = {
    Name : CurrentUsesr.usersName,
    Class : CurrentUsesr.checkClass,
    gender : CurrentUsesr.usersgender,
    Marks : score,
    Subject : quizNameGlobal , 
}
markAllStu.push(studentMarks)
localStorage.setItem('markAllStu' , JSON.stringify(markAllStu))
score = 0
currentQues  = 0
second = 59
minute  = 2
    }
// Next button
function nextBtn() {
    if (currentQues < node.length - 1) {
        currentQues++;
        quizApp(quizNameGlobal);
    } else {
     
    result()
    }
}

function timeCounter (){

    timeStart = setInterval(() => {
        
    if (second === 0) {
        if (minute === 0) {
            clearInterval(timeStart);
            console.log("Time Up ⏰");
result()
            return;
        }
        minute--;
        second = 59;
    } else {
        second--;
    }
    
    let h2 = document.getElementById('h2')
    if(h2){
        
        h2.innerHTML =  `${'0'+minute}:${second < 10 ? '0'+second : second} `;
    }
    
}, 1000);
}

// restart quiz

function restartQuiz(){
    currentQues = 0
    quizApp(quizNameGlobal)
 minute = 2;
 second = 59;

    timeCounter()
}
// Option select
function selectOption(option) {
    let getAbba = option
    let usersAnswer = option.innerText
let ul = getAbba.parentNode.children;
for(let i = 0; i < ul.length ; i++){
    ul[i].style.pointerEvents = 'none'
    let next = document.getElementById('next')
    next.style.pointerEvents = 'auto'
next.style.opacity = '1'
    getAbba.style.opacity = '0.4'
}

if(currentIndex[currentQues].answer === usersAnswer){
 score +=10
 
   
}



}

// goto home Component

function home(){
  homeFunction()
  toggleMenu()
}
let allStudentGetsForLocalStorage = JSON.parse(localStorage.getItem('usersData'))


// create all Student

    function allStudent (){
        rightItems.innerHTML = ''
        let div = document.createElement('div')
        div.className = 'class-mate'
        
       for(let getData of allStudentGetsForLocalStorage ){
        console.log(getData);
        
        if(CurrentUsesr.checkClass == getData.checkClass
             &&  getData.checkTeacherStudent !== 'teacher' 
            && CurrentUsesr.usersName !==  getData.usersName){
console.log(getData);
div.innerHTML += '<h2>Students Information</h2>'
            div.innerHTML += `
             <div class="table-container">
            

            <table>
            <thead>
            <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            </tr>
            </thead>
        <tbody>
            <tr>
            <td>${getData.usersEmail.toLowerCase()}</td>
            <td>${getData.usersName}</td>
            <td>${getData.usersgender}</td>
            <td>${getData.checkClass}</td>
            </tr>
            
            
            </tbody>
            </table>
            </div>
            `
            }
            }
            console.log('working');
            rightItems.appendChild(div)
            toggleMenu()
            }

            // see your teacher functions

            function allTeacher (){
                 rightItems.innerHTML = ''
        let div = document.createElement('div')
        div.className = 'class-mate'
        div.innerHTML += '<h2>Your Teacher Information</h2>'
       for(let getData of allStudentGetsForLocalStorage ){
        if(getData.checkClass ===   CurrentUsesr.checkClass  && getData.checkTeacherStudent === 'teacher' ){

            div.innerHTML += `
            
    <div class="table-container">
            <table>
            <thead>
            <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            </tr>
            </thead>
        <tbody>
            <tr>
            <td>${getData.usersEmail.toLowerCase()}</td>
            <td>${getData.usersName}</td>
            <td>${getData.usersgender}</td>
            <td>${getData.checkClass}</td>
            </tr>
            
            
            </tbody>
            </table>
            </div>
            `
            }
            }
            console.log('working');
            rightItems.append(div)
            toggleMenu()
            }


            // start fees feesDetails
  function feesDetails() {
    console.log('working');

 
    rightItems.innerHTML = "";
    items.innerHTML = "";

    let Fees = JSON.parse(localStorage.getItem("Fees")) || []; // ✅ safe load

    let THDetail = ['ID', 'Name', 'Class', 'Amount'];

    let div = document.createElement('div');
    div.className = "table-container";

    let table = document.createElement('table');

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    for (let i = 0; i < THDetail.length; i++) {
        let th = document.createElement('th');
        th.textContent = THDetail[i];
        tr.append(th);
    }

    thead.append(tr);
    table.append(thead);

    let tbody = document.createElement('tbody');

    for (let renderFees of Fees) {
    if(renderFees.Name === CurrentUsesr.usersName){

        let tr = document.createElement('tr');
        
        tr.innerHTML = `
        <td>${renderFees.ID}</td>
        <td>${renderFees.Name}</td>
        <td>${renderFees.Class}</td>
        <td>${renderFees.Amount}</td>
        `;

        tbody.append(tr);
    }
}
    
    table.append(tbody);
    
    let heading = document.createElement('h2');
    heading.textContent = "Student Fees Details";
    let button = `<button onclick='Generate()'>Generate Voucher </button>`
    items.append(heading);
    items.innerHTML +=button
    div.append(table);
    items.append(div);
rightItems.append(items)
    
      
    
}
function Generate() {

    let idGene = '01010' + Math.floor(Math.random() * 1000000);

    let GenerateVoucherObj = {
        Name: CurrentUsesr.usersName,
        Class: CurrentUsesr.checkClass,
        ID: idGene,
        Amount: 1000,
    };

    Fees.push(GenerateVoucherObj);

    // ✅ Correct storage
    localStorage.setItem('Fees', JSON.stringify(Fees));

    console.log(GenerateVoucherObj);

    // ✅ UI refresh
    feesDetails();
}