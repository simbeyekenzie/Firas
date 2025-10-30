import React from 'react'

const label = () => {
  return (
    <section className='min-h-screen fix bg-blue-300 '>
        <div className='flex fixed w-full'>
          <div className='relative  top-5'>
            <img className='h-7' height={100} width={30} src="/assets/logo.PNG" alt="LOGO" />
          </div>
          <div className='relative top-5 left-[50%] -translate-x-1/2'>Nav Items</div>
        </div>
    </section>
  )
}

export default label