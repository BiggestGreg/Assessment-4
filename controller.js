module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortune = ["You will have a lucky day", "A pleasent suprise is waiting for you", "You will have a adventure soon"];
  
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
  
        res.status(200).send(randomFortune);
    },

    getFact: (req, res) => {
        const fact = ["The only words Legolas ever spoke to frodo was 'And you have my bow' in the entire trilogy", "Dominos Pizzas busiest day was the day of the O.J. Simpson car chase", "The original recipe for Coca-Cola had cocaine in it", "Canada is south of Detroit"];

        // choose random fact
        let randomIndex = Math.floor(Math.random() * fact.length);
        let randomFact = fact[randomIndex];

        res.status(200).send(randomFact);
    },

    getSuprise: (req, res) => {
        const suprise = ["Boo", "Nobody expects the spanish inquisition", "https://youtu.be/dQw4w9WgXcQ",];

        // choose random suprise
        let randomIndex = Math.floor(Math.random() * suprise.length);
        let randomSuprise = suprise[randomIndex];

        res.status(200).send(randomSuprise);
    },

    getDont: (req, res) => {
        const dont = ["I Said Do Not Press, now you have made me unhappy"];

        // choose random fact
        let randomIndex = Math.floor(Math.random() * dont.length);
        let randomDont = dont[randomIndex];

        res.status(200).send(randomDont);
    },
}