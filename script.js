document.getElementById("recommendation-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("rec-name").value;
    const message = document.getElementById("rec-message").value;
  
    const newRec = document.createElement("p");
    newRec.innerHTML = `<strong>${name}:</strong> ${message}`;
    document.getElementById("recommendation-list").appendChild(newRec);
  
    alert("Thank you! Your recommendation has been submitted.");
  
    document.getElementById("rec-name").value = "";
    document.getElementById("rec-message").value = "";
  });
  