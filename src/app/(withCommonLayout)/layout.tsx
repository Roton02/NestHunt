import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-7xl mx-auto '>
      <Navbar />
      <div className='min-h-screen '>{children}</div>
      <Footer />
    </div>
  )
}

export default layout
