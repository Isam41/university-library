import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { signOut } from '@/auth';
import { Button } from './ui/button'

const Header = () => {
  return (
    <div>
      <header className='my-10 flex justify-between gap-5'>
        <Link href='/'>
        <Image src='/icons/logo.svg' alt='logo' width={40} height={40} />
        </Link>
        <ul className='flex flex-row items-center gap-8'>        
        <li>
        <form action={async () => {
            'use server'

            await signOut();
        }}
        className='mb-10'
        >
            <Button>Logout</Button>
        </form>   
          {/* <Link href="/myprofile">
            <Avatar>              
              <AvatarFallback className='bg-amber-100'>
                {getInitials(session?.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
          </Link> */}
        </li>
        </ul>
      </header>
    </div>
  )
}

export default Header