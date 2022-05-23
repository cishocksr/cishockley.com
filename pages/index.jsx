import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { RainbowHighlight } from '@/util/RainbowHighlight';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export default function Home() {
  return (
    <Container title='Chris Shockley - Software Engineer' description=''>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex md:w-3/4 flex-col'>
            <RoughNotationGroup>
              <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
                Chris{' '}
                <RainbowHighlight>
                  <span className='dark:text-black'>Shockley</span>
                </RainbowHighlight>{' '}
              </h1>

              <h2 className='text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                rerum iure perferendis facere dolorum eligendi, eius tempora
                recusandae atque hic dignissimos officiis asperiores unde error
                suscipit, velit esse. Veritatis, laboriosam!
              </h2>
            </RoughNotationGroup>
          </div>

          <div className='md:flex hidden md:w-1/4 flex-col'>
            <Image
              src='/avatar.JPG'
              className='rounded-full max-w-[200px] shadow-xl shadow-cyan-500/50'
              height={250}
              width={250}
            />
          </div>
        </div>
        {/* Blog Post */}
        <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white'>
          Projects
        </h3>
        <ProjectCard
          title='Covid Tracker'
          description='Tracker using API from the World Health Organization to display up to date COVID-19 Information'
          href='https://covid-19-tracker-dd484.web.app/'
          icon=''
          tags={['React', 'Chart.js', 'Material UI']}
        />
        <ProjectCard
          title='Game of Life'
          description='A cellular automation created by British Mathematician John Horton Conway. Built using React while attending Bloom Institue &#40;formerly Lamda School&#41;.'
          href='https://github.com/cishocksr/conways-game-of-life'
          icon=''
          tags={['React']}
        />

        <ProjectCard
          title='PlaceholderTech'
          description='We build modern, blazing-fast web applications which helps your business grow and increase sales.'
          href='https://placeholdertech.in/'
          icon='placeholdertech'
        />
        <Link href='/projects'>
          <a
            type='button'
            className='flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100'
          >
            See More
            <svg
              className='h-4 w-4 ml-1'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}
