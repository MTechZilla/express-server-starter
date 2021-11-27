import { forbiddenError, generalError } from "../utils/errorResponse";
import { NextFunction, Request, Response } from "express";

export const checkApiKey = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const apiKey = process.env.API_KEY as string;
    if (!req.headers.apikey || req.headers.apikey !== apiKey) {
      return res.status(403).json(forbiddenError());
    }
    return next();
  } catch (error) {
    return res.status(500).json(generalError(error));
  }
};
