// fetch api

const api = "http://localhost:3000/alberta";

axios.get(api).then(function (response) {
  // handle success
  const allData = response.data;
  console.log(allData);

  // const dataStringify = JSON.stringify(allData, null, 2)
  // console.log('this is stringify' + dataStringify)

  let albertaData = allData
    .map((abData) => {
      return `<h1 id=${abData.id}>${abData.title}</h1>
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
  let str = filterPre1900
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
  const a = document.querySelector("#pre1900article").innerHTML = str
  console.log(a);

  //Show full article

  let fullPre1900Article = filterPre1900.map((fullArticle) => {
    return `<p>${fullArticle.article}`
  })

  document.querySelector("#pre1900").innerHTML = fullPre1900Article.replace(
    /\n/g,
    "<br>"
  );
  console.log(b)
  // END FILTER ARTICLES

}); //end AXIOS


//Handling error
axios.get(api).catch(function (error) {
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
