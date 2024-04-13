import "./globals.css";


export const metadata = {
  title: "Zillow clone",
  description: "A demo app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout
