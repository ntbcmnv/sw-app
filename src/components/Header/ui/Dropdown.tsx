import { Button } from '@/components/ui/button.tsx';
import { BellDot } from 'lucide-react';
import { useHeader } from '@/components/Header/hooks/useHeader.ts';

const Dropdown = () => {
  const {
    showNotificationDropdown,
    setShowNotificationDropdown
  } = useHeader()
  return (
    <div className="relative">
      <Button
        type="button"
        variant="ghost"
        className="w-10 h-10 bg-0 border-none shadow-none text-primary dark:text-white"
        aria-label="Уведомления"
        onClick={() => setShowNotificationDropdown(prev => !prev)}
      >
        <BellDot/>
      </Button>

      {showNotificationDropdown && (
        <div
          className="absolute right-0 top-12 bg-white dark:bg-gray-800 border rounded shadow-md z-50 p-3 w-[200px]">
          <p
            className="text-muted-foreground text-sm"
            onClick={() => {
              setShowNotificationDropdown(false);
            }}
          >
            Нет непрочитанных уведомлений.
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;