"use client"
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Tudo from '@/components/tudo';
import Link from 'next/link';
import { useTask } from '@/context/TaskContext';

export default function Home() {
  let { tasks, setTasks } = useTask();
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <div className='px-12 my-2'>
          <button className=' uppercase text-lg font-bold rounded-sm px-4 py-2 bg-green-300 hover:bg-green-400'>
            <Link href={'/addtask'} className="" >
              Add Task
            </Link>
          </button>
        </div>

        <div className=' w-5/5 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-12 py-2'>
          {
            tasks.length > 0 ?
              tasks.map((val, index) => {
                return <Tudo taskDetails={val} id={index} key={index} />
                // console.log(val)
              })
              :
              <>
              </>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}
