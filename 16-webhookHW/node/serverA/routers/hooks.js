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
 * /hooks/user-created/register:
 *    post:
 *      tags:
 *        [web hooks]
 *      summary: Register webhook when user is created
 *      description: Use this endpoint to register your url so that it is being called when user creation event happens
 *      requestBody:
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                registeredUrl:
 *                  type: string
 *      responses:
 *        '200':
 *          description: Provided url has been successfully registered
 */
router.post("/hooks/user-created/register", (req, res) => {
  registerForUserCreation(req.body.registeredUrl);
  res.send();
});

/**
 * @openapi
 * /hooks/user-created/ping:
 *    post:
 *      tags:
 *        [web hooks]
 *      summary: Ping all urls registered for user creation event
 *      description: Use this endpoint to test whether your url is successfully registered for user creation
 *      responses:
 *        '200':
 *          description: A ping has been successfully sent to all registered urls for user creation
 */
router.post("/hooks/user-created/ping", async (req, res) => {
  const registeredHooks = getAllRegistereeForUserCreated();
  registeredHooks.forEach(async (hookUrl) => {
    const requestBody = {
      msg: `${hookUrl} is registered for user create events`,
    };
    try {
      await fetch(hookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
    } catch {}
  });
  res.send();
});

/**
 * @openapi
 * /hooks/user-created/unregister:
 *    post:
 *      tags:
 *        [web hooks]
 *      summary: Unregister webhook when user is created
 *      description: Use this endpoint to unregister your url so that it is not being called when user creation event happens
 *      requestBody:
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                registeredUrl:
 *                  type: string
 *      responses:
 *        '200':
 *          description: Provided url has been successfully unregistered
 */
router.post("/hooks/user-created/unregister", (req, res) => {
  unregisterForUserCreation(req.body.registeredUrl);
  res.send();
});

/**
 * @openapi
 * /hooks/user-deleted/register:
 *    post:
 *      tags:
 *        [web hooks]
 *      summary: Register webhook when user is deleted
 *      description: Use this endpoint to register your url so that it is being called when user deletion event happens
 *      requestBody:
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                registeredUrl:
 *                  type: string
 *      responses:
 *        '200':
 *          description: Provided url has been successfully registered
 */
router.post("/hooks/user-deleted/register", (req, res) => {
  registerForUserDeletion(req.body.registeredUrl);
  res.send();
});

/**
 * @openapi
 * /hooks/user-deleted/ping:
 *    post:
 *      tags:
 *        [web hooks]
 *      summary: Ping all urls registered for user deletion event
 *      description: Use this endpoint to test whether your url is successfully registered for user deletion
 *      responses:
 *        '200':
 *          description: A ping has been successfully sent to all registered urls for user deletion
 */
router.post("/hooks/user-deleted/ping", async (req, res) => {
  const registeredHooks = getAllRegistereeForUserDeleted();
  registeredHooks.forEach(async (hookUrl) => {
    const requestBody = {
      msg: `${hookUrl} is registered for user delete events`,
    };
    try {
      await fetch(hookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
    } catch {}
  });
  res.send();
});

/**
 * @openapi
 * /hooks/user-deleted/unregister:
 *    post:
 *      tags:
 *        [web hooks]
 *      summary: Unregister webhook when user is deleted
 *      description: Use this endpoint to unregister your url so that it is not being called when user deletion event happens
 *      requestBody:
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                registeredUrl:
 *                  type: string
 *      responses:
 *        '200':
 *          description: Provided url has been successfully unregistered
 */
router.post("/hooks/user-deleted/unregister", (req, res) => {
  unregisterForUserDeletion(req.body.registeredUrl);
  res.send();
});

export default router;
