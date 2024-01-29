// Carousel
let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 1;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//testing json for article value
var str = "This is the first line\n\n\nand *this* is the second line";
console.log(str.replace(/_/g, "<i>"));

// fetch api
const api = "http://localhost:3000/alberta";

axios.get(api).then(function (response) {
  // handle success
  const allData = response.data;
  console.log(allData);
  // const dataStringify = JSON.stringify(allData, null, 2)
  // console.log('this is stringify' + dataStringify)

  const albertaData = allData
    .map((abData) => {
      // console.log(abData)
      return `<h1 id=${abData.id}>${abData.title}</h1>
      <p>${abData.article}</p>`;
    })
    .join("");

  document.querySelector(".data-container").innerHTML = albertaData.replace(
    /\n/g,
    "<br>"
  ); //used replace to add an extra line



// START FILTER ARTICLES
// 1. Filter search for Pre 1900's articles
const filterPre1900 = allData.filter(function (pre1900) {
  if (pre1900.year === "Pre 1900's") {
    return true;
  }
});

// 2. Show mapped data in browser
const pre1900 = filterPre1900
  .map((data) => {
    return `<div class="card" id="${data.id}">
          <h5>${data.title}</h5>
          </div>`;
  })
  .join("");

document.getElementById("searchByPre1900").innerHTML = pre1900;


});
// END FILTER ARTICLES


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
