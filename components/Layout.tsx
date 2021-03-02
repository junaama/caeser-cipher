import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Caeser Cipher" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>
        Naama Paulemont | 2021 |{" "}
        <a href="https://github.com/junaama/caeser-cipher">Github</a>
      </span>
    </footer>
  </div>
);

export default Layout;
