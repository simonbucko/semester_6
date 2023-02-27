import { Router } from "express";
const router = Router();

//this is yaml format

/**
 * @openapi
 * /api/users:
 *    get:
 *      summary: Get list of users
 *      description: Retrieves a list of all users in the system
 *      responses:
 *        '200':
 *          description: Successful response
 */
router.get("/api/users", (req, res) => {
  res.json("users");
});

export default router;
