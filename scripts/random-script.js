$(function () {
  console.log("ready!");

  $.each(randomFacts, (index, data) => {
    $("#gameRow").append(`
    <div class="col-sm-5 mx-auto mt-5">
        <div class="card">
          <h2 class="card-title"> ${randomFacts[index].fact} </h2>
          <div class="card-body">${randomFacts[index].username}</div>
          <div class="card-footer">
            <button class="btn btn-primary">❤️</button>
          </div>
        </div>
      </div>
      `);
  });

  //Corbin - random fact selector
  function getRandomFact(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  if (randomFacts.length > 0) {
    const randomObject = getRandomFact(randomFacts);
    $('#randomFact').text(randomObject.fact);
  } else {
    $('#randomFact').text("No facts available.");
  }
  
  // Vic
  function displayFacts(factsArray) {
  const container = document.getElementById("justFacts");
  container.innerHTML = "";

  factsArray.forEach(fact => {
      const factElement = document.createElement("div");
      factElement.classList.add("fact-item");
      factElement.innerHTML = `<p>${fact.fact}</p>`;
      container.appendChild(factElement);
    });
  }
    
  document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filtered = randomFacts.filter(fact => fact.fact.toLowerCase().includes(searchTerm));
    displayFacts(filtered);
  });

  
 const likeButtons = document.getElementsByClassName('btn btn-primary');

  
  for (let button of likeButtons) {
    button.addEventListener('click', function() {
      if (button.textContent.includes('❤️')) {
        button.textContent = 'Unlike';
      } /*else {
        button.textContent = 'Like';
      }*/
    });
  }


});
