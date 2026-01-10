'use client';
import { usePathname } from 'next/navigation';
import { GoHome } from 'react-icons/go';
import { CiDollar } from 'react-icons/ci';
import { GrServices } from 'react-icons/gr';

import { SidebarLink } from './SidebarLink';
import styles from './styles.module.scss';

export const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.sidebarNav__list}>
        <li>
          <SidebarLink
            href="/dashboard"
            active={'/dashboard' === pathname}
            icon={<GoHome />}
          >
            Главная
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            href="/dashboard/subscriptions"
            active={pathname.startsWith('/dashboard/subscriptions')}
            icon={<CiDollar />}
          >
            Подписки
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            href="/dashboard/services"
            active={pathname.startsWith('/dashboard/services')}
            icon={<GrServices />}
          >
            Сервисы
          </SidebarLink>
        </li>
      </ul>
    </nav>
  );
};
