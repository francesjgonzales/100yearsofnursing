// fetch api
const endpoints = [
  "https://one00yearsofnursing.onrender.com/api/alberta",
  "https://one00yearsofnursing.onrender.com/api/saskatchewan",
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
    let jointData = alberta.concat(saskatchewan) //combine both as one array

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

    //Filter 1950 articles from joint array
    let filter1950 = jointData.filter((article1950) => {
      if (article1950.year === "1950's") {
        return true;
      }
    });
    console.log(filter1950);

    let filter1950Articles = filter1950
      .map((articles1950) => {
        return `
            <div class="card bg-light text-black" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title">${articles1950.title}</h5>
                <h6 class="card-subtitle mb-2">${articles1950.year}</h6>
                <p class="text-truncated">${articles1950.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1950.id}" type="button">Read More</a>
              </div>
            </div>
    
            <!-- Modal -->
            <div class="modal bg-light text-light" id="${articles1950.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1950.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articles1950.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show 1950 array in browser
    document.getElementById("article1950").innerHTML = filter1950Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1960 articles from joint array
    let filter1960 = jointData.filter((article1960) => {
      if (article1960.year === "1960's") {
        return true;
      }
    });
    console.log(filter1960);

    let filter1960Articles = filter1960
      .map((articles1960) => {
        return `
            <div class="card bg-light text-black" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title">${articles1960.title}</h5>
                <h6 class="card-subtitle mb-2">${articles1960.year}</h6>
                <p class="text-truncated">${articles1960.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1960.id}" type="button">Read More</a>
              </div>
            </div>
    
            <!-- Modal -->
            <div class="modal bg-light text-light" id="${articles1960.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1960.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articles1960.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show 1960 array in browser
    document.getElementById("article1960").innerHTML = filter1960Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1970 articles from joint array
    let filter1970 = jointData.filter((article1970) => {
      if (article1970.year === "1970's") {
        return true;
      }
    });
    console.log(filter1970);

    let filter1970Articles = filter1970
      .map((articles1970) => {
        return `
            <div class="card bg-light text-black" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title">${articles1970.title}</h5>
                <h6 class="card-subtitle mb-2">${articles1970.year}</h6>
                <p class="text-truncated">${articles1970.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1970.id}" type="button">Read More</a>
              </div>
            </div>
    
            <!-- Modal -->
            <div class="modal bg-light text-light" id="${articles1970.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1970.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articles1970.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show 1970 array in browser
    document.getElementById("article1970").innerHTML = filter1970Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1980 articles from joint array
    let filter1980 = jointData.filter((article1980) => {
      if (article1980.year === "1980's") {
        return true;
      }
    });
    console.log(filter1980);

    let filter1980Articles = filter1980
      .map((articles1980) => {
        return `
            <div class="card bg-light text-black" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title">${articles1980.title}</h5>
                <h6 class="card-subtitle mb-2">${articles1980.year}</h6>
                <p class="text-truncated">${articles1980.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1980.id}" type="button">Read More</a>
              </div>
            </div>
    
            <!-- Modal -->
            <div class="modal bg-light text-light" id="${articles1980.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1980.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articles1980.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show 1980 array in browser
    document.getElementById("article1980").innerHTML = filter1980Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 1990 articles from joint array
    let filter1990 = jointData.filter((article1990) => {
      if (article1990.year === "1990's") {
        return true;
      }
    });
    console.log(filter1990);

    let filter1990Articles = filter1990
      .map((articles1990) => {
        return `
            <div class="card bg-light text-black" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title">${articles1990.title}</h5>
                <h6 class="card-subtitle mb-2">${articles1990.year}</h6>
                <p class="text-truncated">${articles1990.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles1990.id}" type="button">Read More</a>
              </div>
            </div>
    
            <!-- Modal -->
            <div class="modal bg-light text-light" id="${articles1990.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articles1990.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articles1990.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show 1990 array in browser
    document.getElementById("article1990").innerHTML = filter1990Articles.replace(
      /\n/g,
      "<br>"
    );

    //Filter 2000 articles from joint array
    let filter2000 = jointData.filter((article2000) => {
      if (article2000.year === "2000's") {
        return true;
      }
    });
    console.log(filter2000);

    let filter2000Articles = filter2000
      .map((articles2000) => {
        return `
            <div class="card bg-light text-black" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title">${articles2000.title}</h5>
                <h6 class="card-subtitle mb-2">${articles2000.year}</h6>
                <p class="text-truncated">${articles2000.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articles2000.id}" type="button">Read More</a>
              </div>
            </div>
    
            <!-- Modal -->
            <div class="modal bg-light text-light" id="${articles2000.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articles2000.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articles2000.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show 2000 array in browser
    document.getElementById("article2000").innerHTML = filter2000Articles.replace(
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