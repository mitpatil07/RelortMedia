import React from 'react';

const GetStartedButton = ({ 
  href = "/get-started",
  onClick,
  children = "GET STARTED", 
  className = "",
  as = "a" // Can be 'a', 'button', or a custom component like Link
}) => {
  const baseClasses = "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative z-10 mx-4";
  
  const combinedClasses = `${baseClasses} ${className}`;

  // If it's a regular anchor tag
  if (as === "a") {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  // If it's a button
  if (as === "button") {
    return (
      <button className={combinedClasses} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  // If it's a custom component (like React Router Link)
  const Component = as;
  return (
    <Component to={href} className={combinedClasses} onClick={onClick}>
      {children}
    </Component>
  );
};

export default GetStartedButton;