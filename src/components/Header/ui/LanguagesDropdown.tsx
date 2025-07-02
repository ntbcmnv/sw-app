import { ChevronDown } from 'lucide-react';
import { useHeader } from '@/components/Header/hooks/useHeader.ts';
import { Button } from '@/components/ui/button.tsx';

const LanguagesDropdown = () => {
  const {
    setLangDropdownOpen,
    languages,
    currentLang,
    langDropdownOpen,
    setCurrentLang
  } = useHeader()

  return (
      <div className="relative">
        <Button
          variant="ghost"
          className="flex items-center gap-1 px-2 py-1 rounded hover:bg-muted transition"
          onClick={() => setLangDropdownOpen(prev => !prev)}
        >
          <img src={languages[currentLang].icon} alt="lang" className="h-4 w-6 object-cover rounded-sm"/>
          <span className="text-xs font-medium text-muted-foreground">{languages[currentLang].label}</span>
          <ChevronDown className="h-4 w-4"/>
        </Button>

        {langDropdownOpen && (
          <div className="absolute right-0 top-8 z-50 bg-white dark:bg-gray-800 shadow-md rounded p-2 w-[80px]">
            {Object.entries(languages).map(([key, { label, icon }]) => (
              <button
                key={key}
                className="flex items-center gap-2 w-full hover:bg-muted rounded p-1 text-sm"
                onClick={() => {
                  setCurrentLang(key as 'ru' | 'en');
                  setLangDropdownOpen(false);
                }}
              >
                <img src={icon} alt={label} className="h-4 w-6 object-cover rounded-sm"/>
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
  );
};

export default LanguagesDropdown;