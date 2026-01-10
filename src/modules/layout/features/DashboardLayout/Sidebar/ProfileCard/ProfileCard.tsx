import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Button, Typography } from '@/shared';

import styles from './styles.module.scss';

export const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <Image
        width={48}
        height={48}
        src="https://picsum.photos/48/48"
        alt="Avatar"
        className={styles.profileCard__avatar}
      />
      <div className={styles.profileCard__info}>
        <Typography truncate variant="h3" title="John Doeasdf sa fas f asd">
          John Doeasdf sa fas f asd
        </Typography>
        <Typography
          truncate
          variant="text2"
          title="riley@email.com sadf as fas fd"
        >
          riley@email.com sadf as fas fd
        </Typography>
      </div>
      <Button size="sm" variant="outlined" color="secondary">
        <BsThreeDotsVertical size={20} />
      </Button>
    </div>
  );
};
