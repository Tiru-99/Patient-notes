import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Patient Notes</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>Pricing</li>
          <li>FAQs</li>
          <li>Privacy</li>
          <li>Security</li>
          <li>Our Customers</li>
          <li>Help Center</li>
          <li>Log in</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
