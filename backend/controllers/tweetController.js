import { Tweet } from "../models/tweetSchema.js";
import { ObjectId } from 'mongodb';
import { User } from "../models/userSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id || !ObjectId.isValid(id)) {
      return res.status(401).json({
        message: "All fields required",
        success: false,
      });
    }

    await Tweet.create({
      description,
      userId: id,
    });

    return res.status(201).json({
      message: "Tweet created successfully.",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
}

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    if (!id || !ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid tweet ID.",
        success: false
      });
    }

    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet deleted successfully.",
      success: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
}


export const likeOrDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    // const user = await User.findById(loggedInUserId);
    // if (!user) {
    //   return res.status(404).json({
    //     message: "User not found",
    //     success: false,
    //   });
    // }


    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }


    if (tweet.like.includes(loggedInUserId)) {
      await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: loggedInUserId } });
      return res.status(200).json({
        message: "Tweet disliked successfully",
        success: true,
      });
    } else {
      await Tweet.findByIdAndUpdate(tweetId, { $push: { like: loggedInUserId } });
      return res.status(200).json({
        message: "Tweet liked successfully",
        success: true,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
}


export const getAllTweets = async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID.",
        success: false,
      });
    }

    const loggedInUser = await User.findById(id);
    if (!loggedInUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    const loggedInUserTweets = await Tweet.find({ userId: id });
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      })
    );

    return res.status(200).json({
      tweets: loggedInUserTweets.concat(...followingUserTweet),
    });
  } catch (error) {
    console.error(error);
  }
};




export const  getFollowingTweets = async ( req, res ) => {
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const followingUserTweet = await Promise.all(loggedInUser.following.map((otherUsersId) => {
      return Tweet.find({ userId: otherUsersId });
    }));
    return res.status(200).json({
      tweets:[].concat(...followingUserTweet)
    });
  } catch (error) {
    console.log(error);
    
  }
}