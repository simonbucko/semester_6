import { Router } from "express";
import {
  getAllRegistereeForUserCreated,
  getAllRegistereeForUserDeleted,
  registerForUserCreation,
  unregisterForUserCreation,
  registerForUserDeletion,
  unregisterForUserDeletion,
} from "../database/databaseService.js";
import fetch from "node-fetch";

const router = Router();

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
router.post("/hooks/user-created/register", (req, res) => {
  registerForUserCreation(req.body.registeredUrl);
  res.send();
});

router.post("/hooks/user-created/ping", async (req, res) => {
  const registeredHooks = getAllRegistereeForUserCreated();
  registeredHooks.forEach(async (hookUrl) => {
    const requestBody = {
      msg: `${hookUrl} is registered for user create events`,
    };
    await fetch(hookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
  });
  res.send();
});

router.post("/hooks/user-created/unregister", (req, res) => {
  unregisterForUserCreation(req.body.registeredUrl);
  res.send();
});

router.post("/hooks/user-deleted/register", (req, res) => {
  registerForUserDeletion(req.body.registeredUrl);
  res.send();
});

router.post("/hooks/user-deleted/ping", async (req, res) => {
  const registeredHooks = getAllRegistereeForUserDeleted();
  registeredHooks.forEach(async (hookUrl) => {
    const requestBody = {
      msg: `${hookUrl} is registered for user delete events`,
    };
    await fetch(hookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
  });
  res.send();
});

router.post("/hooks/user-deleted/unregister", (req, res) => {
  unregisterForUserDeletion(req.body.registeredUrl);
  res.send();
});

export default router;
