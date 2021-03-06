const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const PORT = 5000;
const authRoutes = require('./Database/User/routes/auth-routes');
const userRoutes = require('./Database/User/routes/index');
const buzzRoutes = require('./Database/Buzz/buzzRoutes');
const complaintRoutes = require('./Database/Complaints/complaintRoutes');
const commentRoutes = require('./Database/Comments/commentRoutes');

const app = express();

let headers = {
    origin: '*',
    methods: 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
    exposedHeaders: ['Access-Control-Allow-Origin'],
}

app.use(cors(headers));

app.use(bodyParser.json({ limit: '10mb' }));


require('./Database/User/passport/google-strategy')(passport);
app.use(passport.initialize());
app.use(passport.session());

require('./Database/Config/cloudinary');
app.use(authRoutes);
app.use(userRoutes);
app.use(buzzRoutes);
app.use(complaintRoutes);
app.use(commentRoutes);



mongoose.connect("mongodb://localhost:27017/ttnd_app", {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.listen(PORT, ()=> {
    console.log(`Server is listening at ${PORT}`)
});