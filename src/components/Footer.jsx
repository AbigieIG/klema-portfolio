

const Footer = () => {
    const today = new Date()
  return (
    <div className='flex justify-center text-[--primary-color] items-center text-center py-5'>
    &copy; {today.getFullYear()} Klema. All Right Reserved
    </div>
  )
}

export default Footer
