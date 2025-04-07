# dev-easy Handoff

## Authors and Contributers
<details> 
<summary>Authors</summary>
  Victor Love, Landon Andrews, Corbin Ehlendt, Arun Batta
</details>

---

> This is a quote

- this
* is
+ **list**
+ :seal: 

random selector code
```
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
```

Search function
```
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
```


