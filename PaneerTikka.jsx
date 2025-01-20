import React from 'react';
import Paneertikka from '../../../Assets/HomePage/paneertikka.jpg';
import './PaneerTikka.css';

const BranzinoalForno = () => {

    return (
        <div className='bgbiriyani'>

            <section id="recipe-branzino">
                <h1>Paneer Tikka</h1>
                <div className="description-branzino">
                <p>This beloved Indian appetizer features succulent cubes of paneer marinated in a blend of yogurt and aromatic spices, then grilled to perfection for a smoky, flavorful bite! With its tender, charred edges and a burst of spices, Paneer Tikka brings a delicious taste of India to your table with every bite.</p> 
                <p>Short on prep time? Don’t worry! This crowd-pleaser is easy to prepare, requiring minimal effort but delivering maximum flavor, making it an ideal choice for a quick yet impressive dish that’s sure to win over your guests.</p>

                </div>
                <div className="recipe-details-branzino">
                    <ul className='sbcolorindian'>
                    <li><span>Prep Time</span>10 min</li>
                    <li><span>Cook Time</span>15 min</li>
                    <li><span>Total Time</span>25 min</li>

                    </ul>
                </div>
                <div className="recipe-content-branzino">
                    <div className="ing-list-branzino">
                        <h2>The Ingredients</h2>
                        <div className="ingredients-branzino">
                        <p>200 grams paneer (cottage cheese), cut into cubes</p>
                        <p>1/2 cup thick yogurt</p>
                        <p>1 tablespoon gram flour (besan)</p>
                        <p>1 tablespoon lemon juice</p>
                        <p>1 tablespoon ginger-garlic paste</p>
                        <p>1/2 teaspoon turmeric powder</p>
                        <p>1 teaspoon red chili powder</p>
                        <p>1/2 teaspoon garam masala</p>
                        <p>1/2 teaspoon cumin powder</p>
                        <p>Salt to taste</p>
                        <p>1 tablespoon oil (for marination)</p>
                        <p>1/2 cup diced bell peppers (red, yellow, green)</p>
                        <p>1/2 cup diced onions</p>

                        </div>
                        <figure>
                            <img src={Paneertikka} alt="Paneertikka" />
                        </figure>
                    </div>
                    <div className="recipe-list-branzino">
                        <h2>The Process</h2>
                        <ol className="instructions-branzino">
                        <li>Prepare the Marinade: In a bowl, whisk together the yogurt, gram flour, lemon juice, ginger-garlic paste, turmeric, red chili powder, garam masala, cumin powder, and salt. Add 1 tablespoon of oil and mix well.</li>
                        <li>Marinate the Paneer: Add the paneer cubes, bell peppers, and onions to the marinade. Gently coat everything with the mixture. Cover and let marinate for at least 30 minutes (or up to 2 hours for deeper flavor).</li>
                        <li>Preheat Grill or Oven: Preheat your grill to medium-high heat, or preheat your oven to 400°F (200°C).</li>
                        <li>Assemble Skewers: Thread the marinated paneer, bell peppers, and onion onto skewers, alternating for color and flavor.</li>
                        <li>Cook the Skewers: Grill the skewers for 10-12 minutes, turning occasionally, until the paneer is charred and the veggies are slightly softened. If using the oven, bake on a lined baking sheet for 12-15 minutes, or until golden.</li>
                        <li>Optional Basting: Brush with additional oil or butter halfway through cooking for extra flavor and moisture.</li>
                        <li>Serve: Arrange the Paneer Tikka on a platter, garnished with fresh lemon wedges and a sprinkle of chaat masala if desired.</li>
                        <li>Enjoy: Serve immediately, with mint chutney or your favorite dipping sauce.</li>

                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BranzinoalForno;
