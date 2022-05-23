import Link from 'next/link';
// import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8'>
      {/* <NowPlaying /> */}
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Home</a>
          </Link>
          <Link href='/blog'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Blog</a>
          </Link>
          {/* <Link href='/dashboard'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Dashboard
            </a>
          </Link> */}
          <Link href='/projects'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Projects
            </a>
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://github.com/cishocksr'>
            GitHub
          </ExternalLink>
          <ExternalLink href='https://linkedin.com/in/christopherishockley'>
            LinkedIn
          </ExternalLink>
          <ExternalLink href='https://twitter.com/c_shocksr'>
            Twitter
          </ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/snippets'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Snippets
            </a>
          </Link>

          <Link href='/resources'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Resources
            </a>
          </Link>
        </div>
      </div>
      <p className='flex flex-row text-gray-400'>
        2022&copy; Christopher I. Shockley, Sr.
      </p>
    </footer>
  );
};

export default Footer;
