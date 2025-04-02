import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../ui/button'

function Navbar() {
  const user = true
  return (
    <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
    <Link className='text-4xl font-semibold text-purple-500' href={'/'}>NestHunt</Link>
      <div className='flex space-x-4 text-xl'>
        <Link href={'/'}>Home</Link>
        <Link href={'/listing'}>Listing</Link>
        <Link href={'/about'}>About us</Link>
        <Link href={'/dashboard/profile'}>Dashboard</Link>
        <Link href={'/dashboard/profile'}>My Profile</Link>
      </div>
      <div>
        {
          user? (
            <div className='flex justify-center items-center gap-4'>
              <Link href={'/dashboard/profile'}>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </Link>
              <Button className='border-2 border-purple-500 bg-purple-500   px-7'>
                Logout
              </Button>
            </div>
          ) : (
            <Link href={'/login'}>
              <Button className='border-2 border-purple-500 bg-purple-500   px-7'>
                Login
              </Button>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
