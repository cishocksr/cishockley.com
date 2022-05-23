export default function ProjectCard({ title, description, href, icon, tags }) {
  // const tags = ["GitHub", "React", "JamStack"];
  return (
    <a
      className='mb-4 hover:shadow rounded-md shadow-custom border-2 border-[#212121] transition duration-200'
      href={href}
      aria-label={title}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex items-center border border-gray-200 dark:border-gray-800 rounded p-4'>
        {/* */}
        <div>
          {icon == 'more' && (
            <>
              <h4 className='text-lg font-bold tracking-tight text-gray-400 dark:text-gray-100'>
                {title}
              </h4>
              <p className='leading-5 text-gray-500 dark:text-gray-300'>
                {description}
              </p>
            </>
          )}

          {icon != 'more' && (
            <>
              <h4 className='text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100'>
                {title}
              </h4>
              <p className='leading-5 text-gray-700 dark:text-gray-300'>
                {description}
              </p>
              <div className='pt-2 flex md:flex-row space-x-2'>
                {tags?.map((tag, idx) => (
                  <p
                    key={idx}
                    className={`leading-5 dark:border text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  `}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </a>
  );
}
