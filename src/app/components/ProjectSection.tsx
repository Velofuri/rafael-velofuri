'use client'

import { useState, useRef } from 'react'
import ProjectCard, { ProjectCardProps } from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

export interface IProjectData extends ProjectCardProps {
  id: number
  tag: string[]
}

const projectData: IProjectData[] = [
  {
    id: 1,
    title: 'Controle de Compras',
    description: 'WebApp para realizar o controle de compras em supermercados',
    imgUrl: '/images/projects/controle-de-compra-image.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Velofuri/gerenciador-de-compras',
    previewUrl: 'https://app.velofuri.tech/',
  },
  {
    id: 2,
    title: 'Atualizador de Preços',
    description:
      'Esta aplicação recebe no FrontEnd um arquivo .csv e, no BackEnd, valida as regras de negócio e atualiza a base de dados',
    imgUrl: '/images/projects/atualizador-de-preco-image.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Velofuri/atualizador-de-preco',
    previewUrl: 'https://github.com/Velofuri/atualizador-de-preco',
  },
  {
    id: 3,
    title: 'API de consulta e backup',
    description:
      'API intermediária, responsável por consultar outra API, tratar e armazenar os dados',
    imgUrl: '/images/projects/api-consulta-backup-image.png',
    tag: ['All', 'BackEnd'],
    gitUrl: 'https://github.com/Velofuri/AtendimentoWhatszap',
    previewUrl: 'https://github.com/Velofuri/AtendimentoWhatszap',
  },
  {
    id: 4,
    title: 'Meu primeiro portfólio',
    description: 'Este projeto foi o início da minha jornada no FrontEnd',
    imgUrl: '/images/projects/primeiro-portifolio-image.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Velofuri/portfolio',
    previewUrl: 'https://velofuri.github.io/portfolio/',
  },
  {
    id: 5,
    title: 'Portfólio atual',
    description:
      'Novo portfólio onde aplico novos conhecimentos e técnicas de desenvolvimento, tem sido meu projeto preferido',
    imgUrl: '/images/projects/site-rafael-velofuri-image.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Velofuri/rafael-velofuri',
    previewUrl: '/',
  },
]

export default function ProjectSection() {
  const [tag, setTag] = useState<string>('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag: string) => {
    setTag(newTag)
  }

  const filteredProjects = projectData.filter((project) => project.tag.includes(tag))

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section>
      <h2
        id='projeto'
        className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'
      >
        Meus Projetos
      </h2>
      <div className='text-white flex justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
        <ProjectTag
          onClick={handleTagChange}
          name='BackEnd'
          isSelected={tag === 'BackEnd'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
