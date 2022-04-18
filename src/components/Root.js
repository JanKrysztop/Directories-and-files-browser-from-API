import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchRootData } from '../services/fetching';

const Root = () => {
  const [root, setRoot] = useState([]);

  useEffect(() => {
    fetchRootData().then(setRoot);
    console.log(root);
  }, []);

  return (
    <>
      <StyledPath key={root.id}>{root.name}</StyledPath>
    </>
  );
};

export default Root;

const StyledWrapper = styled.div``;

const StyledPath = styled.h1`
  font-size: 30px;
`;
