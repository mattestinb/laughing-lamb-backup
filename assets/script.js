function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  fetch(requestUrl)
    .then(function (response) { //first response 
      return response.json();

      
    })
    .then(function (data) { //2nd  data
      console.log(data)
      // Loop over the data to generate a table, each table row will have a link to the repo url. 
      //display a maximum of 10 products
      for (var i = 0; i < 10; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var tableBody= document.createElement('div');
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        // this section needs makeup api documentation (html)url)
        var productLink = data[i].product_link;
        link.textContent = data[i].product_link;
        link.href = data[i].product_link;
        console.log(data[i].product_link);

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        //console.log(fetchButton)


        var testImageLink = data[i].image_link;
        var testDiv = document.querySelector('#testDiv');
        testDiv.textContent.innerHTML="<img src=/"+ testImageLink;




      }
   });
}

var testDiv2 = document.querySelector('#testDiv2');
// testDiv2.textContent.innerHTML=<img src="api_featured_image>";
//testDiv.textContent=
  getApi();
  
  // fetchButton.addEventListener('click', getApi);

  
  const form = document.querySelector('form');
  // form.submit();

  //Matt js
  var submitButton = document.querySelector('#submitBtn');
var userSkinTone = document.querySelector('#userTone');
var makeupForm = document.querySelector('#userMakeup');
var resetButton = document.querySelector('#resetBtn');


const umakeupForm = document.getElementById("userMakeup");
const skinToneInput = document.getElementById("userSkinTone");
const lipstickInput = document.getElementById("userLipstick");
const eyeshadowInput = document.getElementById("userEyeshadow");
const mascaraInput = document.getElementById("userMascara");
const featuresInput = document.getElementById("userFeatures");
const makeupSubmit = document.getElementById("submitBtn");
const userList = document.getElementById("userList");






let userStorage = localStorage.getItem("userList")
  ? JSON.parse(localStorage.getItem("userList"))
  : [];

umakeupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userStorage.push(skinToneInput.value);
  userStorage.push(lipstickInput.value);
  userStorage.push(eyeshadowInput.value);
  userStorage.push(mascaraInput.value);
  userStorage.push(featuresInput.value);

  localStorage.setItem("userList", JSON.stringify(userStorage));
  listBuilder(skinToneInput.value);
  listBuilder(lipstickInput.value);
  listBuilder(eyeshadowInput.value);
  listBuilder(mascaraInput.value);
  listBuilder(featuresInput.value);

});

const listBuilder = (text) => {
  const item = document.createElement("li");
  item.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
  userList.appendChild(item);
};

const getChoices = JSON.parse(localStorage.getItem("userList"));
getChoices.forEach((item) => {
  listBuilder(item);
});


// resetButton.addEventListener('click', 
// notes.innerHTML="";
// localStorage.clear();


resetButton.addEventListener('click', function(){
localStorage.clear();
window.location.reload();
});


//  Handle @MEB
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  searchApi(searchInputVal, formatInputVal);
}