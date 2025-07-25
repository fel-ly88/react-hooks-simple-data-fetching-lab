// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message); 
        setIsLoading(false);       
      });
  }, []); 

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <img src={imageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;
