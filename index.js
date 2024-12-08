import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import postRouter from "./routes/postRoutes.js";
import userRouter from "./routes/userRoutes.js";
import session from 'express-session';
import redis from "redis";
import {RedisStore} from "connect-redis";
import cors from 'cors'

let redisClient = redis.createClient({
  socket: {
    host: config.REDIS_URL,
    port: config.REDIS_PORT,
  },
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));
redisClient.connect(console.log(`Redis connected succesfully`)).catch(console.error); // Ensure the client connects asynchronously


const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors({}));
app.use(session({
  store: new RedisStore({client:redisClient}),
  secret: config.SESSION_SECRET,
  cookie:{
    secure : false,
    resave : false,
    httpOnly:true,
    saveUninitialized:false,
    maxAge:30000
  }
}));

app.enable("trust proxy");

app.use("/api/posts",postRouter);

app.use("/api/users",userRouter)

const mongoUrl = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}/?authSource=admin`;

mongoose
  .connect(mongoUrl)
  .then(()=>console.log("Successfully connected to DB.."))
  .catch((e)=>console.log(e));


const port = process.env.PORT || 3000;


app.get("/api",(req,res)=>{
    res.send("<h1>Hiii There!!!</h1>");
})

app.listen(port , ()=>{
    console.log(`Your application is running on port ${port}`)
})