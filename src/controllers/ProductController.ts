import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import AppError from "../utils/AppError";

class ProductController {

  private productRepository
  
  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productBody = req.body

      if (!productBody.name || !productBody.price) {
        throw new AppError("Os campos nome e preço são obrigatórios", 400)
      }

      const product = this.productRepository.create({
        name: productBody.name,
        price: productBody.price,
        brand: productBody.brand,
        description: productBody.description,
        image: productBody.image
      })

      await this.productRepository.save(product)

      res.status(201).json(product)
    } catch (error) {
      next(error)
    }
  };
}

export default ProductController;
