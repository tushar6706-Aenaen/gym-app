import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { EXERCISES, SCHEMES, WORKOUTS } from '../utils/swoldier';



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
    const [showModal, setShowModal] = useState(false);
    const [poison, setPoison] = useState('individual');
    const [muscles, setMuscles] = useState([]);
    const [goal, setGoal] = useState('strength_power');

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const updateMuscles = (muscleGroup) => {

        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return 
        }
        
        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            return
        }

        setMuscles([...muscles,muscleGroup])
    }
    return (
        <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']} >
            <Header index={1} title={'Pick your poison'} description={'Select the workout you wish to endure. '} />

            <div className='grid grid-cols-2 sm:grid-cols-4  gap-4'>

                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (

                        <button onClick={() => {
                            setPoison(type);
                        }} key={typeIndex} className={' bg-slate-950    flex   border   p-4 hover:border-blue-600 rounded-md justify-center items-center   duration-200 ' + (type === poison ? 'border-blue-600' : 'border-blue-400')}>
                            <p className='capitalize' >{type.replaceAll('_', " ")}</p>
                        </button>

                    )
                })}
            </div>

            <Header index={2} title={'Lock on targets'} description={'Select the muscles judged for annihilation. '} />

            <div className='bg-slate-950 flex flex-col  border border-solid  border-blue-400 rounded-md px-4  w-full  cursor-pointer  duration-200'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p>
                        Select muscle groups
                        <i className="fa-solid  fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                    </p>
                </button>
                {showModal && (<div className='flex p-3 flex-col '>
                    {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                        return (
                            <button onClick={() => {
                                setMuscles()
                            }} className='hover:text-blue-400  duration-200' key={muscleGroupIndex}>
                                <p className='uppercase p-1 text-lg'>{muscleGroup.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                </div>)}
            </div>


            <Header index={3} title={'Become Juggernaut'} description={'Select your ultimate objective.'} />

            <div className='grid grid-cols-3   gap-4'>

                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (

                        <button onClick={() => {
                            setGoal(scheme);
                        }} key={schemeIndex} className={' bg-slate-950    flex   border   p-4 hover:border-blue-600 rounded-md justify-center items-center   duration-200 ' + (scheme === goal ? ' border-blue-600 ' : ' border-blue-400')}>
                            <p className='capitalize' >{scheme.replaceAll('_', " ")}</p>
                        </button>

                    )
                })}
            </div>

        </SectionWrapper>
    )
}

export default Generator
