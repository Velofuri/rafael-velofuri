'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import WhatsappButton from './WhatsappButton'

export default function HeroSection() {
  const handleDownload = () => {
    const pdfUrl = 'CV-Rafael.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'CV-Rafael.pdf'
    link.click()
    link.remove()
  }

  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start lg:mr-10'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secundary-500'>
              Olá, Eu sou
            </span>
            <br />
            <TypeAnimation
              sequence={['Rafael', 1000, 'Web Developer', 1000]}
              wrapper='span'
              speed={35}
              repeat={Infinity}
            />
          </h1>
          <p className='text-zinc-400 text-base sm:text-lg mb-6 lg:text-xl'>
            Se você está procurando um desenvolvedor web experiente e qualificado para
            trabalhar em seu próximo projeto, entre em contato comigo para saber mais
            sobre meus serviços.
          </p>
          <div className='flex items-center flex-col sm:flex-row'>
            <div className='px-6 py-3 w-full sm:w-fit sm:mr-4 rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secundary-500 hover:opacity-80 text-white'>
              <WhatsappButton text='Conversar' />
            </div>
            <button
              onClick={handleDownload}
              className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secundary-500 hover:bg-slate-800 text-white mt-3 sm:mt-0'
            >
              <span className='block bg-background hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-zinc-800 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
            <Image
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src={'/images/hero-image.png'}
              alt='hero-image'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
