import { render } from '@testing-library/react';

import FrontUiSongGameSongList from './front-ui-song-game-song-list';

describe('FrontUiSongGameSongList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontUiSongGameSongList />);
    expect(baseElement).toBeTruthy();
  });
});
