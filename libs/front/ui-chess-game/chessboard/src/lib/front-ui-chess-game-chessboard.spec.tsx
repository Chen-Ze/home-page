import { render } from '@testing-library/react';

import FrontUiChessGameChessboard from './front-ui-chess-game-chessboard';

describe('FrontUiChessGameChessboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontUiChessGameChessboard />);
    expect(baseElement).toBeTruthy();
  });
});
