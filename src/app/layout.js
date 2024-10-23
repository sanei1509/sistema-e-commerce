
export const metadata = {
  title: "E-commerce",
  description: "Interfaz de usuario, sencilla, ve tus productos y compra rápidamente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
