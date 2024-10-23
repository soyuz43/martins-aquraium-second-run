// scripts/locationList.js
import { database } from './aquariumData.js';

export const locationList = () => {
    const locationsData = database.locations;  // Access the array of location objects

    // Map over each location object to create an HTML string
    const locationsHTML = locationsData.map(location => {
        return `
            <article class="locations">
                <section class="location">
                    <h2>${location.name}</h2>
                    <p>${location.description}</p>
                </section>
            </article>
        `;
    }).join('');  // Join all individual location HTML strings into one string

    return locationsHTML;
}
