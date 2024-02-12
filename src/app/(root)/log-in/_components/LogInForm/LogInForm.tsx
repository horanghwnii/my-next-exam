'use client';

import API from '@/api/index.api';
import { useAuth } from '@/contexts/auth/auth.context';
import { useMutation } from '@tanstack/react-query';
import { FormEventHandler, useRef } from 'react';

function LogInForm() {
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });

  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);

  const { logIn } = useAuth();

  const handleSubmitLogIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const idValue = idInputRef.current?.value;
    const pwValue = pwInputRef.current?.value;

    if (!idValue || !pwValue) return alert('모든 값을 입력해주세요.');

    const { accessToken } = await mutateAsync({ id: idValue, pw: pwValue });
    logIn(accessToken);
  };

  return (
    <form
      onSubmit={handleSubmitLogIn}
      className='flex flex-col w-96 mx-auto gap-y-2'
    >
      <input
        ref={idInputRef}
        type='text'
        className='border-b px-2 py-1 text-lg'
        placeholder='ID'
      />
      <input
        ref={pwInputRef}
        type='password'
        className='border-b px-2 py-1 text-lg'
        placeholder='PW'
      />
      <button
        type='submit'
        className='border bg-zinc-600 px-2 py-2 rounded text-white'
      >
        LogIn
      </button>
    </form>
  );
}

export default LogInForm;
