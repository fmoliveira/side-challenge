import styled from 'styled-components';

import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';

const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  padding: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default function FavoriteButton({ isFavorite, onChange }) {
  const icon = isFavorite ? heartFill : heartStroke;

  return (
    <Button onClick={() => onChange?.(!isFavorite)}>
      <img src={icon} alt={isFavorite ? 'Remove favorite' : 'Add favorite'} />
    </Button>
  );
}
