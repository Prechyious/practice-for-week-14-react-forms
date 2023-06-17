import { useState, useEffect } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push("Please enter your Name");
    if (!email.includes("@")) errors.push("Please provide a valid Email");
    setValidationErrors(errors);
  }, [name, email]);

  const onSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      phoneType,
      hasSubmitted,
      submittedOn: new Date(),
    };

    console.log(contactUsInformation);

    // Reset the form state.
    setName("");
    setEmail("");
    setPhone("");
    setComments("");
    setPhoneType("");
    setValidationErrors([]);
    setHasSubmitted(false);
  };

  return (
    <div>
      <h2> Contact Us </h2>
      {hasSubmitted && validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email"> Email: </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone"> Phone: </label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default ContactUs;
