import React from 'react'
import Image01 from '@/public/images/co-workers/Mastercard-logo.svg.png'
import Image02 from '@/public/images/co-workers/america-bank.png'
import Image03 from '@/public/images/co-workers/bca.jpg'
import Image04 from '@/public/images/co-workers/visa_logo_sm.jpg'
import Image05 from '@/public/images/co-workers/mandiri.png'
import Image06 from '@/public/images/co-workers/citizen.png'
import { Download } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/src/components/ui/carousel'
import Banner01 from '../../../../../public/images/banner_01.png'
import Link from 'next/link'
import Image from 'next/image'

const TopBanner = () => {
  return (
    <div className="lg:h-[1500px] md:h-[1200px] h-[1000px] bg-[#090a0a] dark:bg-[#17122D] relative">
      <div className="w-full lg:mt-[120px] mt-[30px] h-[600px] bg-gradient-to-t from-[#16112B] to-[#2D2453] flex flex-col justify-center items-center text-white text-center relative">
        {/* Title and slogan */}
        <h1 className="lg:text-6xl md:text-2xl text-lg font-bold leading-tight lg:mx-64 md:mx-40 mx-10 relative z-20">
          Easily invest in stocks and crypto in one
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#637DFF] to-[#87E5DA]">
            &nbsp;GoStock platform
          </span>
        </h1>
        <p className="mt-[20px] lg:text-xl relative z-20">
          Get all the conveniences of investing in stocks or cryptocurrencies in one GoStock platform.
          <br />
          Now you can use this app in desktop version.
        </p>

        {/* Button */}
        <div className="mt-[40px] space-x-[20px] flex relative z-20">
          <Link
            href={'/docs'}
            className="md:px-[24px] px-[12px] md:py-[12px] py-[8px] text-white border-white border-2 font-semibold rounded-full"
          >
            How it work
          </Link>
          <Link
            href={'/download'}
            className="px-[24px] py-[12px] bg-white text-[#2D2453] font-semibold rounded-full flex gap-2 items-center"
          >
            <p>Get app now</p> <Download />
          </Link>
        </div>

        {/* Banner stocks */}
        <div className="absolute inset-0 md:top-[85%] top-[90%] overflow-hidden lg:h-full md:h-2/3 h-1/2">
          <Image src={Banner01} layout="fill" objectFit="contain" className="z-10" alt="banner" />
        </div>
      </div>

      {/* Co-workers */}
      <div className="absolute inset-0 md:top-[80%] top-[88%] md:mx-20 mx-10 ">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex gap-2 bg-white">
              {[Image01, Image02, Image03, Image04, Image05, Image06].map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`image0${index + 1}`}
                  className="md:w-[300px] md:h-[200px] w-[150px] h-[100px]"
                  objectFit="contain"
                />
              ))}
            </CarouselItem>
            <CarouselItem className="flex gap-2 bg-white">
              {[Image05, Image06, Image01, Image02].map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`image0${index + 1}`}
                  className="md:w-[300px] md:h-[200px] w-[150px] h-[100px]"
                  objectFit="contain"
                />
              ))}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default TopBanner
