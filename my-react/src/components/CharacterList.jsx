import React from 'react';
import { useNavigate } from 'react-router-dom';

function CharacterList({ data }) {
  const navigate = useNavigate();

  return (
    <>
      {data.map((item) => (
        <div className="card" key={item.id} onClick={() => navigate(`/${item.id}`)}>
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`${item.name} thumbnail`} />
          <div className="title">
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default CharacterList;