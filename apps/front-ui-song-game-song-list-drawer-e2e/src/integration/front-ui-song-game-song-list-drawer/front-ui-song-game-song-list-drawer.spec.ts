describe('front-ui-song-game-song-list-drawer: FrontUiSongGameSongListDrawer component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=frontuisonggamesonglistdrawer--primary')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to FrontUiSongGameSongListDrawer!');
  });
});
