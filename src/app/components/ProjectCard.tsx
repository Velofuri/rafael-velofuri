import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  gitUrl: string
  previewUrl: string
}

export default function ProjectCard({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link
            href={gitUrl}
            target='_Blank'
            className='h-14 w-14 mr-2 border-2 relative rounded-full border-zintext-zinc-400 hover:border-white group/link'
          >
            <CodeBracketIcon className='h-10 w-10 text-zinc-400  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
          </Link>
          <Link
            href={previewUrl}
            target='_Blank'
            className='h-14 w-14 border-2 relative rounded-full border-zintext-zinc-400 hover:border-white group/link'
          >
            <EyeIcon className='h-10 w-10 text-zinc-400  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-zinc-900 py-6 px-4'>
        <h5 className='font-semibold text-xl mb-2'>{title}</h5>
        <p className='text-zinc-400'>{description}</p>
      </div>
    </div>
  )
}
