import Link from 'next/link'

export interface NavLinkProps {
  href: string
  title: string
}

export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link
      href={href}
      className='block py-2 pl-3 pr-4 text-zinc-400 sm:text-xl rounded md:p-0 hover:text-white'
    >
      {title}
    </Link>
  )
}
