import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = LinkProps & {
  icon: ReactNode;
  children?: string;
  active: boolean;
};

export const SidebarLink = ({ icon, children, active, ...props }: Props) => {
  return (
    <Link
      className={clsx(styles.sidebarLink, active && styles.sidebarLink_active)}
      {...props}
    >
      {icon} {children}
    </Link>
  );
};
