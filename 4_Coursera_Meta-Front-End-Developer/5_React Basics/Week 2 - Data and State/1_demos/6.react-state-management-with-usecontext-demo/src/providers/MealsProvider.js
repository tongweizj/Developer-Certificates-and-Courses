import React from "react";

const MealsContext = React.createContext(); // 创建 global state

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ children }) => {
  const [meals, setMealsList] = React.useState(todaysMeals); // 这也是用 useState

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
