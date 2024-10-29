import NavBar from "@/src/app/ui/components/NavBar/NavBar"


export const metadata = {
  title: "E-commerce",
  description: "Interfaz de usuario, sencilla, ve tus productos y compra rápidamente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>

        <div>
          <NavBar />
        </div>

        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
