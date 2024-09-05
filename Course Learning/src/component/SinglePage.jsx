import React from 'react';
import ReactPlayer from 'react-player';

export const SinglePage = () => {
  return (
    <div className='w-full h-[200vh] overflow-hidden'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./css/main.css" />
        <title>Sea Scape</title>
      </head>
      <body className='w-full h-[200vh] relative overflow-hidden'>
        {/* <div className="wrapper">
          <section>
            <div className="first-row">
              <div className="one">
                <h2>Learn</h2>
                <p>
                  Learn under the guidance of the best tutor online 
                </p>
              </div>
              <div className="two">
                <h2>Ask Doubt</h2>
                <p>Use our 3D AI model to solve all your doubts</p>
              </div>
              <div className="three">
                <h2>Give Test</h2>
                <p>Test your skills in a real world proctored test arena</p>
              </div>
            </div>

            <h1 className='text-[10em] tracking-tighter whitespace-nowrap pl-10'>Explore Learning</h1>

            <div className="paragraphs">
              <p className="first-p">
                Unlock potential with special education, supporting every learner to achieve their best. Embrace inclusion, celebrate differences, and make a lasting impact on lives.
              </p>
              <p>
                Inclusive support with specialized care from our expert team, trained at the Special Ed Academy. We ensure every student receives the best experience possible.
              </p>
            </div>

            <img className="image-first" src="https://images.unsplash.com/photo-1602131133761-c698725d1d0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="first image" />
            <div className="border"></div>
            <img className="image-second" src="https://images.unsplash.com/photo-1508402476522-c77c2fa4479d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="second image" />
            <div className="border2"></div>
            <img className="image-third" src="https://images.unsplash.com/photo-1529440701349-739a457dbcdd?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="third image" />
          </section>
        </div> */}

        <div className='w-full h-screen absolute top-0 flex items-center justify-center flex-col'>
          <div className='w-[60%] h-[70%] bg-black rounded-xl flex items-center justify-center'>
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=OHJRs-a7zhY' 
              width='100%' 
              height='100%' 
//               controls 
              playing={false} // Video only plays on user interaction
            />
          </div>
          <div className='w-[60%] text-3xl font-bold flex justify-between mt-10'>
            <button className='py-2 px-5 border-[1px] border-black rounded-xl'>Mark as complete</button>
            <button onClick={()=>window.location.href="https://www.youtube.com/results?search_query=basic+maths"} className='py-2 px-5 border-[1px] border-black rounded-xl'>Enhance learning</button>
          </div>
        </div>
      </body>
    </div>
  );
};
