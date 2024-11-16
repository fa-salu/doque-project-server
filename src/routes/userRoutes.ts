import express from "express";
import { getUserById, updatedUserProfile } from "../controllers/userController";
import { verifyToken } from "../middlewares/verifyToken";
import { errorCatch } from "../utils/error/errorCatch";
import { editUserDetails } from "../utils/zodSchemas";
import { validateData } from "../middlewares/zodValidation";

const router = express.Router();

router.get("/userprofile/:userId", verifyToken, errorCatch(getUserById));
router.put(
  "/userprofile/:userId",
  verifyToken,
  validateData(editUserDetails),
  errorCatch(updatedUserProfile)
);

export default router;