import { ReasonPhrases, StatusCodes } from "http-status-codes";
import UserModel from "../../database/models/UserModel";
import { Router } from "express";

const UserRouter = Router();

// GET REQUESTS
UserRouter.get("/currentuser", async (req, res) => {
  const userId = parseInt(req.query.id as string);

  const user = await UserModel.findOne({ where: { id: userId } });
  //   logger.info("You have a new user", { userId });
  if (!user) {
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    return;
  }

  res.status(StatusCodes.OK).json({ user });
});

export default UserRouter;
