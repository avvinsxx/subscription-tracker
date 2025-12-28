import { SigninForm } from "@/modules/auth";
import { Logo } from "@/shared";

import styles from "./styles.module.scss";

export default function Page() {
  return (
    <div className={styles.page}>
      <Logo variant="logo2" />
      <div className={styles.page__card}>
        <SigninForm />
      </div>
    </div>
  );
}
