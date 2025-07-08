function feedBunny(food) {
  const bunnyImage = document.getElementById("bunnyImage");
  const reactionText = document.getElementById("reactionText");

  const reactions = {
    carrot: { image: "images/happybunny.png", text: "Yum! Carrots are a great treat!" },
    garlic: { image: "images/upsetbunny.png", text: "Oh no! Garlic is toxic to bunnies!" },
    bokchoy: { image: "images/happybunny.png", text: "Bok choy is a healthy leafy green!" },
    hay: { image: "images/happybunny.png", text: "Hay is essential for my diet!" },
    spinach: { image: "images/happybunny.png", text: "Spinach is good in moderation!" },
    chocolate: { image: "images/upsetbunny.png", text: "Chocolate is very toxic to bunnies!" },
    iceberglettuce: { image: "images/upsetbunny.png", text: "Iceberg lettuce can cause tummy trouble!" },
    pellets: { image: "images/happybunny.png", text: "Pellets give me important nutrients!" },
    meat: { image: "images/upsetbunny.png", text: "I'm a herbivore — no meat for me!" },
    banana: { image: "images/happybunny.png", text: "Bananas are sweet treats — only sometimes!" },
    strawberry: { image: "images/happybunny.png", text: "Strawberries are tasty, but only in small amounts!" },
    avocodo: { image: "images/upsetbunny.png", text: "Avocados are toxic to bunnies!" },
    onion: { image: "images/upsetbunny.png", text: "Onions are unsafe for rabbits!" },
    bread: { image: "images/upsetbunny.png", text: "Bread isn’t part of a bunny diet!" },
    stick: { image: "images/upsetbunny.png", text: "Sticks could hurt my tummy!" },
    rhubarb: { image: "images/upsetbunny.png", text: "Rhubarb is dangerous for bunnies!" },
    seedsandnuts: { image: "images/upsetbunny.png", text: "Nuts and seeds can be a choking hazard!" },
    cheese: { image: "images/upsetbunny.png", text: "Bunnies don’t eat dairy!" },
    peanutbutter: { image: "images/upsetbunny.png", text: "Too sticky and fatty for a bunny!" },
    eggs: { image: "images/upsetbunny.png", text: "No eggs for me, I’m vegan by nature!" },
  };

  const reaction = reactions[food];

  if (reaction) {
    bunnyImage.src = reaction.image;
    reactionText.textContent = reaction.text;

    setTimeout(() => {
      bunnyImage.src = "images/neutralbunny.png";
      reactionText.textContent = "";
    }, 3000); // Reset after 3 seconds
  }
}
