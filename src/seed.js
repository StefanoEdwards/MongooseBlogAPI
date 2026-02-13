// src/seed.js
import "dotenv/config";
import { connectToMongo } from "./config/db.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import Comment from "./models/Comment.js";
import mongoose from "mongoose";

const users = [
  {
    userId: "u1001",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "student",
    address: {
      city: "Toronto",
      province: "Ontario",
      country: "Canada"
    },
    github: "alice_codes",
    skills: ["javascript", "mongodb", "react"],
    stats: {
      posts: 5,
      comments: 12
    },
    badges: ["early-adopter", "helpful"],
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    userId: "u1002",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "teacher",
    address: {
      city: "Vancouver",
      province: "British Columbia",
      country: "Canada"
    },
    github: "bob_teaches",
    skills: ["python", "mongodb", "nodejs"],
    stats: {
      posts: 8,
      comments: 20
    },
    badges: ["expert", "mentor"],
    createdAt: "2024-01-10T09:00:00.000Z"
  },
  {
    userId: "u1003",
    name: "Carol Williams",
    email: "carol@example.com",
    role: "student",
    address: {
      city: "Montreal",
      province: "Quebec",
      country: "Canada"
    },
    github: "carol_dev",
    skills: ["javascript", "css", "html"],
    stats: {
      posts: 3,
      comments: 8
    },
    badges: ["beginner"],
    createdAt: "2024-02-01T11:00:00.000Z"
  },
  {
    userId: "u1004",
    name: "David Lee",
    email: "david@example.com",
    role: "student",
    address: {
      city: "Toronto",
      province: "Ontario",
      country: "Canada"
    },
    github: "david_codes",
    skills: ["mongodb", "express", "nodejs"],
    stats: {
      posts: 6,
      comments: 15
    },
    badges: ["contributor"],
    createdAt: "2024-01-20T14:00:00.000Z"
  }
];

const posts = [
  {
    postId: "p2001",
    authorId: "u1001",
    title: "Getting Started with MongoDB",
    content: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. In this post, we'll explore the basics of MongoDB and how to get started.",
    tags: ["mongodb", "database", "tutorial"],
    status: "published",
    views: 150,
    createdAt: "2024-02-10T10:00:00.000Z",
    editedAt: "2024-02-10T10:00:00.000Z"
  },
  {
    postId: "p2002",
    authorId: "u1002",
    title: "Node.js Best Practices",
    content: "Learn about the best practices for building scalable Node.js applications, including error handling, async/await patterns, and more.",
    tags: ["nodejs", "javascript", "bestpractices"],
    status: "published",
    views: 200,
    createdAt: "2024-02-08T09:00:00.000Z",
    editedAt: "2024-02-08T09:00:00.000Z"
  },
  {
    postId: "p2003",
    authorId: "u1001",
    title: "Building REST APIs with Express",
    content: "Express is a minimal and flexible Node.js web application framework. This guide covers how to build RESTful APIs using Express.",
    tags: ["express", "api", "nodejs"],
    status: "published",
    views: 180,
    createdAt: "2024-02-05T11:30:00.000Z",
    editedAt: "2024-02-05T11:30:00.000Z"
  },
  {
    postId: "p2004",
    authorId: "u1003",
    title: "CSS Grid Layout Tutorial",
    content: "CSS Grid is a powerful layout system. Learn how to create responsive layouts using CSS Grid.",
    tags: ["css", "frontend", "design"],
    status: "draft",
    views: 50,
    createdAt: "2024-02-12T15:00:00.000Z",
    editedAt: "2024-02-12T15:00:00.000Z"
  },
  {
    postId: "p2005",
    authorId: "u1004",
    title: "Introduction to Mongoose ODM",
    content: "Mongoose provides a schema-based solution to model your application data with MongoDB. This post introduces Mongoose basics.",
    tags: ["mongodb", "mongoose", "nodejs"],
    status: "published",
    views: 120,
    createdAt: "2024-02-11T13:00:00.000Z",
    editedAt: "2024-02-11T13:00:00.000Z"
  }
];

const comments = [
  {
    commentId: "c3001",
    postId: "p2001",
    authorId: "u1002",
    text: "Great introduction! Very helpful for beginners.",
    isFlagged: false,
    likeCount: 5,
    mentions: ["u1001"],
    createdAt: "2024-02-10T11:00:00.000Z"
  },
  {
    commentId: "c3002",
    postId: "p2001",
    authorId: "u1003",
    text: "Can you explain more about indexes?",
    isFlagged: false,
    likeCount: 2,
    mentions: ["u1001"],
    createdAt: "2024-02-10T12:00:00.000Z"
  },
  {
    commentId: "c3003",
    postId: "p2001",
    authorId: "u1004",
    text: "This helped me understand collections better!",
    isFlagged: false,
    likeCount: 3,
    mentions: [],
    createdAt: "2024-02-10T14:00:00.000Z"
  },
  {
    commentId: "c3004",
    postId: "p2002",
    authorId: "u1001",
    text: "The async/await section is excellent!",
    isFlagged: false,
    likeCount: 8,
    mentions: ["u1002"],
    createdAt: "2024-02-08T10:00:00.000Z"
  },
  {
    commentId: "c3005",
    postId: "p2002",
    authorId: "u1004",
    text: "Could you add examples for error handling?",
    isFlagged: false,
    likeCount: 4,
    mentions: ["u1002"],
    createdAt: "2024-02-08T11:30:00.000Z"
  },
  {
    commentId: "c3006",
    postId: "p2003",
    authorId: "u1003",
    text: "Very clear explanation of REST principles.",
    isFlagged: false,
    likeCount: 6,
    mentions: [],
    createdAt: "2024-02-05T13:00:00.000Z"
  },
  {
    commentId: "c3007",
    postId: "p2005",
    authorId: "u1002",
    text: "Nice work covering Mongoose schemas!",
    isFlagged: false,
    likeCount: 7,
    mentions: ["u1004"],
    createdAt: "2024-02-11T14:00:00.000Z"
  },
  {
    commentId: "c3008",
    postId: "p2001",
    authorId: "u1001",
    text: "This is spam content.",
    isFlagged: true,
    likeCount: 0,
    mentions: [],
    createdAt: "2024-02-10T16:00:00.000Z"
  }
];

async function seedDatabase() {
  try {
    await connectToMongo();
    
    // Clear existing data
    console.log("Clearing existing data...");
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});
    
    // Insert seed data
    console.log("Inserting users...");
    await User.insertMany(users);
    console.log(`✓ Inserted ${users.length} users`);
    
    console.log("Inserting posts...");
    await Post.insertMany(posts);
    console.log(`✓ Inserted ${posts.length} posts`);
    
    console.log("Inserting comments...");
    await Comment.insertMany(comments);
    console.log(`✓ Inserted ${comments.length} comments`);
    
    console.log("\n✅ Database seeded successfully!");
    
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
    process.exit(0);
  }
}

seedDatabase();