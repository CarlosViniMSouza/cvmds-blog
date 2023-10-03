import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-4">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">About Me</Link>
          <Link href="/posts">Posts</Link>
          <Link href="https://github.com/CarlosViniMSouza">GitHub</Link>
        </nav>
      </Container>
    </header>
  )
}
