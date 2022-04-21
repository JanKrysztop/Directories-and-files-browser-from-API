import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchData } from '../services/fetching';
import { Directory } from './Directory';
import { File } from './File';
import { Navigation } from './Navigation';

const getLast = (items) => items[items.length - 1];

const Root = () => {
  const [data, setData] = useState([]);
  const [path, setPath] = useState([]);

  useEffect(() => {
    const dirId = getLast(path)?.id;
    fetchData(dirId).then(setData);
  }, [path]);

  const handleOpen = (clickedDir) => {
    setPath((oldPath) => [...oldPath, clickedDir]);
  };

  const handleNavigate = (currentLocation) => {
    setPath((oldPath) => oldPath.slice(0, currentLocation));
  };

  return (
    <StyledWrapper>
      <Navigation path={path} navigateUp={handleNavigate} />
      <StyledContent>
        {data.directories?.map((dir) => (
          <Directory key={dir.id} dir={dir} handleOpen={handleOpen} />
        ))}
        {data.files?.map((file, index) => (
          <File key={index} file={file} />
        ))}
      </StyledContent>
    </StyledWrapper>
  );
};

export default Root;

const StyledWrapper = styled.div`
  height: 100vh;

  background-color: #2f343d;
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 45vh;
`;
