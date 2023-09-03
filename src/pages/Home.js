import React from 'react';

export default function Home() {
  const username = localStorage.getItem('username');
  return (
    <>
      <div className='bg-neutral-900 py-9'></div>
      <div className='bg-neutral-800 py-24'>
        {/* content */}
        <div className=''>
          <div className='flex justify-center gap-10'>
            <section>
              <div className='bg-neutral-900 rounded-xl'>
                <div className='w-96 py-10 px-10'>
                  <h1 className='text-white'>
                    <h1 className='flex justify-center'>
                      Hello, {username} !!
                    </h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='text-white flex justify-center'></div>
      </div>
    </>
  );
}
