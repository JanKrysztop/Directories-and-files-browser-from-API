import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchRootData } from '../services/fetching';
import folder from '../icons/folder.svg';
import files from '../icons/files.svg';
import image from '../icons/image.svg';
import { Reset } from '../App';

const Root = () => {
  const [root, setRoot] = useState([]);

  useEffect(() => {
    fetchRootData().then(setRoot);
    console.log(root);
  }, []);

  return (
    <>
      <Reset />
      <StyledWrapper>
        <StyledPath key={root.id}>{root.name}</StyledPath>
        <StyledContent>
          {root.directories.map((dir) => (
            <StyledDir key={dir.id}>
              <StyledImg src={folder} />
              {dir.name}
            </StyledDir>
          ))}
          {root.files.map((file) => (
            <StyledFile key={file.length}>
              {file.name.slice(-3) === 'jpg' ? (
                <StyledImg src={image} />
              ) : (
                <StyledImg src={files} />
              )}
              {file.name.length >= 11
                ? file.name.slice(0, 8) + '...'
                : file.name}
            </StyledFile>
          ))}
        </StyledContent>
      </StyledWrapper>
    </>
  );
};

export default Root;

const StyledWrapper = styled.div`
  margin: 3vh auto;
  /* border: 1px solid red; */
  height: 90vh;
  width: 98vw;
  background-color: ;
`;

const StyledPath = styled.h1`
  margin-left: 3vw;
  font-size: 6vh;
  height: 15vh;
  /* border: 1px solid red; */
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 45vh;
  /* border: 1px solid red; */
`;

const StyledDir = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
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

const StyledFile = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  align-items: center;
  width: 12vw;
  height: 15vh;
  /* border: 1px solid red; */
`;

const StyledImg = styled.img`
  width: 4vw;
`;
