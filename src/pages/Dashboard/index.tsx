import { useState } from "react";

import { useFood } from "../../hooks/useFood";

import { Food as FoodType } from "../../models/food";
import { Header } from "../../components/Header";
import { Food } from "../../components/Food";
import { ModalAddFood } from "../../components/ModalAddFood";
import { ModalEditFood } from "../../components/ModalEditFood";

import { FoodsContainer } from "./styles";

export function Dashboard() {
  const {
    foods,
    editingFood,
    handleAddFood,
    handleDeleteFood,
    handleUpdateFood,
    handleEditFood,
  } = useFood();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen((prevModalOpen) => !prevModalOpen);
  }

  function onEditFood(food: FoodType) {
    handleEditFood(food);
    setEditModalOpen(true);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods?.map((food) => (
          <Food
            key={food.id}
            food={food}
            handleDelete={handleDeleteFood}
            handleEditFood={onEditFood}
          />
        ))}
      </FoodsContainer>
    </>
  );
}
