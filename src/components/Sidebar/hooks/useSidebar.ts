import { Home, Landmark, PanelsTopLeft, Wallet } from 'lucide-react';

export const useSidebar = () => {
  const menuItems = [
    {icon: Home, label: 'Главная', href: '/'},
    {
      icon: Wallet,
      label: 'Налоги',
      children: [
        {label: 'Декларации', href: '/declarations'},
        {label: 'История платежей', href: '/payments-history'},
      ]
    },
    {
      icon: PanelsTopLeft,
      label: 'Платежный портал',
      children: [
        {label: 'Создать платеж', href: '/create-payment'},
        {label: 'Шаблоны платежей', href: '/payments-template'},
      ]
    },
    {
      icon: Landmark,
      label: 'Социальный фонд',
      children: [
        {label: 'Пособия', href: '/benefits'},
        {label: 'Отчеты', href: '/reports'},
      ]
    },
]

  return {menuItems}
}