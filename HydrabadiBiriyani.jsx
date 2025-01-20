import React from 'react';
import hyderabadibiriyani from '../../../Assets/HomePage/hyderabadibiriyani.jpg';
import './HydrabadiBiriyani.css';

const BranzinoalForno = () => {

    return (
        <div className='bgbiriyani'>

            <section id="recipe-branzino">
                <h1>Hyderabadi Biriyani</h1>
                <div className="description-branzino">
                <p>This iconic Indian dish brings together fragrant basmati rice, tender marinated meat, and a medley of spices for a flavorful and aromatic experience! Hyderabadi Biryani is a rich, layered dish that perfectly balances warmth, spice, and subtle sweetness, offering a taste of India in every bite.</p> 
                <p>Short on prep time? No worries! With a few key ingredients and minimal effort, you can create this classic dish at home. It's a perfect choice for a hearty, impressive meal that will leave your guests asking for seconds.</p>

                </div>
                <div className="recipe-details-branzino">
                    <ul className='sbcolorindian'>
                    <li><span>Prep Time</span>30 min</li>
                    <li><span>Cook Time</span>1 hr</li>
                    <li><span>Total Time</span>1 hr 30 min</li>

                    </ul>
                </div>
                <div className="recipe-content-branzino">
                    <div className="ing-list-branzino">
                        <h2>The Ingredients</h2>
                        <div className="ingredients-branzino">
                        <p>500 grams basmati rice, soaked for 30 minutes</p>
                        <p>500 grams chicken or lamb, cut into pieces</p>
                        <p>1 cup yogurt</p>
                        <p>2 large onions, thinly sliced and fried until golden brown</p>
                        <p>3-4 green chilies, slit</p>
                        <p>1 tablespoon ginger-garlic paste</p>
                        <p>1/4 cup fresh mint leaves</p>
                        <p>1/4 cup fresh coriander leaves, chopped</p>
                        <p>1 teaspoon red chili powder</p>
                        <p>1/2 teaspoon turmeric powder</p>
                        <p>1 teaspoon garam masala powder</p>
                        <p>1/2 teaspoon cumin powder</p>
                        <p>3-4 whole cloves</p>
                        <p>2-3 green cardamom pods</p>
                        <p>1-2 bay leaves</p>
                        <p>1 cinnamon stick</p>
                        <p>Salt to taste</p>
                        <p>4 cups water (for cooking rice)</p>
                        <p>2-3 tablespoons ghee or oil</p>
                        <p>Saffron strands soaked in 2 tablespoons warm milk (optional for aroma and color)</p>

                        </div>
                        <figure>
                            <img src={hyderabadibiriyani} alt="hyderabadibiriyani" />
                        </figure>
                    </div>
                    <div className="recipe-list-branzino">
                        <h2>The Process</h2>
                        <ol className="instructions-branzino">
                        <li>Marinate the Meat: In a large bowl, mix yogurt, red chili powder, turmeric, cumin powder, garam masala, ginger-garlic paste, mint, and coriander leaves. Add the meat pieces, coat well, and let marinate for at least 1 hour (or overnight for best flavor).</li>
                        <li>Prepare the Rice: In a large pot, bring water to a boil and add salt, cloves, cardamom, bay leaves, and cinnamon. Add the soaked basmati rice and cook until it is about 70% cooked. Drain and set aside.</li>
                        <li>Layer the Biryani: In a large, heavy-bottomed pot or a biryani dish, spread a layer of marinated meat at the bottom. Sprinkle half of the fried onions over the meat. Then add a layer of half-cooked rice, followed by a drizzle of saffron milk (optional), ghee, and a few mint and coriander leaves.</li>
                        <li>Repeat the Layers: Add another layer of meat and fried onions, followed by the remaining rice. Top with the remaining saffron milk, ghee, and herbs.</li>
                        <li>Cook on Low Heat: Cover the pot with a tight-fitting lid, and cook on low heat (you can use a griddle underneath to prevent burning) for 30-40 minutes, allowing the flavors to meld and the rice to finish cooking.</li>
                        <li>Serve: Carefully fluff the biryani to combine layers, and transfer to a serving dish.</li>
                        <li>Enjoy: Serve hot with raita, salad, or your favorite side dish.</li>

                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BranzinoalForno;
