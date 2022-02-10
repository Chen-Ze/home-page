import { Story, Meta } from '@storybook/react';
import {
  FrontUiSongGameSongListDrawer,
  FrontUiSongGameSongListDrawerProps,
} from './front-ui-song-game-song-list-drawer';
import { FrontUiSongGameSongList } from '@home-page/front/ui-song-game/song-list';
import { generateSongList } from '@home-page/front/ui-song-game/fake-data';

export default {
  component: FrontUiSongGameSongListDrawer,
  title: 'FrontUiSongGameSongListDrawer',
  argTypes: {
    onClose: { action: 'closed' },
    onSelect: { action: 'selected' },
  },
} as Meta;

const Template: Story<FrontUiSongGameSongListDrawerProps> = (args) => (
  <FrontUiSongGameSongListDrawer {...args}>
    <FrontUiSongGameSongList
      {...generateSongList(200)}
      onSelect={() => {
        // do nothing
      }}
    />
  </FrontUiSongGameSongListDrawer>
);

export const Open = Template.bind({});
Open.args = {
  open: true,
};

export const Close = Template.bind({});
Close.args = {
  open: false,
};
