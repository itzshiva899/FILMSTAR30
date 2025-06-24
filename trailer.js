
function playTrailer() {
  var modal = document.getElementById("trailerModal");
  var frame = document.getElementById("trailerFrame");
  frame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  modal.style.display = "flex";
}
function closeTrailer() {
  var modal = document.getElementById("trailerModal");
  var frame = document.getElementById("trailerFrame");
  frame.src = "";
  modal.style.display = "none";
}
