"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn, getInitials } from '@/lib/utils'
import Image from 'next/image'
import {Avatar, AvatarFallback} from "@/components/ui/avatar"
import { Session } from 'next-auth'

const Header = ({session} : {session: Session}) => {
    const pathname = usePathname();
  return (
    <div>
      <header className='my-10 flex justify-between gap-5'>
        <Link href='/'>
        <Image src='/icons/logo.svg' alt='logo' width={40} height={40} />
        </Link>
        <ul className='flex flex-row items-center gap-8'>
        <li>
            {/* </li><Link href="/library" className={cn({ inputs: 'text-base cursor-pointer capitalize', pathname === '/library' ? 'text-light-200' : 'text-light-100' })}> */}
            <Link href="/library" className={cn('text-base cursor-pointer capitalize', pathname === '/library' ? 'text-light-200' : 'text-light-100')}>
            Library            
            </Link> 
        </li>

        <li>
          <Link href="/myprofile">
            <Avatar>              
              <AvatarFallback className='bg-amber-100'>
                {getInitials(session?.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
        </ul>
      </header>
    </div>
  )
}

export default Header