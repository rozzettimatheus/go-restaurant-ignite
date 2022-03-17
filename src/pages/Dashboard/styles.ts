import styled from "styled-components";

export const FoodsContainer = styled.div`
  width: min(100%, 960px);
  margin: 0 auto;
  padding: 40px 24px;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 32px;

  @media screen and (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 32px;
    margin-top: -120px;
    grid-gap: 24px;
  }
`;
