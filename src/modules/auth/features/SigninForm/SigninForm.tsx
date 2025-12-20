"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

import { authClient } from "@/shared";

type Inputs = {
  email: string;
};

export const SigninForm = () => {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    authClient.emailOtp.sendVerificationOtp({
      email: data.email,
      type: "sign-in",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        error={!!formState.errors.email?.message}
        helperText={formState.errors.email?.message}
        label="Email"
        type="text"
        autoComplete="email"
        autoFocus
        variant="outlined"
        fullWidth
        {...register("email", {
          required: { value: true, message: "Обязательное поле" },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Введенное значение не является email",
          },
        })}
      />
      <Button variant="contained" size="large" fullWidth type="submit">
        ВОЙТИ
      </Button>
    </Box>
  );
};
