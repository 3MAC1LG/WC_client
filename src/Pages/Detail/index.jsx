import React from 'react';
import Menu from '../../components/Menu';
import Responsive from '../../lib/styles/Responsive';
import { DetailContainer } from './styles';

const Detail = () => {
  return (
    <DetailContainer>
      <Responsive>
        <div className="detail">
          <Menu />
          <div className="detail-layout">
            <div>ddd</div>
          </div>
        </div>
      </Responsive>
    </DetailContainer>
  );
};

export default Detail;
