import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontUiChessGameChessboardProps {}

const StyledFrontUiChessGameChessboard = styled.div`
  color: pink;
`;

export function FrontUiChessGameChessboard(
  props: FrontUiChessGameChessboardProps
) {
  return (
    <StyledFrontUiChessGameChessboard>
      <h1>Welcome to FrontUiChessGameChessboard!</h1>
    </StyledFrontUiChessGameChessboard>
  );
}

export default FrontUiChessGameChessboard;
