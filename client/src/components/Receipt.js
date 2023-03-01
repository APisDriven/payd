import React, { useState } from 'react';
import sendEmail from './mailer.js';

const Receipt = () => {
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    date:'',
    business:'',
    receiptNo:''
  });

  const { email, amount, date, business, receiptNo} = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(email, `New receipt from GitPayd`, amount, date, business, receiptNo);
  };
//This is what will populate the receipt
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      </div>
      
     <div>
         <label>Amount:</label>
     <input
        type="input"
        name="amount"
        value={amount}
        onChange={handleChange}
      />
     </div>

    <div>
    <label>Date:</label>
        <input
        type="input"
        name="date"
        value={date}
        placeholder='mm/dd/yy'
        onChange={handleChange}
      />
    </div>
     
     <div>
     <label>Business:</label>
     <input
        type="input"
        name="business"
        value={business}
        onChange={handleChange}
      />
     </div>
      
     <div>
     <label>Receipt No:</label>
     <input
        type="input"
        name="receiptNo"
        value={receiptNo}
        onChange={handleChange}
      />
     </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Receipt;
