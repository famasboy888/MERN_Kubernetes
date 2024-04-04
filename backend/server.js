require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workoutRouter');
const mongoose = require('mongoose');
const cors = require('cors')

const mongo_uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASS+process.env.MONGO_API

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("I am endpoint: 1")
})

app.listen(4000, () => {
console.log('listening for requests on port 4000')
})

// // Allow to get post Request body
// app.use(express.json());

// // Adding a middle ware
// app.use((request, response, next) => {
//     console.log(request.path, request.method);
//     next();
// })

// //Routes
// app.use('/api/workouts', workoutRoutes);

// // Connect to db
// mongoose.connect(mongo_uri)
//     .then(() => {
//         app.listen(process.env.PORT, () => {
//             console.log("Listening to port 4000.");
//         });
//     })
//     .catch((e) => {
//         console.log(e);
//     });



