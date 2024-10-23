// scripts/aquariumData.js

export const database = {
  fish: [
    {
      name: "Nemo",
      species: "Clownfish",
      length: 3,
      location: "Great Barrier Reef",
      diet: "Omnivore",
      image: "https://example.com/images/nemo.jpg"
    },
    {
      name: "Dory",
      species: "Blue Tang",
      length: 5,
      location: "Great Barrier Reef",
      diet: "Omnivore",
      image: "https://example.com/images/dory.jpg"
    },
    {
      name: "Bruce",
      species: "Great White Shark",
      length: 15,
      location: "Coastal waters of Australia",
      diet: "Carnivore",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Great_white_shark.jpg/800px-Great_white_shark.jpg"
    },
    {
      name: "Marlin",
      species: "Regal Blue Tang",
      length: 6,
      location: "Caribbean Sea",
      diet: "Omnivore",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paracanthurus_hepatus_1.jpg/800px-Paracanthurus_hepatus_1.jpg"
    },
    {
      name: "Gill",
      species: "Moorish Idol",
      length: 4,
      location: "Tropical waters of the Atlantic and Pacific",
      diet: "Omnivore",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Moorish_Idol.jpg/800px-Moorish_Idol.jpg"
    },
    {
      name: "Bloat",
      species: "Porcupine Pufferfish",
      length: 8,
      location: "Tropical waters of the Atlantic and Pacific",
      diet: "Omnivore",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Porcupine_Pufferfish.jpg/800px-Porcupine_Pufferfish.jpg"
    },
    {
      name: "Peach",
      species: "Starfish",
      length: 2,
      location: "Tropical waters of the Atlantic and Pacific",
      diet: "Detritivore",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Starfish.jpg/800px-Starfish.jpg"
    }
  ],
  tips: [
    {
      tip: "Ensure the water temperature is consistent for the species you keep."
    },
    {
      tip: "Regularly test water parameters like pH and nitrogen levels."
    },
    {
      tip: "Change 20-25% of the water every two weeks to keep the environment clean."
    },
    {
      tip: "Provide adequate lighting based on the needs of your aquarium plants and animals."
    },
    {
      tip: "Quarantine new fish separately before introducing them to your main tank to prevent the spread of diseases."
    }
  ],
  locations: [
    {
      id: 1,
      name: "Great Barrier Reef",
      description: "Located off the coast of Queensland, Australia, home to a diverse range of marine life."
    },
    {
      id: 2,
      name: "Amazon River",
      description: "This river flows through South America and has some of the most biodiverse habitats in the world."
    },
    {
      id: 3,
      name: "Red Sea",
      description: "Known for its clear blue water and coral reefs, situated between Africa and Asia."
    },
    {
      id: 4,
      name: "Bali",
      description: "An Indonesian island known for its forested volcanic mountains and vibrant coral reefs."
    }
  ]
}

