import express from "express";
import { getAllUsers, getUserById, taskAssignedToUser, updatedUserProfile } from "../controllers/userController";
import { verifyToken } from "../middlewares/verifyToken";
import { errorCatch } from "../utils/error/errorCatch";
import { editUserDetails } from "../utils/zodSchemas";
import { validateData } from "../middlewares/zodValidation";

const router = express.Router();

router.get("/:userId", verifyToken, errorCatch(getUserById));
router.put("/:userId", verifyToken, validateData(editUserDetails), errorCatch(updatedUserProfile));
router.get("/", verifyToken, errorCatch(getAllUsers));
router.get("/:userId/assigned-tasks", verifyToken, errorCatch(taskAssignedToUser));

export default router;
