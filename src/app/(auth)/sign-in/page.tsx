import { Box, Card } from "@mui/material";

import { SigninForm } from "@/modules/auth";
import { Logo } from "@/shared";

import { styles } from "./styles";

export default function Page() {
  return (
    <Box sx={styles.page}>
      <Logo variant="logo2" />
      <Card variant="outlined" sx={styles.page__card}>
        <SigninForm />
      </Card>
    </Box>
  );
}
