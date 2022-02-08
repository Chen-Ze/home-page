import { FrontUiSongGameSongListProps } from './front-ui-song-game-song-list';
import faker from '@faker-js/faker';
import * as R from 'ramda';

faker.seed(5832497);

const songCount = faker.datatype.number(100);
const songs = R.times(
  () => ({
    title: faker.random.words(),
    id: faker.datatype.uuid(),
    artists: R.times(
      () => faker.name.findName(),
      faker.datatype.number({ min: 1, max: 3 })
    ),
  }),
  songCount
);
const selectedId = faker.random.arrayElement(R.map(R.prop('id'), songs));

export const songListProps: FrontUiSongGameSongListProps = {
  open: true,
  onClose: () => ({}),
  selectedId,
  songList: songs,
  onSelect: () => ({}),
};
