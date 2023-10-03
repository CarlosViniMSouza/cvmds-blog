import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Hey, I'm a Junior Software Engineer based in Brazil. I'm studying Next.js
            for a big college project. I hope to have good experiences and some important learnings.
          </h2>
          <p>
            About me: I'm a Software Engineer learning MERN Stack for turn me a FullStack Developer.
            I've experiences with A.I. & Machine Learning; Data Analysis & Data Scince; Web & Mobile Development; UI/UX tests.
          </p>
          <p>
            Moreover, I'm working how to volunteer intership in my college. 
            And I'm working in my research for the "Completion of Course Work" (TCC)
          </p>

          <p>Below, my beloved setup! ❤️💻🖥️🖱️💜</p>
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
