import styled from 'styled-components';
import { useState, useEffect } from 'react';
import folder from '../icons/folder.svg';
import { fetchDirRootData } from '../services/fetching';
import { NavLink } from 'react-router-dom';
import Dir1 from './Dir1';

const DirRoot = (props) => {
  const [dirRoot, setDirRoot] = useState([]);

  useEffect(() => {
    fetchDirRootData(props.dir.id).then(setDirRoot);
    console.log(dirRoot);
  }, []);

  return (
    <>
      <NavLink to={`/dir${props.dir.id}`}>
        <StyledDir key={props.dir.id}>
          <StyledImg src={folder} />
          {props.dir.name}
        </StyledDir>
      </NavLink>
    </>
  );
};

export default DirRoot;

const StyledDir = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: white;

  align-items: center;
  width: 12vw;
  height: 15vh;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    color: black;
  }
  /* border: 1px solid red; */
`;

const StyledImg = styled.img`
  width: 4vw;
`;
