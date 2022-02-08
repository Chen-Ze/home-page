import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FrontUiSongGameSongListProps {}

const StyledFrontUiSongGameSongList = styled.div`
  color: pink;
`;

export function FrontUiSongGameSongList(props: FrontUiSongGameSongListProps) {
  return (
    <StyledFrontUiSongGameSongList>
      <h1>Welcome to FrontUiSongGameSongList!</h1>
    </StyledFrontUiSongGameSongList>
  );
}

export default FrontUiSongGameSongList;
