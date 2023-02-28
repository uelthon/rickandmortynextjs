import Link from 'next/link'

import styles from '@/styles/Navbar.module.css'
import ToggleTheme from './ToggleTheme'

export default function Navbar ({ children }) {
  return (
    <>
      <div className='navbar bg-base-100 fixed top-0 left-0 w-full z-50'>
        <div className='flex-1'>
          <Link className='btn btn-ghost normal-case text-xl' href='/'>daisyUI</Link>
        </div>
        <div className='flex-none gap-2'>
          <div className='flex items-center gap-2 mr-1'>
            <Link href='/personajes'>Personajes</Link>
            <Link href='/about'>About</Link>
          </div>
          <div className='form-control'>
            <input type='text' placeholder='Search' className='input input-bordered' />
          </div>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src='https://i.pravatar.cc/300' />
              </div>
            </label>
            <ul tabIndex={0} className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          <ToggleTheme />
        </div>
      </div>
      <main className={styles.containerMain}>{children}</main>
    </>
  )
}
