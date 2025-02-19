import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  // Function to generate a random image URL (using Lorem Picsum for placeholder)
  const getRandomImageUrl = () => {
    const width = 300;
    const height = 200;
    const images = [];

    for (let i = 1; i < 21; i++) {
      images.push(
        `https://picsum.photos/${width}/${height}?random=${Math.floor(
          Math.random() * 1000
        )}`
      );
    }
    return images;
  };

  const mediaImages = getRandomImageUrl();
  const products = [...Array(20)].map((_, index) => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: mediaImages[index],
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
