import React, { useState } from 'react';
import { toast } from 'sonner';

export const useLoginForm = (onLogin: () => void) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'test@mail.com' && password === '1234') {
      onLogin();
      setOpen(false);
      toast.success('Вы успешно авторизовались!');
    } else {
      toast.error('Неверные данные.');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    open,
    setOpen,
    handleSubmit,
  }
}