import { render } from '@testing-library/react';

import FrontUiSongGameSongList from './front-ui-song-game-song-list';
import { generateSongList } from '@home-page/front/ui-song-game/fake-data';

describe('FrontUiSongGameSongList', () => {
  it('should render successfully', () => {
    // we have to mock scrollIntoView here
    // see {@link https://stackoverflow.com/questions/51527362/testing-scrollintoview-jest}
    // or {@link https://github.com/jsdom/jsdom/issues/1695}
    const scrollIntoViewMock = jest.fn();
    HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

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
