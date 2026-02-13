// src/app.js
import express from "express";

import usersRoutes from "./routes/users.routes.js";
import postsRoutes from "./routes/posts.routes.js";
import commentsRoutes from "./routes/comments.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

// Home page route
app.get("/", (req, res) => {
  res.json({
    message: "Blog API with Mongoose",
    version: "1.0.0",
    endpoints: {
      users: {
        getAll: "GET /api/users",
        getById: "GET /api/users/:userId",
        create: "POST /api/users",
        update: "PUT /api/users/:userId",
        delete: "DELETE /api/users/:userId",
        filters: {
          byRole: "GET /api/users?role=student",
          byCity: "GET /api/users?city=Toronto",
          bySkill: "GET /api/users?skill=mongodb"
        }
      },
      posts: {
        getAll: "GET /api/posts",
        getById: "GET /api/posts/:postId",
        getFull: "GET /api/posts/:postId/full (includes author and comments)",
        create: "POST /api/posts",
        update: "PUT /api/posts/:postId",
        delete: "DELETE /api/posts/:postId",
        filters: {
          byStatus: "GET /api/posts?status=published",
          byTag: "GET /api/posts?tag=mongodb"
        }
      },
      comments: {
        getAll: "GET /api/comments",
        getById: "GET /api/comments/:commentId",
        create: "POST /api/comments",
        update: "PUT /api/comments/:commentId",
        delete: "DELETE /api/comments/:commentId",
        filters: {
          byPost: "GET /api/comments?postId=p2001",
          byAuthor: "GET /api/comments?authorId=u1001",
          byFlagged: "GET /api/comments?flagged=true"
        }
      }
    },
    examples: {
      users: "/api/users",
      singleUser: "/api/users/u1001",
      posts: "/api/posts",
      fullPost: "/api/posts/p2001/full",
      comments: "/api/comments"
    }
  });
});

app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);

app.use(errorHandler);

export default app;