const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Ye line Hop se aapka database link uthayegi
const mongoURI = process.env.MONGODB_URI; 

if (!mongoURI) {
    console.error("❌ Error: MONGODB_URI nahi mila! Hop settings check karein.");
} else {
    mongoose.connect(mongoURI)
        .then(() => console.log("✅ Database Connected Successfully"))
        .catch(err => console.log("❌ DB Error:", err));
}

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('🚀 Server is running on port 3000'));
