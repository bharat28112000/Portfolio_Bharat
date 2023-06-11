import "./FormStyles.css"

import React from 'react'

const Form = () => {

    const email = 'bharat22@cse.iitk.ac.in';

    const [formData, setFormData] = React.useState({
        name: '',
        subject: '',
        message: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = () => {
        // console.log('Name:', formData.name);
        // console.log('Email:', formData.email);
        // console.log('Subject:', formData.subject);
        // console.log('Message:', formData.message);

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoLink;

      };

  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" name="name" onChange={handleInputChange} />
        {/* <label>Email</label>
        <input type="email" name="email" onChange={handleInputChange} /> */}
        <label>Subject</label>
        <input type="text" name="subject" onChange={handleInputChange} />
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message" onChange={handleInputChange} />
        <button className="btn" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form