$(function () {
  console.log("ready!");

  $.each(randomFacts, (index, data) => {
    $("#gameRow").append(`
    <div class="col-sm-5 mx-auto mt-5">
        <div class="card">
          <h2 class="card-title"> ${randomFacts[index].fact} </h2>
          <div class="card-body">${randomFacts[index].author}</div>
          <div class="card-footer">
            <button class="btn btn-primary">game link</button>
          </div>
        </div>
      </div>
      `);
  });
});
