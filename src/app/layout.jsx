
export const metadata = {
  title: 'Minuto Timer',
  description: 'A simple timer application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
