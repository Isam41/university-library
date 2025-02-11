'use client'

import { cn } from '@/lib/utils';
import React from 'react'
import BookCoverSvg from './BookCoverSvg';
import { IKImage } from 'imagekitio-next';
import config from '@/lib/config';


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
  //console.log('coverImage:', coverImage);  // Ensure it's the correct URL

  return (
    <div className={cn('relative transition-all duration-300', variantStyles[variant], className,)}>
      <BookCoverSvg coverColor={coverColor}/>
      
      <div className='absolute z-10' style={{left: '12%', width: '87.5%', height:"88%"}}>
        <IKImage path={coverImage} urlEndpoint={config.env.imagekit.urlEndpoint} 
        alt="Book cover" fill className='rounded-sm object-fill'
        loading='lazy'
        lqip={{active: true}}
      //   onError={(e) => {
      //     console.log("Image failed to load:", e);
      // }}
      />
      </div>
    </div>
  )
}

export default BookCover
