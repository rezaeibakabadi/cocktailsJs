import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from './setDrink.js'
const showDrinks = async(url) =>{
    // fetch
    const data = await fetchDrinks(url);
    // display
    const section = await displayDrinks(data);
    setDrink(section);
}

export default showDrinks;