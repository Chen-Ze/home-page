import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontUiSongGameSongQuizProps {}

const StyledFrontUiSongGameSongQuiz = styled.div`
  color: pink;
`;

export function FrontUiSongGameSongQuiz(props: FrontUiSongGameSongQuizProps) {
  return (
    <StyledFrontUiSongGameSongQuiz>
      <h1>Welcome to FrontUiSongGameSongQuiz!</h1>
    </StyledFrontUiSongGameSongQuiz>
  );
}

export default FrontUiSongGameSongQuiz;
