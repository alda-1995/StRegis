'use client'

import Image from 'next/image'

const loader = ({ src }) => {
    return `${src}`
}

export default function LoaderImage({ className, fill = false , image:{ altText, sourceUrl, title, mediaDetails } }) {
    return (
        <Image
            src={sourceUrl}
            alt={altText}
            fill={fill}            
            className={`${className}`}
            loader={loader}
            width={!fill && mediaDetails.width}
            height={!fill && mediaDetails.height}
        />
    )
}
