import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
      <Link href={'/'}>Basa Finder</Link>
      <div className='flex space-x-4 text-xl'>
        <Link href={'/dashboard/profile'}>Dashboard</Link>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>Register</Link>
      </div>
    </div>
  )
}

export default Navbar
