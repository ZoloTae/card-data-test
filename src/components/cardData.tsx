import React, { FC } from 'react';
import styled from 'styled-components';
import { CardDataProps } from './cardData.types';
import empImg from '../asset/image/empty.jpg';

const WrapperCard = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  width: 270px;
  height: 300px;
  margin: 10px;
`;

const WrapperContent = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  margin-top: 0;
`;

const WrapperImg = styled.img`
  position: relative;
  border-radius: 0.5rem 0.5rem 0 0; 
  width: 270px;
  height: 100%;
  margin: 0;

`;

const WrapperTitle = styled.div``;

const WrapperDesc = styled.div``;



const CardData: FC<CardDataProps> = ({headline, description, size, img, ...props}) => {
  return (
    <WrapperCard>
      <WrapperImg src={img ? img : empImg} />
      <WrapperContent>
            <WrapperTitle>{headline ? headline : 'Head'}</WrapperTitle>
            <WrapperDesc>{description ? description : 'Description'}</WrapperDesc>
      </WrapperContent>
    </WrapperCard>
  );
}

export default CardData;