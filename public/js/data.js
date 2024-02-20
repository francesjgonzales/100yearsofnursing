// fetch api

const endpoints = [
  "http://localhost:3000/alberta",
  "http://localhost:3000/saskatchewan",
];

//START Get all response for Alberta and Saskatchewan
axios
  .all(endpoints.map((endpoint) => axios.get(endpoint)))
  .then((allResponses) => {
    allResponses.forEach((response) => {
      console.log(response.data);
    });

    //Get Alberta json
    let alberta = allResponses[0].data
      .map((abData) => {
        return `<div id="${abData.id}" class="toggleDiv" style="display: none;">${abData.title}</div>`;
      })
      .join("");

    //Show Alberta data in browser
    document.querySelector(".alberta").innerHTML = alberta.replace(
      /\n/g,
      "<br>"
    );

    //Get Saskatchewan json
    let saskatchewan = allResponses[1].data
      .map((saData) => {
        return `<div id="${saData.id}" class="toggleDiv" style="display: none;">${saData.title}</div>`;
      })
      .join("");

    //Show Alberta data in browser
    document.querySelector(".saskatchewan").innerHTML = saskatchewan.replace(
      /\n/g,
      "<br>"
    );


    //Filter Pre 1900 articles from Alberta and Saskatchewan arrays
    let filterPre1900 = allResponses[0].data.filter((pre1900) => {
      if (pre1900.year === "Pre 1900's") {
        return true;
      }
    });
    console.log(filterPre1900);

    //Show Pre 1900 in browser
    let pre1900Cards = filterPre1900
      .map((stringpre1900) => {
        return `
        <div class="card bg-light text-black" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${stringpre1900.title}</h5>
            <h6 class="card-subtitle mb-2">${stringpre1900.year}</h6>
            <p class="text-truncated">${stringpre1900.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${stringpre1900.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light text-light" id="${stringpre1900.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${stringpre1900.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${stringpre1900.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");
    document.getElementById("pre1900article").innerHTML = pre1900Cards.replace(
      /\n/g,
      "<br>"
    );
  })




  //Handling error
  .catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("Data Error Message:", error.response.data);
      console.log("Status Error Message:", error.response.status);
      console.log("Headers Error Message:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Request Error Message:", error.message);
    }
    console.log("Config Error Message: (Check Json-server):", error.config);
  });
// END Axios Response

// START FILTER ARTICLES
/* let filterPre1900 = response.data.filter((pre1900) => {
  if (pre1900.year === "Pre 1900's") {
    return true;
  }
});
console.log(filterPre1900); */

/* axios.get(api).then(function (response) {
  // handle success
  let allData = response.data;
  console.log(allData);

  // const dataStringify = JSON.stringify(allData, null, 2)
  // console.log('this is stringify' + dataStringify)

  let albertaData = allData
    .map((abData) => {
      return `<h1 id=${abData.id}>${abData.title}</h1>
      <h6 class="mb-2">${abData.year}</h6>
      <p>${abData.article}</p>`;
    })
    .join("");

  document.querySelector(".data-container").innerHTML = albertaData.replace(
    /\n/g,
    "<br>"
  ); //used replace to add an extra line where it formats json properly

  // START FILTER ARTICLES
  let filterPre1900 = allData.filter((pre1900) => {
    if (pre1900.year === "Pre 1900's") {
      return true;
    }
  });

  //Show Filtered Articles in a card with truncated text
  const str = filterPre1900
    .map((stringpre1900) => {
      return `<div class="card bg-light text-black" style="width: 18rem;">
  <div class="card-body" id=${stringpre1900.id}>
    <h5 class="card-title">${stringpre1900.title}</h5>
    <h6 class="card-subtitle mb-2">${stringpre1900.year}</h6>
    <p class="card-text" id="text-truncated">${stringpre1900.article}</p>
    <a href="#" class="card-link">Read more</a>
  </div>
</div>`;
    })
    .join("");
  const a = (document.querySelector("#pre1900article").innerHTML = str);
  console.log(a);

  //Show full article
  document.querySelector(".pre1900").innerHTML = str.replace(/\n/g, "<br>");
  console.log(b);
  // END FILTER ARTICLES
});

<div class="card bg-light text-black" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${stringpre1900.title}</h5>
            <h6 class="card-subtitle mb-2">${stringpre1900.year}</h6>
            <p class="card-text" id="text-truncated">${stringpre1900.article}</p>
            <a href="#${stringpre1900.id}" class="card-link">${stringpre1900.title}</a>
          </div>
        </div>


*/


/*<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#${stringpre1900.id}" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">${stringpre1900.title}</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane" id="${stringpre1900.id}" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
  <h5>${stringpre1900.title}</h5>
  <p>${stringpre1900.article}</p></div>
</div>*/