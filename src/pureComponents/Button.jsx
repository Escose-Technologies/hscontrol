import React from 'react';

const Button = ({ styles, text, handleSave, type = 'button' }) => (
  <button
    type={type}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white rounded bg-gradient-to-r from-yellow-400  to-orange-400 outline-none ${styles}`}
    onClick={handleSave}
  >
    {text}
  </button>
);

export default Button;
