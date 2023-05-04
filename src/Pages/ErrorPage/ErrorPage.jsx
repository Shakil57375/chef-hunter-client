/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    // eslint-disable-next-line no-undef
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate(-1)
    }
return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="w-1/2 h-[500px] mb-4" src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?w=2000" />
      <h1 className="text-4xl font-serif font-bold mb-2">Error 404</h1>
      <p className="text-lg mb-4">Page not found</p>
      <button onClick = {handleGoBack} className="d-btn">
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;