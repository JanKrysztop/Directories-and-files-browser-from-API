import styled from 'styled-components';
import folder from '../icons/folder.svg';

export const Directory = ({ dir, handleOpen }) => {
  const { id, name } = dir;

  const handleClick = () => {
    handleOpen(dir);
  };
  return (
    <>
      <StyledDir key={id} onClick={handleClick}>
        <StyledImg src={folder} />
        {name}
      </StyledDir>
    </>
  );
};

const StyledDir = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  color: white;
  align-items: center;
  width: 220px;
  height: 220px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    color: white;
  }
`;

const StyledImg = styled.img`
  width: 120px;
`;
