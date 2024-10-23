// scripts/tipList.js
import { database } from './aquariumData.js';

export const tipList = () => {
    const tipsData = database.tips;  // Access the array of tip objects
    let tipsHTML = "";  // Initialize an empty string to accumulate HTML

    // Iterate over each tip object to create an HTML string
    for (let i = 0; i < tipsData.length; i++) {
        tipsHTML += `
            <article class="tips">
                <section class="tip">
                    <p>${tipsData[i].tip}</p>
                </section>
            </article>
        `;
    }

    return tipsHTML;  // Return the accumulated HTML string
}
