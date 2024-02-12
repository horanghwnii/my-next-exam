'use client';

import { setProfile } from '@/redux/slices/users.slice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { FormEventHandler, useRef } from 'react';

function MyProfileForm() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.users.profile);
  profile;
  const nameInputRef = useRef<HTMLInputElement>(null);
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitUpdateProfile: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const nameValue = nameInputRef.current?.value;
    const nicknameValue = nicknameInputRef.current?.value;

    if (!nameValue || !nicknameValue) return alert('돌아가');

    const action = setProfile({ name: nameValue, nickname: nicknameValue });
    dispatch(action);
  };

  return (
    <form
      onSubmit={handleSubmitUpdateProfile}
      className='flex flex-col w-96 mx-auto gap-y-2'
    >
      <input
        ref={nameInputRef}
        type='text'
        className='border-b px-2 py-1 text-lg'
        placeholder={profile?.name}
      />
      <input
        ref={nicknameInputRef}
        type='text'
        className='border-b px-2 py-1 text-lg'
        placeholder={profile?.nickname}
      />
      <button
        type='submit'
        className='border bg-zinc-600 px-2 py-2 rounded text-white'
      >
        수정하기
      </button>
    </form>
  );
}

export default MyProfileForm;
