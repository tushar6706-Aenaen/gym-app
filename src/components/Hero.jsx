import React from 'react'

const Hero = () => {
    return (
        <div className='min-h-screen text-center flex flex-col gap-10 items-center justify-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

            <p className='uppercase'>It's time to get</p>
            <h1 className='uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Swole<span className='text-blue-400'>NORMOUS</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'> mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <button className='px-8 py-4 rounded-md border border-blue-400 border-solid bg-slate-950 blueShadow duration-200'><p>Accept and Begin</p></button>
        </div>
    )
}

export default Hero
