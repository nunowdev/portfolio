import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 80px;
  padding: 0 250px;
`;

export const NavbarName = styled.div`
  font-size: 14px;
  color: black;
  font-weight: 500;
`;
export const NavbarLocation = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: black;
  font-weight: 500;
  svg {
    font-size: 16px;
    margin-right: 8px;
  }
`;
export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  .link {
    font-size: 14px;
    color: black;
    font-weight: 500;
    margin: 0 8px;
    &.nomargin {
      margin-left: 0;
    }
  }
`;
