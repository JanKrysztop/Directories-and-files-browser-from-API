import styled from 'styled-components';

export const Navigation = ({ path, navigateUp }) => {
  const pathToDisplay = ['root', ...path.map((dir) => dir.name)];

  return (
    <StyledPath>
      {pathToDisplay.map((name, index) => {
        return (
          <span onClick={() => navigateUp(index)}>
            {index > 0 ? ' /' : ''} {name}
          </span>
        );
      })}
    </StyledPath>
  );
};

const StyledPath = styled.h1`
  margin-left: 3vw;
  font-size: 6vh;
  height: 15vh;
  color: white;
`;
