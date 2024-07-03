"use client";

import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    textField: '',
    radioOption: '',
    selectOption: '',
    textarea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <div className="max-w-lg   mx-auto bg-white shadow-lg rounded-lg p-8">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="textField"
            placeholder='Name'
            id="textField"
            value={formData.textField}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="email"
            name="textField"
            placeholder='Email'
            id="textField"
            value={formData.textField}
            onChange={handleChange}
            className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="tel" 
            id="phone" 
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder='Contact Number'
            className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
           <input
            type="tel" 
            id="phone" 
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder='Contact Number'
            className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
           <input
            type="text" 
            id="address" 
            name="address"
            placeholder='Address'
            className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text" 
            id="city" 
            name="city"
            placeholder='City'
            className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <select
            name="selectOption"
            id="selectOption"
            value={formData.selectOption}
            onChange={handleChange}
            className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        
          >
            <option className="text-gray-700 " value="">Select a state</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          </select>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            pattern="\d{6}"
            title="Zip code"
            required
            className="mt-3 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        <div className="mt-3 flex flex-col gap-2">
          <span className="block text-gray-700 text-sm font-bold mb-2">What services may we assist you with? *</span>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="radioOption"
              value="option1"
              checked={formData.radioOption === 'option1'}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2">Consultation</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="radioOption"
              value="option2"
              checked={formData.radioOption === 'option2'}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2 text-gray-700 ">Sensors</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="radioOption"
              value="option2"
              checked={formData.radioOption === 'option2'}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2 text-gray-700 ">Solutions</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="radioOption"
              value="option2"
              checked={formData.radioOption === 'option2'}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2">Services</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectOption">
           How urgent is this project *
          </label>
          <select
            name="selectOption"
            id="selectOption"
            value={formData.selectOption}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="option1">Low</option>
            <option value="option2">Medium</option>
            <option value="option3">Heigh</option>
          </select>
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <span className="block text-gray-700 text-sm font-bold mb-2">Due Date</span>
          <label className="inline-flex items-center">
            <input
              type="date"
              name="dueDate"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textarea">
          Describe your project *
          </label>
          <textarea
            name="textarea"
            id="textarea"
            value={formData.textarea}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ContactUsForm;
