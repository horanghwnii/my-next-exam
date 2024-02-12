import Link from 'next/link';

interface HeaderNavItemProps {
  href: string;
  label: string;
}

function HeaderNavItem({ href, label }: HeaderNavItemProps) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default HeaderNavItem;
