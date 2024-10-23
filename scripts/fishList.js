// scripts/fishList.js
import { database } from './aquariumData.js';

export const fishList = () => {
    const fishData = database.fish;
    console.log('Fish data:', fishData); // Check if data is being loaded
    const fishHTML = fishData.map(fish => {
        return `
            <div class="fish-card">
                <img src="${fish.image}" alt="${fish.name}" class="fish-image">
                <h3>${fish.name}</h3>
                <p>Species: ${fish.species}</p>
                <p>Size: ${fish.length} inches</p>
                <p>Diet: ${fish.diet}</p>
                <p>Location: ${fish.location}</p>
            </div>
        `;
    }).join('');  // Join all individual fish HTML strings into one string

    return fishHTML;

}