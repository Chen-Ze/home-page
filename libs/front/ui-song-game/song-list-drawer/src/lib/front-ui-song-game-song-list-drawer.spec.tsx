import { render } from '@testing-library/react';

import FrontUiSongGameSongListDrawer from './front-ui-song-game-song-list-drawer';

describe('FrontUiSongGameSongListDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FrontUiSongGameSongListDrawer
        open={false}
        onClose={() => {
          // do nothing
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
