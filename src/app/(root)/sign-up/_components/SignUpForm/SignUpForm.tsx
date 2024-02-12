'use client';

import API from '@/api/index.api';
import { useAuth } from '@/contexts/auth/auth.context';
import { useMutation } from '@tanstack/react-query';
import { FormEventHandler, useRef } from 'react';

function SignUpForm() {
  const { mutateAsync } = useMutation({ mutationFn: API.auth.signUp });

  const { logIn } = useAuth();

  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);

  const handleSubmitSignUp: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const idValue = idInputRef.current?.value;
    const pwValue = pwInputRef.current?.value;
    const pw2Value = pw2InputRef.current?.value;

    if (!idValue || !pwValue || !pw2Value)
      return alert('모든 값을 입력해주세요.');
    if (pwValue !== pw2Value)
      return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');

    const { accessToken } = await mutateAsync({ id: idValue, pw: pwValue });
    logIn(accessToken);
  };

  return (
    <form
      onSubmit={handleSubmitSignUp}
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
      <input
        ref={pw2InputRef}
        type='password'
        className='border-b px-2 py-1 text-lg'
        placeholder='PW2'
      />
      <button
        type='submit'
        className='border bg-zinc-600 px-2 py-2 rounded text-white'
      >
        SignUp
      </button>
    </form>
  );
}

export default SignUpForm;
