import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchData } from '../services/fetching';
import { Directory } from './Directory';
import { File } from './File';

const Root = () => {
  const [root, setRoot] = useState([]);

  useEffect(() => {
    fetchData().then(setRoot);
    console.log(root);
  }, []);

  return (
    <>
      <StyledWrapper>
        <StyledPath key={root.id}>{root.name}</StyledPath>
        <StyledContent>
          {root.directories?.map((dir) => (
            <Directory key={dir.id} dir={dir} />
          ))}
          {root.files?.map((file, index) => (
            <File key={index} file={file} />
          ))}
        </StyledContent>
      </StyledWrapper>
    </>
  );
};

export default Root;

const StyledWrapper = styled.div`
  height: 100vh;

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
