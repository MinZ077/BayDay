
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

  await fetch(
    `https://api.airtable.com/v0/appisfPQ5E3ZUjEK6/places`,
    options
  )
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
        let image = data.records[i].fields["image"];


        newHtml += `
        
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${destination}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}


getAllRecords();
