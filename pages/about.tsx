import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This website decodes and encodes text based on the Caeser Cipher.</p>
    <p>
      In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift
      cipher, Caesar's code or Caesar shift, is one of the simplest and most
      widely known encryption techniques. It is a type of substitution cipher in
      which each letter in the plaintext is replaced by a letter some fixed
      number of positions down the alphabet. For example, with a left shift of
      3, D would be replaced by A, E would become B, and so on. The method is
      named after Julius Caesar, who used it in his private correspondence.{" "}
      <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Wikipedia</a>
    </p>
    <p>
      <Link href="/">
        <a>Decode or Encode on the homepage!</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
