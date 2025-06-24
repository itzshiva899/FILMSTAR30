
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("uploadSection").style.display = "block";
    })
    .catch(err => alert("Login failed: " + err.message));
}

function uploadMovie() {
  const title = document.getElementById("movieTitle").value;
  const desc = document.getElementById("movieDesc").value;
  const trailer = document.getElementById("trailerLink").value;
  db.collection("movies").add({ title, desc, trailer })
    .then(() => alert("Movie uploaded successfully!"))
    .catch(err => alert("Error: " + err.message));
}
