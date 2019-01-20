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
}
const showAdd = function() {

}
const showDelete = function() {

}
const showUpdate = function() {

}
const showVerify = function() {

}


// .....
// Event Listeners for Nav Bar
// .....
// Add event listener to each button to show respective page elements when clicked
$('#viewBtn').on('click', showView)
$('#addBtn').on('click', showAdd)
$('deleteBtn').on('click', showDelete)
$('updateBtn').on('click', showUpdate)
$('verifyBtn').on('click', showVerify)



// Function that takes an object with three properties and creates the HTML for a *Bootstrap* card that will be in a card deck
const cardHTMLMaker = function(contactObj) {
    const cardHTML = `<div class="card col-6 m-3">
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
