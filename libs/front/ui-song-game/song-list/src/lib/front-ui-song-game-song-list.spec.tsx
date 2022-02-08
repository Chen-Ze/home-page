import { render } from '@testing-library/react';

import FrontUiSongGameSongList from './front-ui-song-game-song-list';
import { songListProps } from './song-list-mock';

describe('FrontUiSongGameSongList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FrontUiSongGameSongList {...songListProps} />
    );
    expect(baseElement).toBeTruthy();
  });
});
