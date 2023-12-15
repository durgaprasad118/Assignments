document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted");
    let query = document.querySelector(".query").value;
    let url = "https://google.com/search?q=" + query;
    window.open(url);
  });
