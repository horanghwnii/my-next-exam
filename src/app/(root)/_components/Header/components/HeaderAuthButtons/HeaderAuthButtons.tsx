'use client';

import { useAuth } from '@/contexts/auth/auth.context';
import Link from 'next/link';

function HeaderAuthButtons() {
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogOut = () => {
    logOut();
  };

  return (
    <div className='flex gap-x-6'>
      {isLoggedIn ? (
        <button onClick={handleClickLogOut} className='hover:text-red-300'>
          LogOut
        </button>
      ) : (
        <>
          <Link href='/sign-up' className='hover:text-red-300'>
            SignUp
          </Link>

          <Link href='/log-in' className='hover:text-red-300'>
            LogIn
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
