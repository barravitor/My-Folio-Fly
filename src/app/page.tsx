import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link key='test' href="/test">
            <p className="hidden md:block">Rota de testes com a tag (LINK)</p>
        </Link>

        <a href="/test">
            <p className="hidden md:block">Rota de testes com a tag (A)</p>
        </a>
    </main>
  );
}
