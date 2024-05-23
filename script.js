document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
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
  
    // Send the data to the server
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Data submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error submitting data.');
    });
  });