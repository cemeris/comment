document
  .getElementById("comment_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let textarea = document.getElementById("comment");
    addComment(textarea.value);

    localStorage.setItem("comment[0]", textarea.value);
    if (localStorage.getItem("comment_count")) {
      localStorage.setItem(
        "comment_count",
        Number(localStorage.getItem("comment_count")) + 1
      );
    } else {
      localStorage.setItem("comment_count", 1);
    }

    textarea.value = "";
  });

function addComment(text) {
  let comment = document.querySelector(".template").cloneNode(true);
  comment.querySelector("span").textContent = text;
  comment.classList.remove("template");
  comment.querySelector(".remove").addEventListener("click", function (event) {
    event.preventDefault();
    comment.remove();
  });

  document.querySelector(".comments").append(comment);
}

addComment(localStorage.getItem("comment[0]"));
