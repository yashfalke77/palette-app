import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import React from 'react';
import NavbarClient from './NavbarClient';

const NavbarServer = async () => {
  const getCurrentSession = async () => {
    const supabase = createServerComponentClient({cookies});
    return await supabase.auth.getSession();
  };
  const {data} = await getCurrentSession();
  return (
    <NavbarClient session={data.session} />
  );
};

export default NavbarServer;