import React, { useState, useEffect } from 'react';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the list of images from the backend API
    fetch('http://localhost:8080/getAll')
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        setImages(data); // Set images data into state
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1>All Uploaded Images</h1>
      {images.length === 0 ? (
        <p>No images available</p>
      ) : (
        images.map((image) => {
          const base64Image = image.s_img ? `data:image/jpg;base64,${image.s_img}` : null;
          return (
            <div key={image.s_id}>
              <p>ID: {image.s_id}</p>
              <p>Name: {image.s_name}</p>
              {/* <p>Message: {image.s_img}</p> */}
              <p>Image:</p>
              {base64Image ? (
                <img src={base64Image} alt={image.s_name} width="200" />
              ) : (
                <p>No image available</p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default App;
