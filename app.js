const cors = require('cors');
const express = require('express');

const app = express();

//enable cors support
app.use(cors());

//test
app.get('/test', (req, res) => {
	res.send('Hello World!');
});

// test api to send json
app.get('/api', (req, res) => {
  let result = {};
  result = {"hello": "world"}
  res.json(result)
});

// sillyapi/rappername/month,day
app.get('/sillyapi/rappername/:p', (req, res) => {
  const firstNameArray = ['Zero','Hood', 'Rockey', 'Monsta', 'Crunchy', 'Squiggly', 'Tuff', 'Doctor', 'Baby', 'Shiny', 'Loco', 'Bubble', 'Crispy'];
  const lastNameArray = ['Null', 'Bopz', 'Nasty', 'Cake', 'Dollaz', 'Boss', 'Teddy', 'Munchkin', 'Candy', 'Mansion', 'Blowfish', 'Kickz', 'Crunch', 'Juice Box', 'Gansta', 'Child', 'Cheese', 'Kidd', 'Nachoz', 'Sparkle', 'Tiger', 'Playa', 'Shawty', 'Popcorn', 'Kat', 'Cheekz', 'Masta', 'Daddy', 'Momma', 'Pastram', 'Pop', 'Boom' ];
  const paramArray = req.params.p.split(',');
  const month = parseInt(paramArray[0]);
  const day = parseInt(paramArray[1]);
  const firstName = firstNameArray[month];
  const lastName = lastNameArray[day];
  const RapperName = firstName +' '+lastName;
  const result = {"RapperName": RapperName}
  res.json(result)
});

app.get('/sillyapi/indianname/:p', (req, res) => {
  const firstNameArray = ['Zero', 'Kills', 'Runs Against', 'Thunder', 'Chief', 'Standing', 'Broken', 'Red', 'Steals', 'Sitting', 'Crazy', 'Walking', 'Ghost', 'Running', 'Yellow', 'Afraid Of', 'Brown', 'Bear', 'Eagle', 'Jumping', 'Black', 'Poor', 'White', 'Chokecherry', 'Respects', 'Creeping', 'Young', 'Wild', 'Fast', 'Big', 'Blue', 'Little'];
  const lastNameArray = ['Null', 'Buffalo', 'Horse', 'Thunder', 'Pipe', 'Bear', 'Shield', 'Rabbit', 'Nothing', 'Wolf', 'Man', 'Woman', 'Dog']
  const paramArray = req.params.p.split(',');
  const month = parseInt(paramArray[1]);
  const day = parseInt(paramArray[0]);
  const firstName = firstNameArray[month];
  const lastName = lastNameArray[day];
  const IndianName = firstName +' '+lastName;
  const result = {"IndianName": IndianName}
  res.json(result)
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
