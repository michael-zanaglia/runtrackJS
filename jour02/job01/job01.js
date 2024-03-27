document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector("#button");
    const article = document.getElementById("citation");
    btn.addEventListener("click", () => {console.log(article.textContent)})
});