import NavLink from './NavLink'
import { INavLinks } from './Navbar'

interface MenuOverlayProps {
  links: INavLinks[]
}

export default function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <ul className='flex flex-col py-4 items-center md:hidden'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}
