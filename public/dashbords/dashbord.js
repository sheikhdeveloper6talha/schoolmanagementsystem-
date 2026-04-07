let adminLoggedIn = localStorage.getItem('adminLoggedIn')
let Fees = JSON.parse(localStorage.getItem('Fees'))
if (adminLoggedIn !== 'true') {
    location.href = '../index.html'
}

let leftsideBar = document.getElementById('leftsideBar')
let rightItems = document.getElementById('rightItems')
let items = document.getElementById('items')

function heightLeftBarHandle() {
    leftsideBar.style.height = `${window.innerHeight - 50}px`


}
heightLeftBarHandle()
window.addEventListener('resize', heightLeftBarHandle)

let toggle = true
function setting() {
    let settings = document.getElementById('settings')
    if (toggle) {
        settings.innerHTML = `
    <div class="settings">
      <p> Notifications <i class="fa-regular fa-bell"></i></p>
           <p> <span class="pic">Profile <img src="../images/profi.jpg" alt=""></span></p>
            <span>Talha Sheikh</span>
        <button onclick='logOutDash()'>Logout</button>
    </div>
    `
        toggle = false
    }
    else {
        settings.innerHTML = ''
        toggle = true
    }
}
function logOutDash() {
    localStorage.setItem('adminLoggedIn', 'false')
    location.href = '../../index.html'
}

// function toggleMenu() start

function toggleMenu() {

    leftsideBar.classList.toggle('toggle')
    rightItems.classList.toggle('setToggle')
}


// create home function


function home() {

    items.innerHTML = `
     <div class="box">
            <div class="itemsBox">
                <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="itemsBox">
                <h3>Totle Students</h3>
                <p>500</p>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
                <i class="fa-solid fa-person-chalkboard"></i>
            </div>
            <div class="itemsBox">
                <h3>Totle Teacher</h3>
                <p>10</p>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
<i class="fa-brands fa-pagelines"></i>
            </div>
            <div class="itemsBox">
                <h3>Totle Fees Collect</h3>
                <p>243,000</p>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
                <i class="fa-brands fa-amazon-pay"></i>
            </div>
            <div class="itemsBox">

                <h3>Totle Teacher  Payments</h3>
                <p>105,000</p>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
                <i class="fa-solid fa-user-graduate"></i>
            </div>
            <div class="itemsBox">
                <h3>Totle Students  Present</h3>
                <p>433</p>
            </div>
        </div>
        <div class="box">
            <div class="itemsBox">
                <i class="fa-brands fa-google-wallet"></i>
            </div>
            <div class="itemsBox">
                <h3>Wallet</h3>
                <p>544,000</p>
            </div>
        </div>
    
    `
    toggleMenu()
}
home()


// create all Student
let allStudentGetsForLocalStorage = JSON.parse(localStorage.getItem('usersData'))

function allStudent() {
    items.innerHTML = ""
    items.innerHTML += ` <h2>Students Information</h2>`

    for (let getStudent of allStudentGetsForLocalStorage) {
        if (getStudent.checkTeacherStudent !== 'teacher') {

            items.innerHTML += `
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
            <td>${getStudent.usersEmail.toLowerCase()}</td>
            <td>${getStudent.usersName}</td>
            <td>${getStudent.usersgender}</td>
            <td>${getStudent.checkClass}</td>
            </tr>
            
            
            </tbody>
            </table>
            </div>
            `
        }
    }
    toggleMenu()
}
// create allTeacher function

function allTeacher() {
    items.innerHTML = ""
    items.innerHTML += ` <h2>Teacher Information</h2>`

    for (let getStudent of allStudentGetsForLocalStorage) {
        if (getStudent.checkTeacherStudent === 'teacher') {

            items.innerHTML += `
            
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
            <td>${getStudent.usersEmail.toLowerCase()}</td>
            <td>${getStudent.usersName}</td>
            <td>${getStudent.usersgender}</td>
            <td>${getStudent.checkClass}</td>
            </tr>
            
            
            </tbody>
            </table>
            </div>
            `
        }
    }
    toggleMenu()
}


// searchBOX function
function searchBOX(e) {
    items.innerHTML = "";

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
if(e.value.toLowerCase() === 'all') return feesDetails()
    
    let filters = Fees.filter(eve => e.value.toLowerCase().includes(eve.Class.toLowerCase()))
    for (let showFilter in filters) {
        console.log(filters[showFilter]);
        let tr = document.createElement('tr');

        tr.innerHTML = `
                    <td>${filters[showFilter].ID}</td>
                    <td>${filters[showFilter].Name}</td>
                    <td>${filters[showFilter].Class}</td>
                    <td>${filters[showFilter].Amount}</td>
                `;

        tbody.append(tr);
    }
    table.append(tbody);

    let heading = document.createElement('h2');
    heading.textContent = "Student Fees Details";

    items.append(heading);
    div.append(table)
    items.append(div);
}

// create student fees details


function feesDetails() {
    items.innerHTML = "";

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
        console.log(Fees);

        let tr = document.createElement('tr');

        tr.innerHTML = `
                    <td>${renderFees.ID}</td>
                    <td>${renderFees.Name}</td>
                    <td>${renderFees.Class}</td>
                    <td>${renderFees.Amount}</td>
                `;

        tbody.append(tr);
    }

    table.append(tbody);

    let heading = document.createElement('h2');
    heading.textContent = "Student Fees Details";

    items.append(heading);
    div.append(table)
    items.append(div);

    toggleMenu();
}

