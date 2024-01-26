// Carousel
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 1
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})


// fetch api

/* console.log(API);
 */
// Make a request for a user with a given ID
/* axios.get('http://localhost:3000/alberta')
  .then(function (response) {
    // handle success
    let allData = response.data.alberta


    document.getElementById('data-container').innerHTML = `<div>${allData}</div>
    <p>${allData.article}</p>`
    console.log(allData);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }) */



async function fetchData() {
  try {
    const response = await axios.get('http://localhost:3000/alberta')
    const allData = response.data

    const dataList = allData.map(data => {
      return `<div id=${data.id}>
      <h1>${data.title}</h1>
      <p>${data.article}</p>
      </div>`
    }).join('')

    document.getElementById('data-container').innerHTML = dataList.replace(/\n\n/g, '<br><br>')

  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData()