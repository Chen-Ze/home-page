describe('front-ui-song-game-song-player: FrontUiSongGameSongPlayer component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=frontuisonggamesongplayer--primary')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to FrontUiSongGameSongPlayer!');
  });
});
