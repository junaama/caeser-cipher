import Link from 'next/link'
import Layout from '../components/Layout'
import InputForm from '../components/InputForm'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Caeser Cipher 💻</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <InputForm/>
  </Layout>
)

export default IndexPage
