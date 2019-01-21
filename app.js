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
    $('.nav-link').removeClass('active');
    $('#viewBtn').addClass('active')
}
const showAdd = function() {
    $('.nav-link').removeClass('active');
    $('#addBtn').addClass('active');
}
const showDelete = function() {
    $('.nav-link').removeClass('active');
    $('#deleteBtn').addClass('active');
}
const showUpdate = function() {
    $('.nav-link').removeClass('active');
    $('#updateBtn').addClass('active');
}
const showVerify = function() {
    $('.nav-link').removeClass('active');
    $('#verifyBtn').addClass('active');
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
    const cardHTML = `<div class="card col-5 m-3 border-0 float-left shadow p-3 bg-white rounded">
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