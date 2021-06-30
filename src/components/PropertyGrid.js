import styled from 'styled-components';

const PropertyGrid = styled.section`
  display: grid;
  grid-gap: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default PropertyGrid;
