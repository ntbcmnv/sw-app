import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import { selectTheme, toggleTheme } from '@/store/slices/themeSlice.ts';
import { useEffect, useState } from 'react';
import ruFlag from '@/public/flags/ru.svg'
import enFlag from '@/public/flags/en.svg';

export const useHeader = () => {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false)
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)

  const languages = {
    ru: {label: 'ru', icon: ruFlag},
    en: {label: 'en', icon: enFlag},
  }

  const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('ru');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const onToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return {
    theme,
    showLogoutDropdown,
    setShowLogoutDropdown,
    showNotificationDropdown,
    setShowNotificationDropdown,
    onToggleTheme,
    languages,
    currentLang,
    setCurrentLang,
    langDropdownOpen,
    setLangDropdownOpen,
  }
}