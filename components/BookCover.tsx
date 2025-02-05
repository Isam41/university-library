import { cn } from '@/lib/utils';
import React from 'react'
import Image from 'next/image';
import BookCoverSvg from './BookCoverSvg';

type BookCoverVariant = "small" | "medium" | "regular" | "wide" | "default";


const variantStyles: Record<BookCoverVariant, string> = {    
    small : 'book-cover_small',
    medium : 'book-cover_medium',
    default: 'book-cover_default',
    regular : 'book-cover_regular',
    wide : 'book-cover_wide',
};

interface Props {
    coverColor?: string,
    variant?: BookCoverVariant,    
    className?: string,
    coverImage?: string,
}

const BookCover = ({className, variant = "default", coverColor="#012B48", coverImage="https://placehold.co/400x600.png"}: Props) => {
  return (
    <div className={cn('relative transition-all duration-300', variantStyles[variant], className,)}>
      <BookCoverSvg coverColor={coverColor}/>

      <div className='absolute z-10' style={{left: '12%', width: '87.5%', height:"88%"}}>
        <Image src={coverImage} alt="Book cover" fill className='rounded-sm object-fill'/>
      </div>
    </div>
  )
}

export default BookCover
