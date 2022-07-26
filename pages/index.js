import Head from "next/head";
import ColorChanger from "../components/ColorChanger";
import Counter from "../components/Counter";
import NameChanger from "../components/NameChanger";

export default function Home() {
  return (
    <div className="mx-auto container">
      <Head>
        <title>React Redux</title>
        <meta
          name="description"
          content="Startup Template for React-Redux Toolkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pt-5 mb-10 lg:mb-40">
        {" "}
        <h1 className="text-center text-5xl font-bold">
          React Redux Toolkit Template
        </h1>
      </header>
      <main className="grid lg:grid-cols-3 mt-10 justify-items-center">
        <Counter />
        <ColorChanger />
        <NameChanger />
      </main>
    </div>
  );
}
