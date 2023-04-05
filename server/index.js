import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postsRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'
import dotenv from 'dotenv'
dotenv.config()
const app= express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postsRoutes)
app.use('/user',usersRoutes)
const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.port ;

mongoose.connect(CONNECTION_URL)
  .then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on ${PORT}`);
    })

  })

  .catch((err)=>{
    console.log(err.message);

  })
//   mongoose.set('useFindAndModify',false)





// import path from 'path';
//    import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// const app = express();

// // var __dirname = path.resolve();

// app.get("/",(req,res)=>{
//     console.log(__dirname);
//     res.sendFile(path.join(__dirname, '/rough.html'));

// })


// app.listen(4000,function(){
//     console.log("successfull");
// })