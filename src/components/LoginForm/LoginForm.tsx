import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useLoginForm } from '@/components/LoginForm/hooks/useLoginForm.ts';

interface Props {
  onLogin: () => void;
}

const LoginForm: React.FC<Props> = ({onLogin}) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    open,
    setOpen,
    handleSubmit,
  } = useLoginForm(onLogin);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="font-bold">Войти</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Вход в систему</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full" disabled={!email || !password}>Войти</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default LoginForm;
