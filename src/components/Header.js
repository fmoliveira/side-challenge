import styled from 'styled-components';

const Header = styled.header`
  box-sizing: border-box;
  min-height: 100px;
  padding: 30px 60px;
  background: ${(props) => props.theme.colors.headerBackground};
  font-size: 1.75rem;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
`;

export default Header;
