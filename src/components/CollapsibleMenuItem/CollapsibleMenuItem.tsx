import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.tsx';
import { ChevronDown, ChevronUp, type LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ChildItem {
  label: string;
  href: string;
}

interface CollapsibleMenuItemProps {
  item: {
    icon: LucideIcon;
    label: string;
    children?: ChildItem[];
  };
  onClose: () => void;
}

const CollapsibleMenuItem: React.FC<CollapsibleMenuItemProps> = ({item, onClose}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className="w-full flex items-center gap-3 px-4 py-3 transition-colors
                  text-white hover:text-gray-300 hover:bg-gray-900"
      >
        <item.icon className="h-5 w-5" />
        <span className="flex-1 text-left">{item.label}</span>
        {isOpen
          ? <ChevronUp className="h-4 w-4" />
          : <ChevronDown className="h-4 w-4" />
        }
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-gray-800/50">
        <ul className="py-1">
          {item.children?.map((child: ChildItem, index: number) => (
            <NavLink
              to={child.href}
              key={index}
              onClick={onClose}
              className="px-4 py-2 pl-9 text-gray-300 block hover:bg-gray-900"
            >
              {child.label}
            </NavLink>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleMenuItem;