// Document Ready Function ...  Triggered when the document is ready to be manipulated
(function() {
    $('#nav').hide();
    $('.main').hide();
})();

// .....
// Set the home page
// ....
const homePage = $('#nav').show();


// .....
// Functions for showing / hiding page elements 
// .....

const showView = function() {
    $('.main').show();
    $('.add').hide();
    $('.verify').hide();
    $('.nav-link').removeClass('active');
    $('#viewBtn').addClass('active')
}
const showAdd = function() {
    $('.nav-link').removeClass('active');
    $('#addBtn').addClass('active');
    $('.main').show();
    $('.add').show();
    $('.verify').hide();
}
const showDelete = function() {
    $('.nav-link').removeClass('active');
    $('#deleteBtn').addClass('active');
    $('.main').show();
    $('.add').hide();
    $('.verify').hide();
}
const showUpdate = function() {
    $('.nav-link').removeClass('active');
    $('#updateBtn').addClass('active');
    $('.main').show();
    $('.add').hide();
    $('.verify').hide();
}
const showVerify = function() {
    $('.nav-link').removeClass('active');
    $('#verifyBtn').addClass('active');
    $('.main').show();
    $('.add').hide();
    $('.verify').show();
}


// .....
// Event Listeners for Nav Bar
// .....
// Add event listener to each button to show respective page elements when clicked
$('#viewBtn').on('click', showView)
$('#addBtn').on('click', showAdd)
$('#deleteBtn').on('click', showDelete)
$('#updateBtn').on('click', showUpdate)
$('#verifyBtn').on('click', showVerify)



// Function that takes an object with three properties and creates the HTML for a *Bootstrap* card that will be in a card deck
const cardHTMLMaker = function(contactObj) {
    const cardHTML = `<div class="card col-10 col-lg-5 col-md-8 m-3 border-0 float-left shadow p-3 bg-white rounded">
 <div class="card-body">
 <h5 class="card-title">${contactObj.name}</h5>
 <p class="card-text"><strong>Office Number: </strong>${contactObj.officeNum}</p>
 <p class="card-text"><strong>Phone Number: </strong>${contactObj.phoneNum}</p>
 </div>
</div>`;
    return cardHTML
}

// For each object in the employee list, run cardHTMLMaker and append the empList div in index
const appendList = function(employeeList) {
    for (i = 0; i < employeeList.length; i++) {
    $('.empList').append( cardHTMLMaker( employeeList[i] ) );
    };
}

appendList(employeeList)


// Create a function that takes in a string like "updated the contact" and appends the 
// Main Div in Index HTML to alert "Great! You successfully updated the contact"
// Make alert dismissible and fade out
const successAlert = function(action) {
    $('.main').prepend( `<div class="alert alert-success alert-dismissible fade in">
 <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
 <strong>Great!</strong> You successfully ${action}.
</div>`);
}

// Create the input form to Add new contacts to the database
// Take in Full Name - Office Num - Phone Number then click "Add" to finish and see result
const showAddForm = function() {
    $('.add').append(`<form id="addForm">
 <div class="form-row">
      <div class="col">
        <input type="text" id="addName" class="form-control" placeholder="Full Name">
      </div>
      <div class="col">
        <input type="text" id="addOfficeNum" class="form-control" placeholder="Office Num">
      </div>
      <div class="col">
        <input type="text" id="addPhoneNum" class="form-control" placeholder="Phone Number">
      </div>
      <button type="submit" id="addSubmitBtn" class="btn btn-primary">Add</button>
 </div>
</form>`);
};

showAddForm();

// Create doAdd function to create a new employee and append the employeeList 
const doAdd = function() {
    console.log(document.getElementById('#addName'));
    console.log(document.getElementById('addOfficeNum'));
    console.log(document.getElementById('addPhoneNum'));
    // let name = document.getElementById('#addName').value;
    // let officeNum = document.getElementById('#addOfficeNum').value;
    // let phoneNum = document.getElementById('#addPhoneNum').value;
    // let object = {name: name, officeNum: officeNum, phoneNum: phoneNum,};
    // appendList(object);
    successAlert('added a new contact.');
    showView();
}


// add event listener to "Add" Button for add input form
// $('#addSubmitBtn').on('click', doAdd)