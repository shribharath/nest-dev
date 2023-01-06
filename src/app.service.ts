import { Injectable } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";

import { PRODUCTS } from "./mock/products.mock";

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}

  products = PRODUCTS;

  async getProducts() {
    return await this.products;
  }
}
