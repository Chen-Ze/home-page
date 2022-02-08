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
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ position: 'relative', width: '100%', height: 480 }}>
      <FrontUiChessGameChessboard {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
