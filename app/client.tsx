'use client';

interface LayoutProps {
  children: React.ReactNode;
}

const ClientComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default ClientComponent;