import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Financier",
  description: "Учет личных финансов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
