'use client';

import { useAuth } from '@/contexts/auth/auth.context';
import HeaderNavItem from '../HeaderNavItem';

function HeaderNav() {
  const { isLoggedIn } = useAuth();
  return (
    <nav className='ml-20'>
      <ul className='flex text-sm font-medium items-center gap-x-5'>
        <HeaderNavItem href='/tils?type=trending' label='트렌딩' />
        <HeaderNavItem href='/tils?type=latest' label='최신' />
        <HeaderNavItem href='/tils/write' label='쓰러가기' />
        {/* {isLoggedIn && <HeaderNavItem href='/my-profile' label='내 프로필' />} */}
        <HeaderNavItem href='/my-profile' label='내 프로필' />
      </ul>
    </nav>
  );
}

export default HeaderNav;
