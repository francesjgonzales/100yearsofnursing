// fetch api
/*const endpoints = [
  "http://localhost:3000/api/alberta",
  "http://localhost:3000/api/saskatchewan",
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

    //Filter Pioneer Nursing articles from joint array
    let pioneerNursing = jointData.filter((pioneer) => {
      if (pioneer.theme === "Pioneer Nursing") {
        return true;
      }
    });
    console.log(pioneerNursing);

    let pioneerNursingArticles = pioneerNursing
      .map((filterPioneerArticles) => {
        return `
        <div class="card m-3" style="width: 20rem;">
        <div class="card-body">
        <h6 class="card-subtitle mb-2 card-header">${filterPioneerArticles.theme}</h6>
            <h5 class="card-title text-success">${filterPioneerArticles.title}</h5>
            <p class="text-truncated">${filterPioneerArticles.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${filterPioneerArticles.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light" id="${filterPioneerArticles.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${filterPioneerArticles.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${filterPioneerArticles.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show Pioneer Nursing array in browser
    document.querySelector("#pioneeringNursing").innerHTML = pioneerNursingArticles.replace(
      /\n/g,
      "<br>"
    );


    //Filter Nurses in the wars articles from joint array
    let filterNursesinWar = jointData.filter((nursesInWar) => {
      if (nursesInWar.theme === "Nurses in the Wars") {
        return true;
      }
    });
    console.log(filterNursesinWar);


    let filterAllNuresInWar = filterNursesinWar
      .map((nursesArticles) => {
        return `
       <div class="card m-3" style="width: 20rem;">
          <div class="card-body">
          <h6 class="card-subtitle card-header mb-2">${nursesArticles.theme}</h6>
            <h5 class="card-title text-success">${nursesArticles.title}</h5>
            <p class="text-truncated">${nursesArticles.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${nursesArticles.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light" id="${nursesArticles.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${nursesArticles.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${nursesArticles.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show array in browser
    document.getElementById("nursesInWar").innerHTML = filterAllNuresInWar.replace(
      /\n/g,
      "<br>"
    );


    //Filter Nursing in Rural, Remote and Northern Areas articles from joint array
    let filterNursesInRural = jointData.filter((articleNurseRural) => {
      if (articleNurseRural.theme === "Nursing in Rural, Remote and Northern Areas") {
        return true;
      }
    });

    let filterNursesRural = filterNursesInRural
      .map((articleNurseRural) => {
        return `
        <div class="card m-3" style="width: 20rem;">
          <div class="card-body">
          <h6 class="card-subtitle card-header mb-2">${articleNurseRural.theme}</h6>
            <h5 class="card-title">${articleNurseRural.title}</h5>
            <p class="text-truncated">${articleNurseRural.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articleNurseRural.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light" id="${articleNurseRural.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${articleNurseRural.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${articleNurseRural.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show array in browser
    document.getElementById("nursesInRural").innerHTML = filterNursesRural.replace(
      /\n/g,
      "<br>"
    );

    //Filter Nurses and Unions articles from joint array
    let filterNursesAndUnion = jointData.filter((articleNursesAndUnion) => {
      if (articleNursesAndUnion.theme === "Nurses and Unions") {
        return true;
      }
    });


    let filterAllNursesAndUnion = filterNursesAndUnion
      .map((articleNursesUnion) => {
        return `
        <div class="card m-3" style="width: 20rem;">
          <div class="card-body">
          <h6 class="card-subtitle card-header mb-2">${articleNursesUnion.theme}</h6>
            <h5 class="card-title text-success">${articleNursesUnion.title}</h5>
            <p class="text-truncated">${articleNursesUnion.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articleNursesUnion.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light" id="${articleNursesUnion.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${articleNursesUnion.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${articleNursesUnion.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show array in browser
    document.getElementById("nursesandunions").innerHTML = filterAllNursesAndUnion.replace(
      /\n/g,
      "<br>"
    );

    //Filter Advocacy and Nursing articles from joint array
    let filterAdvocacyNursing = jointData.filter((articleAdvocacyNursing) => {
      if (articleAdvocacyNursing.theme === "Advocacy and Nursing") {
        return true;
      }
    });

    let filterAllAdvocacyNursing = filterAdvocacyNursing
      .map((articlesAdvocacyNursing) => {
        return `
        <div class="card m-3" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${articlesAdvocacyNursing.title}</h5>
            <h6 class="card-subtitle mb-2">${articlesAdvocacyNursing.year}</h6>
            <p class="text-truncated">${articlesAdvocacyNursing.article}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articlesAdvocacyNursing.id}" type="button">Read More</a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal bg-light" id="${articlesAdvocacyNursing.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${articlesAdvocacyNursing.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${articlesAdvocacyNursing.article}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    //Show array in browser
    document.getElementById("advocacynursing").innerHTML = filterAllAdvocacyNursing.replace(
      /\n/g,
      "<br>"
    );

    //Filter Evolution of Nursing articles from joint array
    let filterEvolutionNursing = jointData.filter((articleEvolutionNursing) => {
      if (articleEvolutionNursing.theme === "Evolution of Nursing") {
        return true;
      }
    });

    let filterEvolutionNursingArticles = filterEvolutionNursing
      .map((articlesEvolutionNursing) => {
        return `
            <div class="card m-3" style="width: 20rem;">
              <div class="card-body">
              <h6 class="card-subtitle card-header mb-2">${articlesEvolutionNursing.theme}</h6>
                <h5 class="card-title text-success">${articlesEvolutionNursing.title}</h5>
                <p class="text-truncated">${articlesEvolutionNursing.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articlesEvolutionNursing.id}" type="button">Read More</a>
              </div>
            </div>

            <!-- Modal -->
            <div class="modal bg-light" id="${articlesEvolutionNursing.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articlesEvolutionNursing.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articlesEvolutionNursing.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show  array in browser
    document.getElementById("evolutionofnursing").innerHTML = filterEvolutionNursingArticles.replace(
      /\n/g,
      "<br>"
    );

    //Filter The People Who Care articles from joint array
    let filterPeopleWhoCare = jointData.filter((articlePeopleWhoCare) => {
      if (articlePeopleWhoCare.theme === "The People Who Care") {
        return true;
      }
    });

    let filterPeopleWhoCareArticles = filterPeopleWhoCare
      .map((articlesPeopleWhoCare) => {
        return `
            <div class="card m-3" style="width: 20rem;">
              <div class="card-body">
              <h6 class="card-subtitle card-header mb-2">${articlesPeopleWhoCare.theme}</h6>
                <h5 class="card-title text-success">${articlesPeopleWhoCare.title}</h5>
                <p class="text-truncated">${articlesPeopleWhoCare.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articlesPeopleWhoCare.id}" type="button">Read More</a>
              </div>
            </div>

            <!-- Modal -->
            <div class="modal bg-light" id="${articlesPeopleWhoCare.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articlesPeopleWhoCare.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articlesPeopleWhoCare.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show array in browser
    document.getElementById("thepeoplewhocare").innerHTML = filterPeopleWhoCareArticles.replace(
      /\n/g,
      "<br>"
    );

    //Filter Other theme articles from joint array
    let filterOtherThemes = jointData.filter((articleOtherThemes) => {
      if (articleOtherThemes.theme === null) {
        return true;
      }
    });
    console.log(filterOtherThemes)

    let filterOtherThemeArticles = filterOtherThemes
      .map((articlesOtherThemes) => {
        return `
            <div class="card m-3" style="width: 20rem;">
              <div class="card-body">
                <h5 class="card-title text-success">${articlesOtherThemes.title}</h5>
                <p class="text-truncated">${articlesOtherThemes.article}</p>
                <a class="card-link" data-bs-toggle="modal" data-bs-target="#${articlesOtherThemes.id}" type="button">Read More</a>
              </div>
            </div>

            <!-- Modal -->
            <div class="modal bg-light" id="${articlesOtherThemes.id}" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${articlesOtherThemes.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${articlesOtherThemes.article}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join("");

    //Show array in browser
    document.getElementById("others").innerHTML = filterOtherThemeArticles.replace(
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
  });*/

// END Axios Response