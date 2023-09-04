import React, { useEffect, useState } from 'react';
import FormAddTodo from '../compnents/FormAddTodo';
import FormGetTodo from '../compnents/FormGetTodo';

export default function Home() {
  const [isLoggin, setIsloggin] = useState(false);
  const userid = localStorage.getItem('userId');

  useEffect(() => {
    if (userid) {
      setIsloggin(true);
    }
  }, [userid]);

  return (
    <>
      <div className='bg-neutral-900 py-9'></div>
      {isLoggin ? (
        <div className='bg-neutral-800 py-24'>
          {/* content */}
          <div className=''>
            <div className='flex justify-center gap-10'>
              <FormAddTodo />
              <FormGetTodo />
            </div>
          </div>
          <div className='text-white flex justify-center'></div>
        </div>
      ) : (
        <div className='bg-neutral-800 py-24'>
          {/* content */}
          <div className=''>
            <div className='flex justify-center gap-10'>
              <section>
                <div className='bg-neutral-900 rounded-xl'>
                  <div className='w-96 py-10 px-10'>
                    <h1 className='text-white text-center'>
                      Please Login First
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className='text-white flex justify-center'></div>
        </div>
      )}
    </>
  );
}
