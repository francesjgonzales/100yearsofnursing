io() //websocket connection

// fetch api
const dbEndpoints = [
  "http://localhost:3000/api/alberta",
  "http://localhost:3000/api/saskatchewan",
];

//START Get all response for Alberta and Saskatchewan
axios
  .all(dbEndpoints.map((endpoint) => axios.get(endpoint)))
  .then((allResponses) => {
    allResponses.forEach((response) => {
      response.data
      // console.log(response.data);
    });

    //Get All Data for Alberta and Saskatchewan
    let alberta = allResponses[0].data
    let saskatchewan = allResponses[1].data
    let jointData = alberta.concat(saskatchewan) //combine both as one array

    //Create a function to generate modal cards based on dynamic response data

    //Filter Pre 1900 articles from joint array
    let filterPioneerNursing = jointData.filter((PioneerNursing) => {
      if (PioneerNursing.theme === "Pioneer Nursing") {
        return true;
      }
    });
    console.log(filterPioneerNursing);

    let filterPioneerNursingArticles = filterPioneerNursing
      .map((pioneerNursing) => {
        return `
        <div class="card bg-light text-black" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${pioneerNursing.title}</h5>
            <h6 class="card-subtitle mb-2">${pioneerNursing.theme}</h6>
            <p class="text-truncated">${pioneerNursing.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${pioneerNursing.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light text-light" id="${pioneerNursing.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${pioneerNursing.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${pioneerNursing.article}
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
    document.querySelector("#pioneernursing").innerHTML = filterPioneerNursingArticles.replace(
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
        return `
        <div class="card bg-light text-black" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${articles1910.title}</h5>
            <h6 class="card-subtitle mb-2">${articles1910.year}</h6>
            <p class="text-truncated">${articles1910.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1910.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light text-light" id="${articles1910.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1910.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${articles1910.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
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
        return `
        <div class="card bg-light text-black" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${articles1920.title}</h5>
            <h6 class="card-subtitle mb-2">${articles1920.year}</h6>
            <p class="text-truncated">${articles1920.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1920.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light text-light" id="${articles1920.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1920.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${articles1920.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show 1920 array in browser
    document.getElementById("article1920").innerHTML = filter1920Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1930 articles from joint array
    let filter1930 = jointData.filter((article1930) => {
      if (article1930.year === "1930's") {
        return true;
      }
    });
    console.log(filter1930);

    let filter1930Articles = filter1930
      .map((articles1930) => {
        return `
        <div class="card bg-light text-black" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${articles1930.title}</h5>
            <h6 class="card-subtitle mb-2">${articles1930.year}</h6>
            <p class="text-truncated">${articles1930.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1930.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light text-light" id="${articles1930.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1930.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${articles1930.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show 1930 array in browser
    document.getElementById("article1930").innerHTML = filter1930Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1930 articles from joint array
    let filter1940 = jointData.filter((article1940) => {
      if (article1940.year === "1940's") {
        return true;
      }
    });
    console.log(filter1930);

    let filter1940Articles = filter1940
      .map((articles1940) => {
        return `
            <div class="card bg-light text-black" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title">${articles1940.title}</h5>
                <h6 class="card-subtitle mb-2">${articles1940.year}</h6>
                <p class="text-truncated">${articles1940.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1940.id}" type="button">Read More</a>
              </div>
            </div>
    
            <!-- Modal -->
            <div class="modal bg-light text-light" id="${articles1940.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1940.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articles1940.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show 1930 array in browser
    document.getElementById("article1940").innerHTML = filter1940Articles.replace(
      /\n/g,
      "<br>"
    );

  })




  //Handling database error
  .catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("Data Error Message:", error.response.data);
      console.log("Status Error Message:", error.response.status);
      console.log("Headers Error Message:", error.response.headers);
    }
  });
// END Axios Response