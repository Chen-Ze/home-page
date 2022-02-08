import { Story, Meta } from '@storybook/react';
import {
  FrontUiChessGameChessboard,
  FrontUiChessGameChessboardProps,
} from './front-ui-chess-game-chessboard';

export default {
  component: FrontUiChessGameChessboard,
  title: 'FrontUiChessGameChessboard',
} as Meta;

const Template: Story<FrontUiChessGameChessboardProps> = (args) => (
  <FrontUiChessGameChessboard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
