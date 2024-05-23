document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
  
    // Create an object to hold the form data
    const formData = {
      name: name,
      email: email,
      age: age
    };
  
    // Convert the object to a JSON string
    const formDataJSON = JSON.stringify(formData);
  
    // Trigger the download of the JSON string as a file
    const blob = new Blob([formDataJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formData.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  