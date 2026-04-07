let loggedIn = localStorage.getItem('loggedIn');

if(loggedIn === 'false'){

    location.href = '../index.html'
}
let CurrentUsesr  = JSON.parse(localStorage.getItem('CurrentUsesr') )
let markAllStu  = JSON.parse(localStorage.getItem('markAllStu') )
let allStudentGetsForLocalStorage = JSON.parse(localStorage.getItem('usersData'))
let pr = document.getElementById('pr')
let profile = document.getElementById('profile')
let navImage = document.getElementById('navImage')
let leftImage = document.getElementById('leftImage')


// resize LiftSide bar

let leftsideBar = document.getElementById('leftsideBar')
let rightItems = document.getElementById('rightItems')
let items = document.getElementById('items')

function heightLeftBarHandle(){
    leftsideBar.style.height = `${window.innerHeight-50}px`
console.log(window.innerHeight);

}
heightLeftBarHandle()
window.addEventListener('resize' , heightLeftBarHandle)

// render image profile 

function renderImage(){
    let leftImage = document.getElementById('leftImage')
    let leftName = document.getElementById('leftName')
    leftImage.src = CurrentUsesr.imgUrl
    leftName.innerHTML = CurrentUsesr.usersName
}
renderImage()
let toggle = true
function setting(){
    let settings = document.getElementById('settings')
if(toggle){
    settings.innerHTML = `
    <div class="settings">
      <p> Notifications <i class="fa-regular fa-bell"></i></p>
           <p> <span class="pic">Profile <img src=${CurrentUsesr.imgUrl}></span></p>
            <span>${CurrentUsesr.usersName}</span>
        <button onclick='logOutDash()'>Logout</button>
    </div>
    `
    toggle = false
}
else{
    settings.innerHTML = ''
    toggle = true
}
}
// end

// logout Function

function logOutDash(){
    localStorage.setItem('adminLoggedIn' , 'false')
        location.href = '../index.html'
}

// end


// function toggleMenu() start

function toggleMenu() {
    console.log('Working');
 leftsideBar.classList.toggle('toggle')   
 rightItems.classList.toggle('setToggle')   
}

// create allTeacher function


    function allStudentMark(){

    items.innerHTML = "";

    let THDetail = ['Name', 'Subject', 'Class', 'Percentage'];

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
    if(markAllStu){

    

    for (let renderFees of markAllStu) {
       
if(renderFees.Class === CurrentUsesr.checkClass){


        let tr = document.createElement('tr');

        tr.innerHTML = `
                    <td>${renderFees.Name}</td>
                    <td>${renderFees.Subject}</td>
                    <td>${renderFees.Class}</td>
                    <td>${renderFees.Marks}%</td>
                `;

        tbody.append(tr);
    }
}
}    
table.append(tbody);

    let heading = document.createElement('h2');
    heading.textContent = "Student Result Details";

    items.append(heading);
    div.append(table)
    items.append(div);
rightItems.append(items)
    toggleMenu();
    }

// create all Student

    function allStudent (){
items.innerHTML = ''
        let THDetail = ['Eamil', 'Name', 'Gender', 'Class'];

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

    for (let renderStudent of allStudentGetsForLocalStorage) {
       
if(renderStudent.checkClass === CurrentUsesr.checkClass && renderStudent.checkTeacherStudent !== 'teacher'){


        let tr = document.createElement('tr');

        tr.innerHTML = `
                    <td>${renderStudent.usersEmail}</td>
                    <td>${renderStudent.usersName}</td>
                    <td>${renderStudent.usersgender}</td>
                    <td>${renderStudent.checkClass}</td>
                `;

        tbody.append(tr);
    }
}
    table.append(tbody);

    let heading = document.createElement('h2');
    heading.textContent = "Student Details";

    items.append(heading);
    div.append(table)
    items.append(div);
rightItems.append(items)
        toggleMenu()

    }

    function home(){

    items.innerHTML = `
     
    
    <div class="card-container">

        <div class="card card1">
            <h3> Class</h3>
            <p>2</p>
        </div>

        <div class="card card2">
            <h3>Total Students</h3>
            <p>350</p>
        </div>

        <div class="card card3">
            <h3>Today Present</h3>
            <p>320</p>
        </div>

    </div>

    `
    toggleMenu()
}
home()