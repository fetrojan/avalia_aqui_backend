import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Review } from "../entities/Review";
import AppError from "../utils/AppError";

class ReviewController {

  private reviewRepository
  
  constructor() {
    this.reviewRepository = AppDataSource.getRepository(Review);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviewBody = req.body

      if (!reviewBody.name || !reviewBody.email || !reviewBody.feedback) {
        throw new AppError("Os campos nome, email e feedback são obrigatórios", 400)
      }

      const review = this.reviewRepository.create({
        product_id: reviewBody.product_id,
        name: reviewBody.name,
        email: reviewBody.email,
        feedback: reviewBody.feedback,
        experience: reviewBody.experience,
        recommend: reviewBody.recommend,
      })

      await this.reviewRepository.save(review)

      res.status(201).json(review)
    } catch (error) {
      next(error)
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviews = await this.reviewRepository.find()
      res.status(200).json(reviews)
    } catch (error) {
      next(error)
    }
  }
}

export default ReviewController;
