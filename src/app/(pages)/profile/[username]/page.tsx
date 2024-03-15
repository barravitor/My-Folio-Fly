import Link from 'next/link';
import { Github, Facebook } from 'lucide-react';

// Component's
import HeaderComponent from '@/app/components/header/header';
import { FooterComponent } from '@/app/components/footer';

type PortfolioProps = {
  params: {
    username: string;
  }
};

export default function Portfolio({ params: { username } }: PortfolioProps) {
  return (
    <main >
        <HeaderComponent username={username} />

        <div className='h-screen '>
          <Link key='home' href="/">
              <p className="hidden md:block">Voltar com a tag (LINK)</p>
          </Link>
          
          <a href="/">
              <p className="hidden md:block">Voltar com a tag (A)</p>
          </a>
        </div>

        <FooterComponent.Root>
          <FooterComponent.SocialMedia href='https://github.com/barravitor' target='_blank'>
            <FooterComponent.Icon
              icon={Github}
              strokeWidth={0.5}
              className="text-gray-900 fill-gray-900 hover:text-gray-300 hover:fill-gray-300 "/>
          </FooterComponent.SocialMedia>

          <FooterComponent.SocialMedia href='https://github.com/barravitor' target='_blank'>
            <FooterComponent.Icon
              icon={Facebook}
              strokeWidth={0.5}
              className="text-gray-900 fill-gray-900 hover:text-gray-300 hover:fill-gray-300 "/>
          </FooterComponent.SocialMedia>
        </FooterComponent.Root>
    </main>
  );
}
