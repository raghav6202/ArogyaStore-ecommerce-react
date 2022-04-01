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
      img: " https://images.pexels.com/photos/3683088/pexels-photo-3683088.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    _id: uuid(),
    categoryName: "Tests",
    description:
      "Diagnostic tests done at youe doorstep.Book Now and get discounts upto 30%",
      img: "https://images.pexels.com/photos/8442443/pexels-photo-8442443.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 ",
  },
  {
    _id: uuid(),
    categoryName: "Med-Tech",
    description:
      "Get premium quality health monitoring devices.Book Now and get discounts upto 30%",
      img: "https://images.pexels.com/photos/6753425/pexels-photo-6753425.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-6753425.jpg&fm=jpg ",
  },

  {
    _id: uuid(),
    categoryName: "Rehab",
    description:
      "Get natural health products and exercise equipments.Book Now and get discounts upto 20%",
      img: "https://images.pexels.com/photos/8795582/pexels-photo-8795582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 ",
  },


];
