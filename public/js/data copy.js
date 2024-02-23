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
      response.data
      // console.log(response.data);
    });

    //Get All Data for Alberta and Saskatchewan
    let alberta = allResponses[0].data
    let saskatchewan = allResponses[1].data
    let jointData = alberta.concat(saskatchewan) //joint both as one array

    //Create a function to generate modal cards based on dynamic response data

    //Filter Pre 1900 articles from joint array
    let filterPre1900 = jointData.filter((pre1900) => {
      if (pre1900.year === "Pre 1900's") {
        return true;
      }
    });
    console.log(filterPre1900);

    let filterPre1900Articles = filterPre1900
      .map((pre1900articles) => {
        return `
        <div class="card bg-light text-black" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${pre1900articles.title}</h5>
            <h6 class="card-subtitle mb-2">${pre1900articles.year}</h6>
            <p class="text-truncated">${pre1900articles.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${pre1900articles.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light text-light" id="${pre1900articles.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${pre1900articles.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${pre1900articles.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show Pre 1900 array in browser
    document.querySelector("#preArticle1900").innerHTML = filterPre1900Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1900 articles from joint array
    let filter1900 = jointData.filter((article1900) => {
      if (article1900.year === "1900's") {
        return true;
      }
    });
    console.log(filter1900);

    let filter1900Articles = filter1900
      .map((articles1900) => {
        return `
       <div class="card bg-light text-black" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${articles1900.title}</h5>
            <h6 class="card-subtitle mb-2">${articles1900.year}</h6>
            <p class="text-truncated">${articles1900.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1900.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light text-light" id="${articles1900.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1900.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${articles1900.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show 1900 array in browser
    document.getElementById("article1900").innerHTML = filter1900Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1910 articles from joint array
    let filter1910 = jointData.filter((article1910) => {
      if (article1910.year === "1910's") {
        return true;
      }
    });
    console.log(filter1910);

    let filter1910Articles = filter1910
      .map((articles1910) => {
        return `<div id="${articles1910.id}" class="toggleDiv" >${articles1910.title}</div>
        `;
      })
      .join("");

    //Show 1910 array in browser
    document.getElementById("article1910").innerHTML = filter1910Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1920 articles from joint array
    let filter1920 = jointData.filter((article1920) => {
      if (article1920.year === "1920's") {
        return true;
      }
    });
    console.log(filter1920);

    let filter1920Articles = filter1920
      .map((articles1920) => {
        return `<div id="${articles1920.id}" class="toggleDiv" >${articles1920.title}</div>
        `;
      })
      .join("");

    //Show 1910 array in browser
    document.getElementById("article1920").innerHTML = filter1920Articles.replace(
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