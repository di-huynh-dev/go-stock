import React from 'react'
import Link from 'next/link'
import { CircleCheck, Sparkle } from 'lucide-react'
import Image from 'next/image'
import Banner02 from '@/public/images/banner_02.png'
import Banner03 from '@/public/images/banner_03.png'
import AppStoreImage from '@/public/images/app-store-btn.png'
import GooglePlayImage from '@/public/images/gg-play-btn.png'
import { Button } from '@/src/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/components/ui/table'
import { stocks } from '@/src/data/stock.data'
import { SocialIcon } from 'react-social-icons'

const Content = () => {
  return (
    <div className="dark:bg-[#221C38] bg-white align-element dark:p-10 my-20 rounded-lg">
      <div className="lg:mx-0 mx-4">
        {/* Monitor */}
        <div className="grid lg:grid-cols-2 gap-16 my-10 ">
          <Image src={Banner02} objectFit="contain" className="w-full h-full rounded-2xl" alt="banner" />
          <div className="flex flex-col justify-center">
            <h2 className="lg:text-7xl md:text-4xl text-xl font-bold font-mono">
              Easily monitor stock movements on
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#637DFF] to-[#7a7cf1]">
                &nbsp;GoStock
              </span>
            </h2>
            <p className="lg:text-3xl md:text-xl text-gray-500 dark:text-gray-200 mt-4 lg:mt-10">
              Monitor the stocks you are after in real time and of course easily and accurately
            </p>
            <ul className="list-none space-y-2 mt-4 lg:mt-10 ">
              <li className="flex items-center">
                <CircleCheck className="mr-2 h-5 w-5 text-green-500" />
                <span className="lg:text-lg text-gray-500 dark:text-gray-200">
                  Monitor stocks easily and accurately
                </span>
              </li>
              <li className="flex items-center">
                <CircleCheck className="mr-2 h-5 w-5 text-green-500" />
                <span className="lg:text-lg text-gray-500 dark:text-gray-200">
                  Get regular reports on the shares your own
                </span>
              </li>
            </ul>
            <Button asChild size="lg" className="bg-black dark:bg-white rounded-full mt-10 md:w-1/4 w-1/2 md:p-0">
              <Link href="/docs">Learn more</Link>
            </Button>
          </div>
        </div>

        {/* Variety */}
        <div className="grid lg:grid-cols-2 gap-16 my-10 lg:my-20 ">
          <div className="flex flex-col justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:text-white rounded-full mt-10 md:w-1/2 sm:w-1/3 lg:w-full shadow-lg text-center uppercase "
            >
              <Link href="/docs">Get a lot of investment easy</Link>
            </Button>
            <h2 className="lg:text-7xl md:text-4xl text-xl font-bold font-sans my-10">
              A wide variety of stocks from all over the world
            </h2>
            <ul className="list-none lg:mt-10 flex items-center justify-between gap-4">
              <li className="flex">
                <Sparkle className="mr-2 h-10 w-10" />
                <span className="lg:text-lg  text-gray-500 dark:text-gray-200">
                  Starting from local stocks, US stocjs you can find and you can buy here
                </span>
              </li>
              <li className="flex">
                <Sparkle className="mr-2 h-10 w-10" />
                <span className="lg:text-lg text-gray-500 dark:text-gray-200">
                  You can buy interantional stocks easily and quickly only on GoStock
                </span>
              </li>
            </ul>
          </div>
          <Image src={Banner03} objectFit="fit" className="w-full h-full rounded-2xl" alt="banner" />
        </div>

        {/* Stock table */}
        <div className="my-10 md:my-20">
          <div className="grid lg:grid-cols-2">
            <h2 className="lg:text-6xl md:text-4xl text-xl font-bold font-sans my-10">
              Find the most suitable stock for you to buy now
            </h2>
          </div>
          <Table className="border-[2px] rounded-xl">
            <TableHeader>
              <TableRow>
                <TableHead>STOCKNAME</TableHead>
                <TableHead className="text-right">MARKETCAP</TableHead>
                <TableHead className="text-right">VOLUME</TableHead>
                <TableHead className="text-right">SUPPLY</TableHead>
                <TableHead className="text-right">TRADINGACTIVITIES</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stocks.map((stock: any) => (
                <>
                  <TableRow>
                    <TableCell className="font-medium flex gap-2 items-center">
                      <SocialIcon url={stock.stock_logo_url} />
                      <div>
                        <p> {stock.stock_name}</p>
                        <p> {stock.short_name}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-bold text-right">{stock.market_cap}</TableCell>
                    <TableCell className="font-bold text-right">{stock.volume}</TableCell>
                    <TableCell className="font-bold text-right">{stock.supply}</TableCell>
                    <TableCell className="text-right">
                      <span className="text-green-500">{stock.trade_activities.buy}Buy </span>|
                      <span className="text-red-500"> {stock.trade_activities.sell}Sell</span>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Download */}
        <div className="my-10 md:my-20 relative">
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:text-white rounded-full mt-12 shadow-lg p-4 uppercase"
            >
              <Link href="/docs">Get a lot of investment easy</Link>
            </Button>
          </div>
          <div className="absolute top-0 left-[3%]">
            <SocialIcon url="https://facebook.com/" />
          </div>
          <div className="absolute md:top-0 top-14 right-[3%] ">
            <SocialIcon url="https://google.com/" className="mt-10" style={{ height: 80, width: 80 }} />
          </div>

          <h2 className="lg:text-7xl md:text-4xl text-xl text-center font-bold font-sans md:mt-10 mt-20 lg:mx-40 md:mx-20">
            Download the application and feel the ease of investing
          </h2>
          <div className="md:block hidden absolute top-[55%] lg:right-[10%] right-[14%]">
            <SocialIcon url="https://github.com/" />
          </div>
          <div className="md:block hidden absolute top-[55%] lg:left-[10%] left-[14%]">
            <SocialIcon url="https://spotify.com/" />
          </div>
          <p className="lg:text-lg text-center md:mx-40 mt-10 lg:mt-20 dark:text-gray-200 text-gray-500">
            You can know use the GoStock application in the mobile version. You can get the app in the AppStore or
            PlayStore. Download now and feel convinient
          </p>
          <div className="md:block hidden absolute top-[60%]">
            <SocialIcon url="https://reddit.com/" style={{ height: 100, width: 100 }} />
          </div>
          <div className="md:block hidden absolute top-[85%] right-[6%]">
            <SocialIcon url="https://discord.com/" />
          </div>
        </div>
        <div className="mb-10 lg:mb-20">
          <Link href="/docs" className="items-center flex justify-center gap-10">
            <Image src={AppStoreImage} className="md:w-1/5 w-1/3 h-full" alt="app-store" />
            <Image src={GooglePlayImage} className="md:w-1/5 w-1/3 h-full" alt="gg-store" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Content
