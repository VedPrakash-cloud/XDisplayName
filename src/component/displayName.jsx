import { useState } from "react";

export default function DisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!firstName || !lastName) return;
    setFullName(`Full Name: ${firstName} ${lastName}`);
  };

  return (
    <div>
        <div id="container">
            <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="First Name">First Name: </label>
        <input 
        type="text" 
        value={firstName} 
        onChange={(e)=>{setFirstName(e.target.value)}} 
        required 
        />
        <br />
        <label htmlFor="Last Name">Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e)=>{setLastName(e.target.value)}}
          required
        />
        <br />
        <button type="submit">
          Submit
        </button>
        <br />
        {fullName}
        </form>
        </div>
    </div>
  );
}
