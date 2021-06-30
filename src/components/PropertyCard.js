import styled from 'styled-components';

import abbreviateState from '../utils/abbreviateState';
import formatDate from '../utils/formatDate';
import formatMoney from '../utils/formatMoney';

const Image = styled.img`
  width: 315px;
  height: 280px;
  object-fit: cover;
  border-radius: 4px;
`;

const Details = styled.div`
  margin-top: 1rem;
  font-size: 1.25rem;

  span:not(:first-child)::before {
    display: inline-block;
    content: '|';
    padding: 0 0.25em;
  }
`;

const Price = styled.div`
  margin-top: 0.7rem;
  font-size: 1.625rem;
  font-weight: bold;
`;

const Address = styled.div`
  margin-top: 0.3rem;
  font-size: 0.94rem;
`;

const ListDate = styled.div`
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.grayedText};
`;

export default function PropertyCard({
  mlsId,
  area,
  bedrooms,
  baths,
  address,
  listPrice,
  listDate,
  picture,
  remarks,
}) {
  return (
    <div>
      <Image src={picture} alt={remarks} />
      <Details>
        <span>{bedrooms} BR</span>
        <span>{baths} Bath</span>
        <span>{area} Sq Ft</span>
      </Details>
      <Price>${formatMoney(listPrice)}</Price>
      <Address>
        {address.streetNumber} {address.streetName}, {address.city},{' '}
        {abbreviateState(address.state, address.country)}
      </Address>
      <ListDate>Listed: {formatDate(listDate)}</ListDate>
    </div>
  );
}
