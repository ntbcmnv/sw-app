import React, { useState } from 'react'
import Header from '@/components/Header/Header.tsx'
import Sidebar from '@/components/Sidebar/Sidebar.tsx'
import { Toaster } from '@/components/ui/sonner.tsx';

interface Props {
  children: React.ReactNode;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Layout: React.FC<Props> = ({children, setIsLoggedIn, isLoggedIn}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex flex-col flex-1 w-full">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <main className="flex-1 p-4 md:p-6 mt-16">
          {children}
        </main>

        <Toaster/>
      </div>
    </div>
  )
}

export default Layout;