const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
const baseURL = `http://localhost:4000/api/friends`
const createfriend = body => axios.post(baseURL, body).then(housesCallback).catch(errCallback)
const deletefriend= id => axios.delete(`${baseURL}/${id}`).then(housesCallback).catch(errCallback)
const updateFriendlist = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(housesCallback).catch(errCallback)


const{ deletefriend, createfriend, updateFriendlist} = require('./controller')


app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
});

app.get("/api/fortune/", (req, res) => {
  const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
       "A dubious friend may be an enemy in camouflage.",
       "A faithful friend is a strong defense.",
       "A feather in the hand is better than a bird in the air.",
       "A friend asks only for your time not your money."
      ];
  let random= Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[random];
  res.status(200).send(randomFortune);
});




app.post('/api/houses', createfriend)
app.put('/api/houses/:id', updateFriendlist)
app.delete('/api/houses/:id', deletefriend)






app.listen(4000, () => console.log("Server running on 4000"));
