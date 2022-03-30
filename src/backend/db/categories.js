import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Medicenes",
    description:
      "Get Medicenes at affordable prices.Shop Now and get discounts upto 20%",
  },
  {
    _id: uuid(),
    categoryName: "Tests",
    description:
      "Diagnostic tests done at youe doorstep.Book Now and get discounts upto 30%",
  },
  {
    _id: uuid(),
    categoryName: "Med-Tech",
    description:
      "Get premium quality health monitoring devices.Book Now and get discounts upto 30%",
  },

  {
    _id: uuid(),
    categoryName: "Rehab",
    description:
      "Get natural health products and exercise equipments.Book Now and get discounts upto 20%",
  },


];
