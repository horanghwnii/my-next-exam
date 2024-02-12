import Link from 'next/link';
import HeaderAuthButtons from './components/HeaderAuthButtons';
import HeaderNav from './components/HeaderNav';

function Header() {
  return (
    <div className='flex justify-between items-center px-10 py-8 border-b'>
      <Link href='/' className='text-2xl font-bold'>
        TILTIL;;
      </Link>

      <HeaderNav />

      <HeaderAuthButtons />
    </div>
  );
}

export default Header;
