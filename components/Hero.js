import Image from 'next/image';

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src={"/home_cinema.png"}  width={200} height={200} layout="responsive" />
      </div>
    </div>
  )
}

export default Hero