import { useContext } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "services/api";

import { Food } from "../models/food";

interface FoodProviderProps {
  children: ReactNode;
}

type FoodContextData = {
  foods: Food[];
  editingFood: Food;
  handleEditFood: (food: Food) => void;
  handleAddFood: (food: Food) => Promise<void>;
  handleDeleteFood: (id: number) => Promise<void>;
  handleUpdateFood: (food: Food) => Promise<void>;
};

export const FoodContext = createContext<FoodContextData>(
  {} as FoodContextData
);

export function FoodProvider({ children }: FoodProviderProps) {
  const [foods, setFoods] = useState<Food[]>([]);
  const [editingFood, setEditingFood] = useState<Food>({} as Food);

  useEffect(() => {
    (async function () {
      const { data } = await api.get<Food[]>("/foods");

      setFoods(data);
    })();
  }, []);

  // CRUD METHODS
  async function handleAddFood(food: Food): Promise<void> {
    const newFood: Food = { ...food, available: true };

    console.log("aqui");

    try {
      const { data } = await api.post("/foods", newFood);
      setFoods((prevState) => [...prevState, data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food: Food) {
    if (!editingFood.id) {
      throw new Error("Editing food is undefined");
    }

    try {
      const foodUpdated = await api.put(`/foods/${editingFood.id}`, {
        ...editingFood,
        ...food,
      });

      const updatedFoods = foods.map((food) =>
        food.id !== foodUpdated.data.id ? food : foodUpdated.data
      );

      setFoods(updatedFoods);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id: number) {
    try {
      await api.delete(`/foods/${id}`);

      const filteredFoods = foods.filter((food) => food.id !== id);

      setFoods(filteredFoods);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEditFood(food: Food) {
    setEditingFood((prevState) => ({ ...prevState, ...food }));
  }

  return (
    <FoodContext.Provider
      value={{
        foods,
        editingFood,
        handleAddFood,
        handleDeleteFood,
        handleUpdateFood,
        handleEditFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  const context = useContext(FoodContext);

  if (!context) {
    throw new Error("Context must be within a provider");
  }

  return context;
}
