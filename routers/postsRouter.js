const express = require("express");

const router = express.Router();

const postsController = require("../controllers/postsController");

router.get("/all-posts", postsController.list);
// Swagger documentation
/**
 * @swagger
 * /posts/all-posts:
 *   get:
 *      description: Used to get a list of all posts
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Success
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/countries", postsController.countries);
// Swagger documentation
/**
 * @swagger
 * /posts/countries:
 *   get:
 *      description: Used to get a list of countries from a dif API
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Success
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/add-post", postsController.addPost);
// Swagger documentation
/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add posts
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - imagePath
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is a sample post
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: abc.png
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '201':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;
