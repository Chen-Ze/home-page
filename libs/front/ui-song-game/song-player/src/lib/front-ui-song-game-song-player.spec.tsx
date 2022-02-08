import { render } from '@testing-library/react';

import FrontUiSongGameSongPlayer from './front-ui-song-game-song-player';

describe('FrontUiSongGameSongPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontUiSongGameSongPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
