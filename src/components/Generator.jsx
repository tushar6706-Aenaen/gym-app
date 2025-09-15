import React from 'react'
import SectionWrapper from './SectionWrapper'
import { EXERCISES, WORKOUTS } from '../utils/swoldier';



const Header = (props) => {
    const { index, title, description } = props;

    return (
        <div className='flex flex-col  gap-4'>
            <div className='flex items-center justify-center gap-4 '>
                <p className='text-3xl sm:text-4xl md:text-5xl  font-semibold text-slate-400 '>{index}</p>
                <h4 className='font-semibold text-xl sm:text-2xl md:text-3xl text-slate-300'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base  mx-auto'>{description}</p>
        </div>
    )
}
const Generator = () => {
    return (
        <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']} >
            <Header index={1} title={'Pick your poison'} description={'Select the workout you wish to endure. '} />

            <div className='grid grid-cols-2 sm:grid-cols-4  gap-4'>

                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (

                        <button key={typeIndex} className=' bg-slate-950   flex   border border-blue-400 p-4 rounded-md justify-center items-center  hover:border-blue-600 duration-200'>
                            <p className='capitalize' >{type.replaceAll('_', " ")}</p>
                        </button>

                    )
                })}
            </div>

            <Header index={2} title={'Lock on targets'} description={'Select the muscles judged for annihilation. '} />

            <div className='bg-slate-950 py-3 border border-solid border-blue-400 rounded-md px-4  w-full  cursor-pointer hover:bg-slate-800 duration-200'>
                <div className='relative'>
                    <p>
                        Select muscle groups
                        <i className="fa-solid  fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                    </p>
                </div>
            </div>
            
        </SectionWrapper>
    )
}

export default Generator
