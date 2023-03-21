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

router.post("/users", async (req, res) => {
  const userName = req.body.userName;
  const registeredHooks = getAllRegistereeForUserCreated();
  registeredHooks.forEach(async (hookUrl) => {
    const requestBody = {
      msg: `${userName} has been created`,
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

router.delete("/users", async (req, res) => {
  const userName = req.body.userName;
  const registeredHooks = getAllRegistereeForUserDeleted();
  registeredHooks.forEach(async (hookUrl) => {
    const requestBody = {
      msg: `${userName} has been deleted`,
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

export default router;
