import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store the user's date of birth and calculated age
  const [dateOfBirth, setDateOfBirth] = useState("");  // User's DOB input
  const [age, setAge] = useState(null);  // User's calculated age

  // Function to calculate the user's age based on the selected date of birth
  const calculateUserAge = () => {
    if (!dateOfBirth) {
      alert("Please select your date of birth to calculate your age.");
      return;
    }

    // Parse the date of birth from the input
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();  // Get today's date

    // Calculate the difference in years between the current year and the birth year
    let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has passed this year; if not, subtract 1 from the age
    const isBirthdayPassedThisYear =
      currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() >= birthDate.getDate());

    if (!isBirthdayPassedThisYear) {
      calculatedAge--;
    }

    // Set the calculated age state
    setAge(calculatedAge);
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      
      {/* Input for the user's Date of Birth */}
      <div className="input-group">
        <label htmlFor="dob">Enter your Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}  // Update the DOB state
        />
      </div>
      
      {/* Button to trigger the age calculation */}
      <button onClick={calculateUserAge}>Calculate Age</button>

      {/* Display the calculated age */}
      {age !== null && (
        <div id="result" className="result">
          Your age is: {age} years old.
        </div>
      )}
    </div>
  );
}

export default App;
