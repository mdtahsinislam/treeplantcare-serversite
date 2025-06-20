// const express = require('express');
// const cors =require('cors');
// const app=express();
// const port = process.env.PORT || 3000;


// app.use (cors());
// app.use(express.json());


// //my .env file code

// DB_USER="plantdb"
// DB_PASS="d7aINwYqqVEbsuYa"


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);










// app.get('/',(req,res)=>{
//     res.send('Planting tree is good for Environment.')
// });

// app.listen(port,()=>{
//     console.log(`Planting tree in good  on port ${port}`)
// })





/**Chat gpt code */


// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const      .collection('users')
// const client = new MongoClient(uri, {
//   serverApi: ServerApiVersion.v1,
//   //strict: true,
//   //deprecationErrors: true,
// });

// async function run() {
//   try {
//     await client.connect();
//     const db = client.db("treePlantCareDB");
//     const plantCollection = db.collection("plants");

//     // POST: Add plant
//     app.post('/plants', async (req, res) => {
//       const newPlant = req.body;
//       const result = await plantCollection.insertOne(newPlant);
//       res.send(result);
//     });

//     // GET: All plants
//     app.get('/plants', async (req, res) => {
//       const plants = await plantCollection.find().toArray();
//       res.send(plants);
//     });

//     // GET: Single plant
//     app.get('/plants/:id', async (req, res) => {
//       const id = req.params.id;
//       const plant = await plantCollection.findOne({ _id: new ObjectId(id) });
//       res.send(plant);
//     });

// //user Api
// app.post('/users',async(req,res)=>{
//   const userProfile=req.body;
//   console.log(userProfile);
//   const result=await usersCollection.insertOne(userProfile);
//   res.send(result);
// })

//     app.get('/', (req, res) => {
//       res.send('Planting tree is good for Environment.');
//     });

//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });

//   } catch (error) {
//     console.error(error);
//   }
// }

// run();


///final code

// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // MongoDB URI
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//   serverApi: ServerApiVersion.v1,
// });

// async function run() {
//   try {
//     await client.connect();

//     const db = client.db("treePlantCareDB");
//     const plantCollection = db.collection("plants");
//     const usersCollection = db.collection("users"); // ✅ FIXED: defined usersCollection

//     // 🌱 POST: Add new plant
//     app.post('/plants', async (req, res) => {
//       const newPlant = req.body;
//       const result = await plantCollection.insertOne(newPlant);
//       res.send(result);
//     });

//     // 🌱 GET: All plants
//     app.get('/plants', async (req, res) => {
//       const plants = await plantCollection.find().toArray();
//       res.send(plants);
//     });

//     // 🌱 GET: Single plant by ID
//     app.get('/plants/:id', async (req, res) => {
//       const id = req.params.id;
//       const plant = await plantCollection.findOne({ _id: new ObjectId(id) });
//       res.send(plant);
//     });

//     // 👤 POST: Save user profile
//     app.post('/users', async (req, res) => {
//       const userProfile = req.body;
//       console.log("User profile to save:", userProfile);
//       const result = await usersCollection.insertOne(userProfile);
//       res.send(result);
//     });

//     // Root
//     app.get('/', (req, res) => {
//       res.send('🌳 Tree Plant Care API Running');
//     });

//     app.listen(port, () => {
//       console.log(`✅ Server is running on port ${port}`);
//     });
//   } catch (error) {
//     console.error("❌ Server Error:", error);
//   }
// }

// run();










// server.js

// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // MongoDB URI from .env
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//   serverApi: ServerApiVersion.v1,
// });

// async function run() {
//   try {
//     await client.connect();

//     const db = client.db("treePlantCareDB");
//     const plantCollection = db.collection("plants");
//     const usersCollection = db.collection("users");

//     // 🌱 POST: Save new plant
//     app.post('/plants', async (req, res) => {
//       const newPlant = req.body;
//       const result = await plantCollection.insertOne(newPlant);
//       res.send(result);
//     });

//     // 🌱 GET: All plants
//     app.get('/plants', async (req, res) => {
//       const plants = await plantCollection.find().toArray();
//       res.send(plants);
//     });

//     // 🌱 GET: Single plant by ID
//     app.get('/plants/:id', async (req, res) => {
//       const id = req.params.id;
//       const plant = await plantCollection.findOne({ _id: new ObjectId(id) });
//       res.send(plant);
//     });

//     // 👤 POST: Save user profile
//     app.post('/users', async (req, res) => {
//       const userProfile = req.body;
//       console.log("Saving user to MongoDB:", userProfile);
//       const result = await usersCollection.insertOne(userProfile);
//       res.send(result);
//     });

//     // Root route
//     app.get('/', (req, res) => {
//       res.send('🌳 Tree Plant Care API Running');
//     });

//     app.listen(port, () => {
//       console.log(`✅ Server is running on port ${port}`);
//     });
//   } catch (error) {
//     console.error("❌ Server Error:", error);
//   }
// }

// run();



////index.js

// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();
// const port = process.env.PORT || 3000; // Use port from .env or default to 3000

// // Middleware
// app.use(cors()); // Enable CORS for all routes
// app.use(express.json()); // Parse JSON request bodies

// // MongoDB URI from .env
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the MongoDB server
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("✅ Successfully connected to MongoDB!");

//     // Get database and collections
//     const db = client.db("treePlantCareDB");
//     const plantCollection = db.collection("plants");
//     const usersCollection = db.collection("users");

//     // 🌱 POST: Save new plant
//     // Route to add a new plant to the database
//     app.post('/plants', async (req, res) => {
//       const newPlant = req.body; // Get plant data from request body
//       const result = await plantCollection.insertOne(newPlant); // Insert the new plant
//       res.send(result); // Send the result of the insertion
//     });

//     // 🌱 GET: All plants
//     // Route to retrieve all plants from the database
//     app.get('/plants', async (req, res) => {
//       const plants = await plantCollection.find().toArray(); // Find all plants and convert to array
//       res.send(plants); // Send the array of plants
//     });

//     // 🌱 GET: Single plant by ID
//     // Route to retrieve a single plant by its unique ID
//     app.get('/plants/:id', async (req, res) => {
//       const id = req.params.id; // Get the plant ID from URL parameters
//       const plant = await plantCollection.findOne({ _id: new ObjectId(id) }); // Find plant by ObjectId
//       res.send(plant); // Send the found plant
//     });

//     // 👤 POST: Save user profile
//     // Route to save a new user profile to the database
//     app.post('/users', async (req, res) => {
//       const userProfile = req.body; // Get user profile data from request body
//       console.log("Saving user to MongoDB:", userProfile); // Log the profile being saved
//       const result = await usersCollection.insertOne(userProfile); // Insert the user profile
//       res.send(result); // Send the result of the insertion
//     });








// /


// // ✅ Backend route in index.js (Server-side: filter by userEmail if provided)

// app.get('/plants', async (req, res) => {
//   try {
//     const email = req.query.email;
//     const query = email ? { userEmail: email } : {}; // Filter only if email is given
//     const result = await plantCollection.find(query).toArray();
//     res.send(result);
//   } catch (error) {
//     console.error("Error in GET /plants:", error);
//     res.status(500).send({ error: "Something went wrong" });
//   }
// });


//     // Root route
//     // Basic route to confirm API is running
//     app.get('/', (req, res) => {
//       res.send(' Tree Plant Care API Running');
//     });

//     // Start the server
//     app.listen(port, () => {
//       console.log(`✅ Server is running on port ${port}`);
//     });

//   } catch (error) {
//     // Catch any errors during connection or server startup
//     console.error("❌ Server Error:", error);
//     process.exit(1); // Exit process with failure code
//   }
// }

// // Execute the run function to start the server
// run();






////index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000; // Use port from .env or default to 3000

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// MongoDB URI from .env
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the MongoDB server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB!");

    // Get database and collections
    const db = client.db("treePlantCareDB");
    const plantCollection = db.collection("plants");
    const usersCollection = db.collection("users");

    // 🌱 POST: Save new plant
    // Route to add a new plant to the database
    app.post('/plants', async (req, res) => {
      const newPlant = req.body; // Get plant data from request body
      const result = await plantCollection.insertOne(newPlant); // Insert the new plant
      res.send(result); // Send the result of the insertion
    });

    // 🌱 GET: All plants
    // Route to retrieve all plants from the database *****
    // app.get('/plants', async (req, res) => {
    //   const plants = await plantCollection.find().toArray(); // Find all plants and convert to array
    //   res.send(plants); // Send the array of plants
    // });

    // ✅ KEEP THIS ONLY***
app.get('/plants', async (req, res) => {
  const email = req.query.email;
  const query = email ? { userEmail: email } : {};
  const result = await plantCollection.find(query).toArray();
  res.send(result);
});



// // DELETE a plant************
// app.delete('/plants/:id', async (req, res) => {
//   const id = req.params.id;
//   const result = await plantCollection.deleteOne({ _id: new ObjectId(id) });
//   res.send(result);
// });

// // UPDATE a plant
// app.put('/plants/:id', async (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await plantCollection.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: updatedData }
//   );

//   res.send(result);
// });


    // 🌱 GET: Single plant by ID
    // Route to retrieve a single plant by its unique ID
    app.get('/plants/:id', async (req, res) => {
      const id = req.params.id; // Get the plant ID from URL parameters
      const plant = await plantCollection.findOne({ _id: new ObjectId(id) }); // Find plant by ObjectId
      res.send(plant); // Send the found plant
    });

    // 👤 POST: Save user profile
    // Route to save a new user profile to the database
    app.post('/users', async (req, res) => {
      const userProfile = req.body; // Get user profile data from request body
      console.log("Saving user to MongoDB:", userProfile); // Log the profile being saved
      const result = await usersCollection.insertOne(userProfile); // Insert the user profile
      res.send(result); // Send the result of the insertion
    });





// app.get('/plants', async (req, res) => {**********
//   const email = req.query.email;
//   const query = email ? { userEmail: email } : {};
//   const result = await plantCollection.find(query).toArray();
//   res.send(result);
// });

// app.delete('/plants/:id', async (req, res) => {
//   const id = req.params.id;
//   const result = await plantCollection.deleteOne({ _id: new ObjectId(id) });
//   res.send(result);
// });

// DELETE a plant
app.delete('/plants/:id', async (req, res) => {
  const id = req.params.id;
  const result = await plantCollection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
});

// UPDATE a plant edited

// app.put('/plants/:id', async (req, res) => {**********
//   const id = req.params.id;
//   const updatedData = req.body;

//   console.log("Updating plant:", id, updatedData); // ✅ ADD THIS LINE for debugging

//   const result = await plantCollection.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: updatedData }
//   );

//   res.send(result);
// });



app.put('/plants/:id', async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  console.log("Updating plant:", id, updatedData); // 👈 log input
  const result = await plantCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );
  console.log("Update result:", result); // 👈 log result from MongoDB

  res.send(result);
});








// app.put('/plants/:id', async (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await plantCollection.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: updatedData }
//   );

//   res.send(result);
// });*****

// app.put('/plants/:id', async (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await plantCollection.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: updatedData }
//   );
//   res.send(result);
// });




    // Root route
    // Basic route to confirm API is running
    app.get('/', (req, res) => {
      res.send(' Tree Plant Care API Running');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });

  } catch (error) {
    // Catch any errors during connection or server startup
    console.error("❌ Server Error:", error);
    process.exit(1); // Exit process with failure code
  }
}

// Execute the run function to start the server
run();


