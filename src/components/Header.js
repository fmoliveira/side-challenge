import styled from 'styled-components';

const Header = styled.header`
  box-sizing: border-box;
  min-height: 100px;
  background: ${(props) => props.theme?.colors?.headerBackground};
  line-height: 0; // adjust to container padding
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
`;

export default Header;
