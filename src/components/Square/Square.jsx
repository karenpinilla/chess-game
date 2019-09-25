import React, { useState } from 'react';
import Knight from '../Knight/Knight';
import axios from 'axios';

import './Square.styles.scss';

const Square = ({ chessId }) => {
  const [active, setActive] = useState(false);

  const getPosition = chessId => {
    event.preventDefault();
    console.log('chessId', chessId);

    axios({
      method: 'post',
      url: '/api/position',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      data: {
        chessId,
      },
    }).then(response => {
      console.log('response from server', response.data);
    });

    setActive(!active);
  };

  return (
    <div className='square' onClick={e => getPosition(chessId)}>
      <span className='chess-id'>{chessId}</span>
    </div>
  );
};

export default Square;
