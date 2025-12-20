"use client";
import { Typography } from "@mui/material";

export const Logo = ({ variant }: { variant: "logo1" | "logo2" }) => {
  return (
    <Typography
      variant={variant}
      sx={(theme) => ({
        display: "inline-block",
        position: "relative",
        letterSpacing: ".05em",
        textShadow: `1px 1px ${theme.palette.green.dark},
           -1px 1px ${theme.palette.green.dark},
           -1px -1px ${theme.palette.green.dark},
           1px -1px ${theme.palette.green.dark}`,
        overflow: "hidden",
        color: "white",
        transition: "all 1s",
        textAlign: "center",
        zIndex: 1,
        "::before": {
          content: '""',
          position: "absolute",
          top: "10px",
          right: "-15px",
          bottom: "-15px",
          left: "0",
          zIndex: "-1",
          background: `linear-gradient(
            -45deg,
            rgba(72, 209, 204, 0) 2px,
            ${theme.palette.green.main} 3px,
            rgba(72, 209, 204, 0) 3px )
            repeat`,
          backgroundSize: "4px 4px",
        },
        "::after": {
          content: "attr(data-name)",
          position: "absolute",
          top: "3px",
          left: "3px",
          zIndex: "-2",
          textShadow: `1px 1px white,
            2px 2px white,
            3px 3px white,
            4px 4px white`,
          color: "white",
          transition: "all 1s",
          width: "100%",
        },
      })}
      data-name="Personal Financier"
    >
      Personal Financier
    </Typography>
  );
};
