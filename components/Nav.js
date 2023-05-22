import idx from '../styles/index.module.css';
import Link from 'next/link'

export const Nav = () => {
  return (
<nav>
      <ul className="flex  justify-center my-2  cursor-pointer">
        <Link href='/'><li className="mx-3">Home</li></Link>
        <Link href='/About'><li className="mx-3">About</li></Link>
        <Link href='/Contact'><li className="mx-3">Contact</li></Link>
        <Link href='/Blog'><li className="mx-3">Blog</li></Link>
      </ul>
    </nav>
      )
}
export default Nav;