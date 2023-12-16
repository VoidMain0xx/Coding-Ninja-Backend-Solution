import express from "express";
import {
    getTweets,
    createTweet,
  } from "../tweet/tweet.controller.js";

const Router = express.Router();

Router.get('/' , getTweets);
Router.post('/' , createTweet);

export default Router;