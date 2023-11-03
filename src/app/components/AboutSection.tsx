'use client'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'
import Link from 'next/link'

interface ITAB_DATA {
  title: string
  id: string
  content: JSX.Element
}
const TAB_DATA: ITAB_DATA[] = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-4'>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: 'Formação',
    id: 'education',
    content: (
      <ul className='list-disc pl-4'>
        <li>Analise e Desenvolvimento de Sistemas</li>
        <li>Universidade Estácio de Sá</li>
      </ul>
    ),
  },
  {
    title: 'Certificados',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-4'>
        <li>
          <Link
            href={
              'https://cursos.alura.com.br/user/velofuri/fullCertificate/6dab49529329e3a55749b903279e01d3'
            }
            target='_black'
          >
            <span className='hover:underline hover:text-blue-800'>
              Click e veja todos os meus certificados
            </span>
          </Link>
        </li>
      </ul>
    ),
  },
]

export default function AboutSection() {
  const [tab, setTab] = useState<string>('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src={'/images/about-image.jpeg'}
          alt='About-Image'
          width={500}
          height={500}
          className='rounded-xl'
        />
        <div id='about' className='mt-8 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>
          <p className='text-base lg:text-lg'>
            Bem-vindo ao meu cantinho na web. Deixa eu te contar um pouco sobre mim:
            <br />
            Sou completamente apaixonado por programação. Comecei a programar em 2022 e,
            desde então, não consigo parar de aprender e criar. O que me motiva é a
            possibilidade de criar coisas novas e resolver problemas de forma criativa.
            <br />
            Além da programação, no meu tempo livre, gosto de assistir filmes e séries com
            a minha família. Mas, quando estou trabalhando em um projeto, nem vejo o tempo
            passar.
            <br />
            Aqui neste site, compartilho meus projetos e minha evolução na programação.
            Meu objetivo é me tornar um desenvolvedor web experiente e ajudar outras
            pessoas a criarem coisas incríveis.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Educação
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              Certificados
            </TabButton>
          </div>
          <div className='mt-4'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  )
}
