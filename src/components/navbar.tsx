'use client';

import Link from 'next/link';

import { getCategories } from '@/actions/get-categories';

import { MainNav } from './main-nav';
import { NavbarActions } from './navbar-actions';
import { Container } from './ui/container';

export const revalidate = 0;

export async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
