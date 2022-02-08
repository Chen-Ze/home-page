import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FrontUiSongGameSongPlayerProps {}

const StyledFrontUiSongGameSongPlayer = styled.div`
  color: pink;
`;

export function FrontUiSongGameSongPlayer(
  props: FrontUiSongGameSongPlayerProps
) {
  return (
    <StyledFrontUiSongGameSongPlayer>
      <h1>Welcome to FrontUiSongGameSongPlayer!</h1>
    </StyledFrontUiSongGameSongPlayer>
  );
}

export default FrontUiSongGameSongPlayer;
