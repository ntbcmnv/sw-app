import { NavLink } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useSidebar } from '@/components/Sidebar/hooks/useSidebar';
import CollapsibleMenuItem from '@/components/CollapsibleMenuItem/CollapsibleMenuItem.tsx';

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<Props> = ({isOpen, onClose}) => {
  const {menuItems} = useSidebar()

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-[250px] p-0 bg-slate-800 text-white border-0"
        onInteractOutside={onClose}
      >
        <VisuallyHidden>
          <DialogTitle>Навигационное меню</DialogTitle>
        </VisuallyHidden>

        <div className="flex flex-col h-full">
          <Separator/>
          <nav className="flex-1 py-4">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <NavLink
                      to={item.href}
                      onClick={onClose}
                      className={({isActive}) =>
                        `w-full flex items-center gap-3 px-4 py-3 transition-colors
                        ${isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-white hover:text-gray-300 hover:bg-gray-900'}`
                      }
                    >
                      <item.icon className="h-5 w-5"/>
                      <span>{item.label}</span>
                    </NavLink>
                  ) : (
                    <CollapsibleMenuItem item={item} onClose={onClose}/>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4">
            <NavLink
              to="/logout"
              className="flex items-center gap-3 text-gray-300 hover:text-white"
              onClick={onClose}
            >
              <LogOut className="h-5 w-5"/>
              <span>Выйти</span>
            </NavLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar