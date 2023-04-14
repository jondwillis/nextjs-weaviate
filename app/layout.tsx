// app/layout.tsx
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
   <html lang="en">
    <head>
       <title>Next.js</title>
    </head>
     <body>
        {children}
      </body>
    </html>)
};

export default Layout;