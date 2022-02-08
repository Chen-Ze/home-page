// using ts-jest in place of babel-jest
// because babel-jest ignores node_modules
// even with transformIgnorePatterns set correctly

module.exports = {
  displayName: 'front-ui-chess-game-chessboard',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(three)/)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/front/ui-chess-game/chessboard',
};
