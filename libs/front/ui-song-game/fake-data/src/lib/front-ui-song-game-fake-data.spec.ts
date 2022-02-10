import { generateSongList } from './front-ui-song-game-fake-data';

describe('frontUiSongGameFakeData', () => {
  it('should work', () => {
    expect(generateSongList(100).selectedId).toBeTruthy();
  });
});
