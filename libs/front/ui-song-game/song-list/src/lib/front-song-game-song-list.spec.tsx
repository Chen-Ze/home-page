import { render } from '@testing-library/react';

import FrontSongGameSongList from './front-song-game-song-list';

describe('FrontSongGameSongList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FrontSongGameSongList
        currentSongId={'2'}
        onClose={() => ({})}
        onSelect={() => ({})}
        open={true}
        songList={[
          {
            id: '1',
            title: 'a song',
            artists: [
              { id: '1', name: 'Foo' },
              { id: '2', name: 'Bar' },
            ],
            lyrics: [],
          },
          {
            id: '2',
            title: 'good song',
            artists: [
              { id: '3', name: 'Alice' },
              { id: '4', name: 'Bob' },
            ],
            lyrics: [],
          },
          {
            id: '3',
            title: 'nice song',
            artists: [
              { id: '1', name: 'Foo' },
              { id: '2', name: 'Bar' },
            ],
            lyrics: [],
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
