import Link from 'next/link';

const YourComponent = () => (
  <div className='w-full h-screen flex items-center justify-center flex-col gap-5'>
    <div className='text-xl  capitalize'>welcome to the test arean</div>
  <Link className='p-4 border-[1px] border-blue-900 bg-blue-300 rounded-lg text-white' href="/dashboard">
    <div>Go to Dashboard</div>
  </Link>
  </div>
);

export default YourComponent;
