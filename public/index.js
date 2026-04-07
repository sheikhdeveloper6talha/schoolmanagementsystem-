// get container indexedDB.html file
let container = document.getElementById('container');
let mainContainer = document.getElementById('mainContainer');
let dataBase = JSON.parse(localStorage.getItem('usersData')) || []

function heightLeftBarHandle(){
    
    if(window.innerWidth > 780){
        mainContainer.style.minHeight = `${450}px`
        
    }else{
mainContainer.style.height = `${window.innerHeight}px`
        console.log(mainContainer.offsetHeight);
    }
   
}
heightLeftBarHandle()
window.addEventListener('resize' , heightLeftBarHandle)
// y function front end me dynamic render kar rha hai Ui ko  
function StudentCreateAccount() {
    let StudentsFrom = `
 <div class="btnsStudentAdmin">
            <button onclick=StudentLogin()>Student/Teacher</button>
            <button onclick=adminLogIn()>Admin Login</button>
        </div>
        <h3>Welcome Students <br> Create Accounts</h3>
        <span id='errorShow'> </span>
        <div class="inputs">
            <input type="text" placeholder="Enter Your Name" id='createName'>
        </div>
        <div class="inputs">
            <input type="email" placeholder="Enter Your email" id='createEmail'>
        </div>
<div class="inputs">
    <select onchange="selectTS(this.value)">
        <option value="">Select</option>
        <option value="teacher">Teachers</option>
        <option value="student">Students</option>
    </select>
</div>        <div class="inputs">
             <select  onchange="selectClass(this.value)" id="select">
                <option value="">Select</option>
                
            </select>
        </div>
        <div class="inputs">
<div class="male">
                <label for="gender">Male</label>
                <input value='male' name='gender' type="radio" id='male'>
            </div>
<div class="male"> 
                <label for="gender">Female</label>
                <input value='female' name='gender' type="radio" id='female'>
            </div>


        </div>
        <div class="inputs">
            <input onfocus="checkPassword(this , 'inFocus')" 
 onfocusout="checkPassword(this , 'outFocus')"
            type="password" placeholder="Enter Your password" id='createPassword'>
        </div>
           <div class="inputs">
            <input type="text" placeholder="Enter Your image URL" id='imgUrl'>
        </div>
        <div class="btns">
            <button onclick='CreateAccount()'>Create Account</button>
            <button onclick=goToLogin()>Student/Teacher</button>
        </div>

`
    container.innerHTML = StudentsFrom
    let select = document.getElementById('select')
    for (let i = 1; i <= 10; i++) {
        select.innerHTML += `
<option value="Class${i}">Class ${i}</option>
`
    }
}

StudentCreateAccount()

// y function front end me dynamic render kar rha hai Ui ko  
function StudentLogin() {
    let StudentsFrom = `
 <div class="btnsStudentAdmin">
            <button onclick=StudentLogin()>Student/Teacher</button>
            <button onclick=adminLogIn()>Admin Login</button>
        </div>
        <h3>Welcome Student / Teachers <br> Login</h3>
        <span id='loginError'></span>
        <div class="inputs">
            <input type="email" placeholder="Enter Your email" id='loginEmail'>
        </div>
         <div class="inputs">
             <select onchange="logInSelect(this.value)" id="">
                <option value="">Select</option>
                <option value="teacher">Teachers</option>
                <option value="student">Students</option>
            </select>
        </div>
        <div class="inputs">
            <input
            onfocus="checkPassword(this , 'inFocus')" 
 onfocusout="checkPassword(this , 'outFocus')"
            type="password" placeholder="Enter Your password" id='loginPassword'>
        </div>
        <div class="btns">
        <button onclick='logInUsers()'>Student/Teacher</button>
            <button onclick=goToCreate()>Create Account</button>
        </div>

`
    container.innerHTML = StudentsFrom

}
// y login ke button p click pe StudentLogin ko call kar rhai dynamic UI render huga
function goToLogin() {
    StudentLogin()
}
// y login ke button p click pe StudentCreateAccount ko call kar rhai dynamic UI render huga

function goToCreate() {
    StudentCreateAccount()
}


// y function front end me dynamic render kar rha hai Ui ko  admin

function adminLogIn() {
    let admin = `
 <div class="btnsStudentAdmin">
            <button onclick=StudentLogin()>Student Login</button>
            <button onclick=adminLogIn()>Admin Login</button>
        </div>
        <h3>Welcome Admin <br> Login</h3>
        <span id='adminError'></span>
        <div class="inputs">
            <input type="email" placeholder="Enter Your email" id='adminEmail'>
        </div>
        <div class="inputs">
            <input onfocus="checkPassword(this , 'inFocus')" 
 onfocusout="checkPassword(this , 'outFocus')"
            type="password" placeholder="Enter Your password" id='adminPassword'>
        </div>
        <div class="btns">
            <button onclick='logInAdmin()'>Admin LogIn</button>
        </div>

`
    container.innerHTML = admin

}

// y password per focus pe show huga or focusout pe hide
function checkPassword(elem, check) {

    check === 'inFocus' ? elem.type = 'text' : elem.type = 'password'
}


// select Teacher & Student
let checkTeacherStudent  = ''
function selectTS(val) {
    console.log(val);
checkTeacherStudent = val
}
// end 

// selectClass check function
let checkClass = ''
function selectClass(valueClass){
console.log(valueClass);
checkClass = valueClass
}

// start create account Function With Validations


function CreateAccount() {
    let createName = document.getElementById('createName')
    let createEmail = document.getElementById('createEmail')
    let createPassword = document.getElementById('createPassword')
    let errorShow = document.getElementById('errorShow')
    let Male = document.getElementById('male')
    let Female = document.getElementById('female')
    let imgUrl = document.getElementById('imgUrl')
    let findGender = Male.checked ? 'male' : Female.checked ? 'female' : ''
    if (createName.value === '' || createEmail.value === ''
        || createPassword.value === '' || Male.value === ''
        || Female.value === '' || checkTeacherStudent === '' || checkClass === '' || imgUrl.value === '') {
        return errorShow.innerHTML = 'Please Fill This From'
    }
    if (createName.value.length < 2) {
        return errorShow.innerHTML = 'Name Characters Must Be 3 letter'
    }
    if (createName.value.charAt(0) !== createName.value.charAt(0).toUpperCase()) {
        return errorShow.innerHTML = 'Name First Characters Must Be Capital'
    }
    if (!createEmail.value.includes('@')) {
        return errorShow.innerHTML = 'Missing @ Check Please'
    }
    if (!createEmail.value.includes('com')) {
        return errorShow.innerHTML = 'Missing com Check Please'
    }
    if (!createEmail.value.includes('.')) {
        return errorShow.innerHTML = 'Missing dots Check Please'
    }
    if (createPassword.value.length < 8) {
        return errorShow.innerHTML = 'Password Characters Must Be 8 '
    }
    if (createPassword.value.charAt(0) !== createPassword.value.charAt(0).toUpperCase()) {
        return errorShow.innerHTML = 'Password First Characters Must Be Capital '
    }
    if(!imgUrl.value.includes('https')){
        return errorShow.innerHTML = 'Please Absoulte image link '
    }
    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].usersEmail === createEmail.value) {
            return errorShow.innerHTML = 'Users Already Exist'
        }

    }
    errorShow.innerHTML = ''
    let usersObj = {
        usersName: createName.value,
        usersEmail: createEmail.value,
        usersgender: findGender,
        usersPassword: createPassword.value,
        checkTeacherStudent : checkTeacherStudent, 
        currentUsers: false,
        checkClass : checkClass,
        imgUrl : imgUrl.value
    }
    dataBase.push(usersObj)
    localStorage.setItem('usersData', JSON.stringify(dataBase))
    loaderDiv()
    setTimeout(() => {
        StudentLogin()
    }, 5000)

}

// create loader functions


function loaderDiv() {
    container.innerHTML = `
     <div class="loader">
        <div class="span1"></div>
        <div class="span2"></div>
        <div class="span3"></div>
    </div>
    
    `
}

//  loginSelect Teacher Student dropdwon List
let logInCheckFinal = ''
function logInSelect(checkTS){
    console.log(checkTS)
    logInCheckFinal = checkTS
} 
// login function 


function logInUsers() {
    let loginEmail = document.getElementById('loginEmail')
    let loginPassword = document.getElementById('loginPassword')
    let loginError = document.getElementById('loginError')
    if (loginEmail.value === '' || loginPassword.value === '' || logInCheckFinal === '') {
        return loginError.innerHTML = 'Fill This Inputs'
    }
    let UsersFound = false
    for (let i = 0; i < dataBase.length; i++) {

        if (dataBase[i].usersEmail === loginEmail.value) {
            console.log(dataBase[i])
            localStorage.setItem('CurrentUsesr', JSON.stringify(dataBase[i]))

            if (dataBase[i].usersEmail !== loginEmail.value) {
                return loginError.innerHTML = 'Wrong Email Type'
            }
            if (dataBase[i].usersPassword !== loginPassword.value) {
                return loginError.innerHTML = 'Wrong Password Type'
            }
          
        }

        if (dataBase[i].usersEmail === loginEmail.value && dataBase[i].usersPassword === loginPassword.value) {
            if(logInCheckFinal === dataBase[i].checkTeacherStudent &&  dataBase[i].checkTeacherStudent === 'student'){

                loginError.innerHTML = ''
                loaderDiv()
                localStorage.setItem('loggedIn', 'true')
                setTimeout(() => {
                    location.href = './quiz.html'
                    
                }, 4000)
                return
            }
            if(logInCheckFinal === dataBase[i].checkTeacherStudent &&  dataBase[i].checkTeacherStudent === 'teacher'){

                loginError.innerHTML = ''
                loaderDiv()
                localStorage.setItem('loggedIn', 'true')
                setTimeout(() => {
                    location.href = './teacher/teacher.html'
                    
                }, 4000)
                return
            }
        }
    }
    if (!UsersFound) {
        loginError.innerHTML = 'Users Not Found'
    }

}

// start admin check and auth and function create


function logInAdmin() {
    let adminEmail = document.getElementById('adminEmail')
    let adminPassword = document.getElementById('adminPassword')
    let adminError = document.getElementById('adminError')
    if (adminEmail.value === '' || adminPassword.value === '') {
        return adminError.innerHTML = 'Please Fill Inputs'
    }
    if (adminEmail.value !== 'admin@gmail.com') {
        return adminError.innerHTML = 'Incorrect Email'
    }
    if (adminPassword.value !== 'admin12345') {
        return adminError.innerHTML = 'Incorrect Password'
    }
    adminError.innerHTML = ''
    localStorage.setItem('adminLoggedIn', 'true')
    loaderDiv()
    setTimeout(() => {
        location.href = './dashbords/dashbord.html'
    }, 3000)
}