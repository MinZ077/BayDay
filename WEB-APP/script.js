//patoUQN7b65QykWH4.cf1c2c4313073ffaa5c4c59e59bc6d5e016928ebc8b04dd8ada66cc196cea138
//https://api.airtable.com/v0/appisfPQ5E3ZUjEK6/places

"use strict";

// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("place");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patoUQN7b65QykWH4.cf1c2c4313073ffaa5c4c59e59bc6d5e016928ebc8b04dd8ada66cc196cea138`,
    },
  };

  await fetch(`https://api.airtable.com/v0/appisfPQ5E3ZUjEK6/places`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let destination = data.records[i].fields["destination"]; // here we are getting column values
        let location = data.records[i].fields["location"]; //here we are using the Field ID to fecth the name property
        let address = data.records[i].fields["address"];
        let category = data.records[i].fields["category"];
        let description = data.records[i].fields["description"];
        let hour = data.records[i].fields["hour"];
        let fee = data.records[i].fields["fee"];
        let link = data.records[i].fields["link"];
        let logo = data.records[i].fields["image"];

        newHtml += `
      



          <div class="card" style="width: 18rem;">
            <div>${logo
            ? `<img class="card-img-top rounded" alt="${name}" src="${logo[0].url}">`
            : ``}
            </div>
            <div class="card-body">
              <h5 class="card-title">${destination}</h5>
              <p class="card-text">${description}</p>
              <a class="mt-1 btn btn-primary mt-2" href="page.html?id=${data.records[i].id}" >Go somewhere</a>
            </div>
          </div>


        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

//detail page
async function getOneRecord(id) {
  let jobsResultElement = document.getElementById("place");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patoUQN7b65QykWH4.cf1c2c4313073ffaa5c4c59e59bc6d5e016928ebc8b04dd8ada66cc196cea138`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/appisfPQ5E3ZUjEK6/places/${id}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is a single object

        let destination = data.fields["destination"]; // here we are getting column values
        let location = data.fields["location"]; //here we are using the Field ID to fecth the name property
        let address = data.fields["address"];
        let category = data.fields["category"];
        let description = data.fields["description"];
        let hour = data.fields["hour"];
        let fee = data.fields["fee"];
        let link = data.fields["link"];
        let logo = data.fields["image"];
      

      let newHtml = `
        <div class="card list mb-3">
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center align-items-center">
     ${
       logo
         ? `<img class="img-fluid back ms-4" alt="${name}" src="${logo[0].url}">`
         : ``
     }
    </div>
    <div class="col-md-6 d-flex justify-content-center align-items-center desc">
      <div class="card-body">
        <h5 class="card-title bar">${destination}</h5>
        <p class="card-text">${description}</p>
        
        <p class="card-text"><small>${address}
      </div>
    </div>
  </div>
</div>
      `;

      jobsResultElement.innerHTML = newHtml;
    });
}


let idParams = window.location.search.split("?id=");
if (idParams.length >= 2) {
  getOneRecord(idParams[1]); // create detail view HTML w/ our id
} else {
  getAllRecords(); // no id given, fetch summaries
}