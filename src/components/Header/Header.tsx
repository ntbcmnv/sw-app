import React from 'react'
import { Button } from '@/components/ui/button.tsx'
import { ChevronDown, Menu, Moon, Sun, User } from 'lucide-react'
import LoginForm from '@/components/LoginForm/LoginForm.tsx';
import { NavLink } from 'react-router-dom';
import { useHeader } from '@/components/Header/hooks/useHeader.ts';
import LanguagesDropdown from '@/components/Header/ui/LanguagesDropdown.tsx';
import Dropdown from '@/components/Header/ui/Dropdown.tsx';

interface Props {
  onMenuClick: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Header: React.FC<Props> = ({onMenuClick, isLoggedIn, setIsLoggedIn}) => {
  const {
    theme,
    showLogoutDropdown,
    setShowLogoutDropdown,
    onToggleTheme,
  } = useHeader()

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-primary dark:text-white z-40 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            className="transition-colors p-0"
            onClick={onMenuClick}
          >
            <Menu className="w-7 h-7"/>
            <span className="sr-only">Открыть меню</span>
          </Button>

          <NavLink to="/" className="sm:text-sm text-xs font-bold capitalize">Приложение единое окно</NavLink>
        </div>

        <div className="flex items-center gap-3 relative">
          <Dropdown/>
          <LanguagesDropdown/>

          <Button
            type="button"
            variant="ghost"
            className="w-10 h-10"
            onClick={onToggleTheme}
            aria-label="Переключить тему"
          >
            {theme === 'light' ? <Sun/> : <Moon/>}
          </Button>

          {isLoggedIn ? (
            <div className="relative">
              <Button
                type="button"
                variant="ghost"
                className="inline-flex items-center justify-center gap-2 p-2"
                onClick={() => setShowLogoutDropdown(prev => !prev)}
              >
                <User/>
                <ChevronDown/>
              </Button>

              {showLogoutDropdown && (
                <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 border rounded shadow-md p-2 z-50">
                  <Button
                    type="button"
                    onClick={() => {
                      setIsLoggedIn(false);
                      setShowLogoutDropdown(false);
                    }}
                  >
                    Выйти
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <LoginForm onLogin={() => setIsLoggedIn(true)}/>
          )}
        </div>

      </div>
    </header>
  )
}

export default Header
