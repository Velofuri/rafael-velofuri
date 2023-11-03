'use client'
import Link from 'next/link'
import NavLink from './NavLink'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

export interface INavLinks {
  title: string
  path: string
}

const navLinks: INavLinks[] = [
  {
    title: 'Sobre',
    path: '#about',
  },
  {
    title: 'Projetos',
    path: '#projeto',
  },
  {
    title: 'Contato',
    path: '#contato',
  },
]

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)
  return (
    <nav className=' border border-x-transparent border-t-transparent border-zinc-700  bg-background'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={'/'} className='flex items-center gap-1'>
          <Image
            src={'/images/logo-rv-blue.png'}
            alt='logo RV'
            width={45}
            height={45}
            // style={{ filter: 'hue-rotate(220deg)' }}
          />
          <p className='text-indigo-400'>Rafael Velofuri</p>
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}
