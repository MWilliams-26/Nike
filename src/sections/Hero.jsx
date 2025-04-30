import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { useState } from 'react'
import { arrowRight } from "../assets/icons"
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images"


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 
      flex flex-col justify-center items-start 
      w-full max-xl:padding-x pt-28 max-sm:pt-16 px-4 sm:px-6">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-6 sm:mt-10 font-palanquin text-6xl sm:text-7xl md:text-8xl max-sm:leading-[1.2] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6 mb-8 sm:mb-14 max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-12 sm:mt-20 gap-8 sm:gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-6 sm:leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
      max-xl:py-20 sm:max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 w-full max-w-[85%] sm:max-w-[90%] md:max-w-[610px]"
        />

        <div className="flex gap-3 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 max-sm:justify-center w-full sm:w-auto">
          {shoes.map((shoe, index) => (
            <div key={shoe.id || `shoe-${index}`} className="max-w-[80px] sm:max-w-none">
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(img) => setBigShoeImg(img)} 
                bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero