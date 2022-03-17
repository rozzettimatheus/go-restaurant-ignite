import styled from "styled-components";

export const Container = styled.div`
  background: #c72828;
  padding: 30px 0;

  header {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding: 0 24px 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AddFoodButton = styled.button`
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: #39b100;
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 640px) {
    position: fixed;
    z-index: 2;
    bottom: 30px;
    right: 30px;
  }

  .text {
    display: inline-block;
    padding: 16px 24px;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  .icon {
    display: flex;
    padding: 16px 16px;
    background: #41c900;
    border-radius: 0 8px 8px 0;
    margin: 0 auto;

    @media screen and (max-width: 640px) {
      border-radius: 8px;
    }
  }
`;
