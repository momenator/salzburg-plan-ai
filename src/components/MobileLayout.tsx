import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-mobile relative">
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
