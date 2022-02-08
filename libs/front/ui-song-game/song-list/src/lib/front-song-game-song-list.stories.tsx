import { Story, Meta } from '@storybook/react';
import {
  FrontSongGameSongList,
  FrontSongGameSongListProps,
} from './front-song-game-song-list';

export default {
  component: FrontSongGameSongList,
  title: 'FrontSongGameSongList',
} as Meta;

const Template: Story<FrontSongGameSongListProps> = (args) => (
  <FrontSongGameSongList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  currentSongId: '2',
  onClose: () => ({}),
  onSelect: () => ({}),
  open: true,
  songList: [
    {
      id: '1',
      title: 'a song',
      artists: [
        { id: '1', name: 'Foo' },
        { id: '2', name: 'Bar' },
      ],
      lyrics: [],
    },
    {
      id: '2',
      title: 'good song',
      artists: [
        { id: '3', name: 'Alice' },
        { id: '4', name: 'Bob' },
      ],
      lyrics: [],
    },
    {
      id: '3',
      title: 'nice song',
      artists: [
        { id: '1', name: 'Foo' },
        { id: '2', name: 'Bar' },
      ],
      lyrics: [],
    },
  ],
};
