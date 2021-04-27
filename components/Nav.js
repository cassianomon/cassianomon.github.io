import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
