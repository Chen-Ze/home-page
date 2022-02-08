import { render } from '@testing-library/react';

import FrontUiSongGameSongQuiz from './front-ui-song-game-song-quiz';

describe('FrontUiSongGameSongQuiz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontUiSongGameSongQuiz />);
    expect(baseElement).toBeTruthy();
  });
});
