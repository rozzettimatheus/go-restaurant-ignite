import { FiPlusSquare } from "react-icons/fi";

import { Logo } from "components/Logo/Index";
import { Container, AddFoodButton } from "./styles";

interface HeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <Container>
      <header>
        <Logo />
        <nav>
          <div>
            <AddFoodButton type="button" onClick={openModal}>
              <span className="text">Novo Prato</span>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </AddFoodButton>
          </div>
        </nav>
      </header>
    </Container>
  );
}
