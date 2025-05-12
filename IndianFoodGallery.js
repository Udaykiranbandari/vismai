// IndianFoodGallery.js
import React from "react";

const imageUrls = [
  "https://vismaifood.com/storage/app/uploads/public/ffd/fe0/3f7/thumb__700_0_0_0_auto.jpg",
  "https://tse1.mm.bing.net/th?id=OIP.fBB_5sNvDwIM6jA02oqiWwHaEK&pid=Api&P=0&h=220",
  "https://tse3.mm.bing.net/th?id=OIP.x80A7VQgqA_WvFKhTnSI0wHaE6&pid=Api&P=0&h=220",
  "https://tse4.mm.bing.net/th?id=OIP.G8jJhcnSfrRI6AwRzFVU1gHaE7&pid=Api&P=0&h=220",
  "https://tse1.mm.bing.net/th?id=OIP.EbLRCxRXyqxkB8XFDQW7xAHaEK&pid=Api&P=0&h=220",
  "https://tse3.mm.bing.net/th?id=OIP.I_B9mUieURr3K9xPNtOX5AHaFj&pid=Api&P=0&h=220",
  "https://tse2.mm.bing.net/th?id=OIP.rq64gRMMrVnWbXo9NwYkSgHaEK&pid=Api&P=0&h=220",
  "https://tse3.mm.bing.net/th?id=OIP.-jTzqldfPvq2v6A_8blq4AHaEK&pid=Api&P=0&h=220"
];

const IndianFoodGallery = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Indian Food Gallery</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px"
      }}>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Indian Food ${index + 1}`}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IndianFoodGallery;
