describe('front-ui-chess-game-chessboard: FrontUiChessGameChessboard component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=frontuichessgamechessboard--primary')
  );

  it('should render the component', () => {
    cy.get('canvas').should('be.visible');
  });
});
