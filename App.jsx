
// CoconutVenPongalRecipe.js
import React from "react";
import App1 from "./App1";
import App2 from "./App2";
import Header from "./Header";



const CoconutVenPongalRecipe = () => {
  return (
    
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial",display:"flex",alignItems:"center",flexDirection:"column", paddingLeft:"200px"}}>
      <Header/>
      <h1>Coconut Ven Pongal (Kattu Pongali)</h1>
      <p>
        A delicious and flavorful variation of Ven Pongal made with coconut. This traditional South Indian dish is often prepared during festivals like Pongal.
      </p>

      <img
        src="https://vismaifood.com/storage/app/uploads/public/ffd/fe0/3f7/thumb__700_0_0_0_auto.jpg"
        alt="Coconut Ven Pongal"
        style={{ width: "100%", height: "auto", margin: "20px 0" }}
      />

      <h2>Ingredients</h2>
      <ul>
        <li>1 cup Chitti Mutyalu Rice (or any other rice) – soaked for 1 hour</li>
        <li>1/2 cup Moong dal (soaked for 1 hour)</li>
        <li>1/2 tsp Black Pepper Powder</li>
        <li>Salt (to taste)</li>
        <li>2.5 cups Second Extract Coconut Milk</li>
        <li>2 cups Second Extract Coconut Milk (for later addition)</li>
        <li>1/2 tsp Jaggery (optional)</li>
        <li>1/8 tsp Nutmeg Powder</li>
        <li>1 pinch Turmeric Powder (optional, for colour enhancement)</li>
      </ul>

      <h3>Tempering</h3>
      <ul>
        <li>3 tbsp Ghee</li>
        <li>3 tbsp Oil</li>
        <li>1 tbsp Black Pepper</li>
        <li>1 tbsp Cumin Seeds</li>
        <li>1/4 cup Cashews</li>
        <li>1 tbsp Ginger (finely chopped)</li>
        <li>1/8 tsp Hing (Asafoetida)</li>
        <li>1/4 cup Fresh Coconut Chunks</li>
        <li>2 sprigs Curry Leaves</li>
      </ul>

      <h2>Instructions</h2>
      <ol>
        <li>
          <strong>Cooking the Rice and Dal:</strong>
          <ul>
            <li>In a pressure cooker, add the soaked rice and moong dal.</li>
            <li>Pour 2.5 cups of second extract coconut milk, add black pepper powder, salt, and close the lid.</li>
            <li>Cook on a medium flame for 4 whistles.</li>
            <li>Once done, let the pressure release naturally. Open the lid and mash the mixture well.</li>
          </ul>
        </li>
        <li>
          <strong>Enhancing the Flavour:</strong>
          <ul>
            <li>Add 2 more cups of second-extract coconut milk to the mashed rice.</li>
            <li>Mix in jaggery (optional), nutmeg powder, and a pinch of turmeric powder.</li>
            <li>Sauté and cook for 3-4 minutes until everything is well combined.</li>
          </ul>
        </li>
        <li>
          <strong>Preparing the Tempering:</strong>
          <ul>
            <li>In a pan, heat ghee and oil.</li>
            <li>Add black pepper and let it splutter.</li>
            <li>Add cumin seeds and let them splutter as well.</li>
            <li>Toss in cashews and sauté until golden brown.</li>
            <li>Add chopped ginger, hing, and fresh coconut chunks.</li>
            <li>Fry until the coconut turns light golden.</li>
            <li>Finally, add curry leaves and sauté well.</li>
          </ul>
        </li>
        <li>
          <strong>Bringing Everything Together:</strong>
          <ul>
            <li>Pour the prepared tempering over the coconut pongal.</li>
            <li>Mix well and allow it to rest for 2-3 minutes to absorb the flavours.</li>
            <li>Serve hot with Miriyala Pappucharu or Karnataka-style Draksha Gojju for an unforgettable meal.</li>
          </ul>
        </li>
      </ol>

      <p>
        <strong>Tip:</strong> Adjust water quantity based on the consistency you prefer. This Pongal is typically served slightly loose and soft.
      </p>
     <div style={{display:"grid",}}>
     <App1/>
   
     </div>
     <App2/>
     
    </div>
    

    
     
    
  

  );
};

export default CoconutVenPongalRecipe
