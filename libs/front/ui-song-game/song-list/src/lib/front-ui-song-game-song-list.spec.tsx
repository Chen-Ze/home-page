import { render } from '@testing-library/react';

import FrontUiSongGameSongList from './front-ui-song-game-song-list';
import { generateSongList } from '@home-page/front/ui-song-game/fake-data';

describe('FrontUiSongGameSongList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FrontUiSongGameSongList
        onSelect={() => {
          // do nothing
        }}
        {...generateSongList(100)}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
