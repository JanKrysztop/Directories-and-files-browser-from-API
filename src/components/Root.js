import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchRootData } from '../services/fetching';
import files from '../icons/files.svg';
import image from '../icons/image.svg';
import { Reset } from '../App';
import DirRoot from './DirRoot';

const Root = () => {
  const [root, setRoot] = useState([]);

  useEffect(() => {
    fetchRootData().then(setRoot);
    // console.log(root);
  }, []);

  return (
    <>
      <Reset />
      <StyledWrapper>
        <StyledPath key={root.id}>{root.name}</StyledPath>
        <StyledContent>
          {root.directories?.map((dir) => (
            <DirRoot key={dir.id} dir={dir} />
          ))}
          {root.files?.map((file) => (
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
  /* margin: 3vh auto; */
  height: 100vh;
  /* width: 100%; */
  background-color: #2f343d;
`;

const StyledPath = styled.h1`
  margin-left: 3vw;
  font-size: 6vh;
  height: 15vh;
  color: white;
  /* border: 1px solid red; */
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 45vh;
  /* border: 1px solid red; */
`;

const StyledFile = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: white;
  align-items: center;
  width: 12vw;
  height: 15vh;

  /* border: 1px solid red; */
`;

const StyledImg = styled.img`
  width: 4vw;
`;
