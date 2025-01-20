import React from 'react';
import Thandai from '../../../Assets/HomePage/thandai.jpg';
import './Thandai.css';

const BranzinoalForno = () => {

    return (
        <div className='bgbiriyani'>

            <section id="recipe-branzino">
                <h1>Thandai</h1>
                <div className="description-branzino">
                <p>This classic Indian beverage is a delightful blend of milk, nuts, and aromatic spices, creating a refreshing and invigorating drink! With its rich, creamy texture and a burst of saffron, cardamom, and rose flavors, Thandai offers a taste of India’s vibrant festival culture in every sip.</p> 
                <p>Pressed for time? No worries! You can prepare this cooling and delicious drink with minimal effort, making it a perfect choice for a quick yet indulgent treat that will impress your guests.</p>

                </div>
                <div className="recipe-details-branzino">
                    <ul className='sbcolorindian'>
                    <li><span>Prep Time</span>10 min</li>
                    <li><span>Cook Time</span>5 min</li>
                    <li><span>Total Time</span>15 min</li>

                    </ul>
                </div>
                <div className="recipe-content-branzino">
                    <div className="ing-list-branzino">
                        <h2>The Ingredients</h2>
                        <div className="ingredients-branzino">
                        <p>2 cups full-fat milk</p>
                        <p>1/4 cup almonds, soaked overnight</p>
                        <p>1/4 cup cashews, soaked overnight</p>
                        <p>1 tablespoon melon seeds (optional)</p>
                        <p>1 tablespoon poppy seeds</p>
                        <p>1/2 teaspoon black peppercorns</p>
                        <p>4-5 cardamom pods</p>
                        <p>1-2 tablespoons rose petals (optional)</p>
                        <p>2 tablespoons sugar (or to taste)</p>
                        <p>1/4 teaspoon saffron strands (optional)</p>
                        <p>1 tablespoon water (for soaking saffron)</p>
                        <p>Ice cubes (for serving)</p>

                        </div>
                        <figure>
                            <img src={Thandai} alt="Thandai" />
                        </figure>
                    </div>
                    <div className="recipe-list-branzino">
                        <h2>The Process</h2>
                        <ol className="instructions-branzino">
                        <li>Soak Nuts and Seeds: Soak the almonds, cashews, and melon seeds overnight in water. Soak saffron strands in 1 tablespoon warm water to release the color and aroma.</li>
                        <li>Prepare the Paste: In a blender, combine the soaked almonds, cashews, melon seeds, poppy seeds, black peppercorns, cardamom, and rose petals (if using). Add a little water to make a smooth paste.</li>
                        <li>Boil Milk: In a saucepan, bring the milk to a boil. Once boiling, reduce the heat and simmer for 2-3 minutes, allowing it to cool slightly.</li>
                        <li>Mix the Paste: Add the prepared nut and seed paste to the warm milk, stirring well to combine. Add sugar and saffron-infused water. Stir until the sugar is dissolved.</li>
                        <li>Chill: Let the *Thandai* mixture cool down to room temperature, then refrigerate for at least 1-2 hours for the flavors to meld.</li>
                        <li>Serve: Strain the *Thandai* through a fine sieve into glasses filled with ice cubes.</li>
                        <li>Enjoy: Garnish with extra rose petals or crushed pistachios (optional), and serve chilled for a refreshing treat.</li>

                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BranzinoalForno;
