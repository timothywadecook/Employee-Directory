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
    $('.delete').hide();
    $('.update').hide();
    $('.updateForm').hide();
    $('.verify').hide();
    $('.nav-link').removeClass('active');
    $('#viewBtn').addClass('active')
}
const showAdd = function() {
    $('.nav-link').removeClass('active');
    $('#addBtn').addClass('active');
    $('.main').show();
    $('.add').show();
    $('#addSubmitBtn').on('click', doAdd)
    $('.delete').hide();
    $('.update').hide();
    $('.updateForm').hide();
    $('.verify').hide();
}
const showDelete = function() {
    $('.nav-link').removeClass('active');
    $('#deleteBtn').addClass('active');
    $( '.delete' ).on( 'click', deleteContact )
    $('.main').show();
    $('.delete').show();
    $('.update').hide();
    $('.updateForm').hide();
    $('.add').hide();
    $('.verify').hide();
}
const showUpdate = function() {
    $('.nav-link').removeClass('active');
    $('#updateBtn').addClass('active');
    $('.update').on( 'click', showUpdateForm );
    $('.main').show();
    $('.add').hide();
    $('.delete').hide();
    $('.update').show();
    $('.updateForm').hide();
    $('.verify').hide();
}
const showVerify = function() {
    $('.nav-link').removeClass('active');
    $('#verifyBtn').addClass('active');
    $('.main').show();
    $('.add').hide();
    $('.delete').hide();
    $('.update').hide();
    $('.updateForm').hide();
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
const cardHTMLMaker = function( contactObj, index ) {
    const cardHTML = `<div id=${index.toString()} class="card col-10 col-lg-5 col-md-8 m-3 border-0 float-left shadow p-3 bg-white rounded">
 <div class="card-body">
 <h5 class="card-title">${contactObj.name}</h5>
 <p class="card-text"><strong>Office Number: </strong>${contactObj.officeNum}</p>
 <p class="card-text"><strong>Phone Number: </strong>${contactObj.phoneNum}</p>
 <form class='updateForm' id=${'uf'+index}>
 <div class="form-row">
      <div class="col">
        <input type="text" id="n${index.toString()}" class="form-control" placeholder="Name">
      </div>
      <div class="col">
        <input type="text" id="o${index.toString()}" class="form-control" placeholder="Office Num">
      </div>
      <div class="col">
        <input type="text" id="p${index.toString()}" class="form-control" placeholder="Phone Number">
      </div>
      <button type="submit" id="${index.toString()}" class="btn btn-primary updateSubmit">Update</button>
 </div>
</form>
 <a href="#" id=${index.toString()} class="btn btn-primary delete">Delete</a>
 <a href="#" id=${index.toString()} class="btn btn-primary update ${index.toString()}">Update</a>
 </div>
</div>`;
    return cardHTML
}

// For each object in the employee list, run cardHTMLMaker and append the empList div in index
const appendList = function(employeeList) {
    for (i = 0; i < employeeList.length; i++) {
    $('.empList').append( cardHTMLMaker( employeeList[i], i ) );
    };
}

appendList(employeeList)


// Create a function that takes in a string like "updated the contact" and appends the 
// Main Div in Index HTML to alert "Great! You successfully updated the contact"
// Make alert dismissible and fade out
const successAlert = function(action) {
    $('.main').prepend( `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You just ${action}.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
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

// Create doAdd function to create a new employee and append the employee list 
const doAdd = function() {
    event.preventDefault();
    let name = $('#addName').val();
    let officeNum = $('#addOfficeNum').val();
    let phoneNum = $('#addPhoneNum').val();
    let object = {name: name, officeNum: officeNum, phoneNum: phoneNum,};
    console.log(object);
    employeeList.push(object);
    $('.empList').append( cardHTMLMaker( object , employeeList.length-1) );
    $('#addName').val('');
    $('#addOfficeNum').val('');
    $('#addPhoneNum').val('');
    showView();
    successAlert('added a new contact.');
}

// add event listener to "Add" Button for add input form
$('#addSubmitBtn').on('click', doAdd)



// When delete is clicked, remove that object from employeeList and update HTML
const deleteContact = function(event) {
    event.preventDefault();
    const index = parseInt(event.target.id, 10);
    employeeList.splice(index, 1);
    $('.empList').empty();
    appendList(employeeList);
    showView();
    successAlert('deleted a contact')
}

const doUpdate = function(event) {
    event.preventDefault();
    const index = parseInt(event.target.id, 10);
    console.log(index);
    console.log(event.target);
    let name = $('#n'+index).val();
    let officeNum = $('#o'+index).val();
    let phoneNum = $('#p'+index).val();
    let object = {name: name, officeNum: officeNum, phoneNum: phoneNum,};
    console.log(object);
    employeeList[index] = object;
    $('.empList').empty();
    appendList(employeeList);
    showView();
    successAlert('updated a contact.')

}

// When Update button is clicked for a given card. show update form for that card.
const showUpdateForm = function(event) {
    event.preventDefault();
    const index = parseInt(event.target.id, 10);
    formID = '#uf' + index;
    $('.update').hide();
    $(formID).show();
    $('.updateSubmit').on('click', doUpdate)
}

// add event listeners for delete and update buttons
$( '.delete' ).on( 'click', deleteContact );
$('.update').on( 'click', showUpdateForm );


//
// Note to self ... mic the room (div) .. not the button.  $('#div').on('click', '.button', function )
//