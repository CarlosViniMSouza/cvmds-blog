import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="items-center rounded">
          <div className="flex flex-grow">
            <h2 className="text-2xl font-bold">
              ✌️ ~ Hey, I'm a Junior Software Engineer.
              Studying Next.js, TailwindCSS and JS Ecossytem for build Full-Stack apps
            </h2>
          </div>
          <p className='mt-4'>
            About me: I'm a Software Engineer learning MERN Stack for turn me a FullStack Developer.
          </p>
          <p className='mt-4'>
            Moreover, I'm working how to volunteer intership in my college. 
            And I'm working in my research for the "Completion of Course Work" (TCC)
          </p>

          <p className='mt-4'>Below, my beloved setup! 💻🖥️🖱️</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desktop.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  )
}

export default HomePage
