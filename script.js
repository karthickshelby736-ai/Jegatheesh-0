// Function to update student details dynamically
function updateDetails() {
  document.getElementById("name").innerText = "Jegatheesh";
  document.getElementById("year").innerText = "2nd Year";
  document.getElementById("course").innerText = "B.Sc Computer Science";
  document.getElementById("college").innerText = "SNMV College";
  document.getElementById("skills").innerText = "HTML, CSS, JavaScript, Python";
  document.getElementById("studentName").innerText = "Jegatheesh";
  alert("Student details updated!");
}

// Function to validate contact form
function validateForm() {
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (email === "" || message === "") {
    alert("Please fill in all fields!");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}
