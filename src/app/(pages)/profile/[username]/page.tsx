import Link from 'next/link';
import { ElementType } from 'react';
import { Github, Facebook, User, MapPin, Mail, Phone } from 'lucide-react';
import Image from "next/image";

// Component's
import HeaderComponent from '@/app/components/header/header';
import { FooterComponent } from '@/app/components/footer';
import { ProjectCardComponent } from '@/app/components/project-card';
import { Project } from '@/app/components/project-card/root';

interface PortfolioProps {
    params: {
        username: string;
    }
};

interface SocialMedia {
    url: string,
    icon: ElementType
}

const socialMedias: SocialMedia[] = [{
    url: 'https://github.com/barravitor',
    icon: Github
}, {
    url: 'https://github.com/barravitor',
    icon: Facebook
}];

interface Profile {
    fullName: string,
    slog: string,
    about: string,
    photoUrl: string,
    phoneNumber: string,
    emailAddress: string,
    address: string,
    projects?: Project[]
}

const profile: Profile = {
    fullName: 'Edson Vitor',
    slog: 'Desenvolvedor Pleno | React, JavaScript, NodeJs, Angular',
    about: `Bem-vindo ao meu mundo! Sou um indivíduo apaixonado pela vida, em busca constante de crescimento pessoal e desenvolvimento. Navegar por este campo é adentrar nos recantos da minha mente, onde minhas paixões, interesses e experiências se entrelaçam para formar a tapeçaria única que sou.<br/><br/>
    Sou um eterno aprendiz, sempre sedento por conhecimento e novas descobertas. Desde os meus primeiros passos até as minhas conquistas mais recentes, cada experiência moldou quem sou hoje. Sou fascinado pela diversidade cultural, pela criatividade humana e pelas maravilhas da natureza, e é nesse contexto que encontro inspiração para meus pensamentos e ações.<br/><br/>
    Minha jornada é marcada por uma busca incessante pela autenticidade e pelo significado. Valorizo profundamente as conexões humanas genuínas e o poder das relações interpessoais para transformar vidas. Acredito no potencial ilimitado do ser humano para criar, inovar e impactar positivamente o mundo ao nosso redor.<br/><br/>
    Este campo é mais do que um simples reflexo de quem sou; é um convite para explorar junto comigo os mistérios da existência, os desafios da vida e as alegrias da descoberta. Aqui, compartilho minhas reflexões, minhas aspirações e minhas experiências, na esperança de que possamos inspirar e ser inspirados mutuamente.<br/><br/>
    Então, bem-vindo ao meu campo! Vamos embarcar juntos nesta jornada de autoconhecimento, crescimento e realização. Juntos, podemos explorar os limites do que é possível e criar um futuro repleto de significado e propósito.<br/><br/>`,
    photoUrl: 'https://avatars.githubusercontent.com/u/25044660',
    phoneNumber: '119547354027',
    emailAddress: 'email@email.com.br',
    address: 'Rua das flores, número 381, barueri - SP, Brasil',
    projects: [
    {
        image: 'https://avatars.githubusercontent.com/u/25044660',
        name: "Portfólio",
        description: ` 1 - Bem-vind`,
        sourceUrl: 'https://github.com/barravitor/portfolio',
        deployUrl: 'https://github.com/barravitor/portfolio',
        technologies: ['NextJs', 'ReactJs', 'TypeScript']
    } 
    , {
        image: 'https://firebasestorage.googleapis.com/v0/b/my-folio-fly.appspot.com/o/ewe432131278dasdaewq.png?alt=media&token=24b0630f-3bea-4793-83d0-09e0f032b05c',
        name: "To do List",
        description: `App para adicionar uma lista de tarefas`,
        sourceUrl: 'https://github.com/barravitor/to-do-list',
        deployUrl: 'https://to-do-list-barravitor.vercel.app',
        technologies: ['TypeScript', 'ReactJs', 'NextJs']
    }, {
        image: 'https://avatars.githubusercontent.com/u/25044660',
        name: "Encriptogrador de texto",
        description: ` 2 - Bem-vindo ao meu mundo! Sou um indivíduo apaixonado pela vida, em busca constante de crescimento pessoal e desenvolvimento. Navegar por este campo é adentrar nos recantos da minha mente, onde minhas paixões, interesses e experiências se entrelaçam para formar a tapeçaria única que sou`,
        technologies: ['AngularJs', 'TypeScript', 'CSS', 'NextJs', 'ReactJs', 'AngularJs', 'TypeScript', 'CSS', 'NextJs', 'ReactJs']
    }, {
        image: 'https://avatars.githubusercontent.com/u/25044660',
        name: "Portfólio",
        description: `Bem-vindo ao meu mundo! Sou um indivíduo apaixonado pela vida, em busca constante de crescimento pessoal e desenvolvimento. Navegar por este campo é adentrar nos recantos da minha mente, onde minhas paixões, interesses e experiências se entrelaçam para formar a tapeçaria única que sou.<br/><br/>
        Sou um eterno aprendiz, sempre sedento por conhecimento e novas descobertas. Desde os meus primeiros passos até as minhas conquistas mais recentes, cada experiência moldou quem sou hoje. Sou fascinado pela diversidade cultural, pela criatividade humana e pelas maravilhas da natureza, e é nesse contexto que encontro inspiração para meus pensamentos e ações.<br/><br/>
        Minha jornada é marcada por uma busca incessante pela autenticidade e pelo significado. Valorizo profundamente as conexões humanas genuínas e o poder das relações interpessoais para transformar vidas. Acredito no potencial ilimitado do ser humano para criar, inovar e impactar positivamente o mundo ao nosso redor.<br/><br/>
        Este campo é mais do que um simples reflexo de quem sou; é um convite para explorar junto comigo os mistérios da existência, os desafios da vida e as alegrias da descoberta. Aqui, compartilho minhas reflexões, minhas aspirações e minhas experiências, na esperança de que possamos inspirar e ser inspirados mutuamente.<br/><br/>
        Então, bem-vindo ao meu campo! Vamos embarcar juntos nesta jornada de autoconhecimento, crescimento e realização. Juntos, podemos explorar os limites do que é possível e criar um futuro repleto de significado e propósito.<br/><br/>`,
        technologies: ['AngularJs', 'TypeScript']
    }]
};

export default function Portfolio({ params: { username } }: PortfolioProps) {
    return (
        <>
            <HeaderComponent username={username} />

            <main className='bg-main flex flex-col h-full gap-y-0.5'>
                <section className='bg-main-primary min-h-72 w-full grid grid-cols-6 grid-flow-row pl-10 pr-10 gap-2'>
                    <div className='col-span-4 col-start-2 flex justify-end lg:col-span-2 lg:col-start-1'>
                        <div className="w-full flex justify-center items-center lg:justify-end">  
                            <Image src={profile.photoUrl} width={1920} height={1080} className="rounded-full border-4 size-44 md:size-64 " alt="Avatar image" />
                        </div> 
                    </div>

                    <div className='col-span-6 col-start-1 pt-0 lg:col-span-6 lg:col-start-3 lg:pt-12'>
                        <div className='flex-row'>
                            <div className='flex flex-col gap-1 pb-5'>
                                { profile.fullName && <h3 className='text-gray-700 text-center text-4xl lg:text-start'>{profile.fullName}.</h3> }
                                { profile.slog && <span className='text-gray-700 text-center text-sm lg:text-start'>{profile.slog}</span> }
                            </div>

                            <div className='flex flex-col gap-2'>
                                { profile.phoneNumber ? (
                                    <div className='flex gap-2'>
                                        <Phone className='text-gray-700'></Phone >
                                        <span className='text-gray-700'>(11) 95473-54027</span>
                                    </div>
                                ) : null }

                                { profile.emailAddress ? (
                                    <div className='flex gap-2'>
                                        <Mail className='text-gray-700'></Mail >
                                        <span className='text-gray-700'>{profile.emailAddress}</span>
                                    </div>
                                ): null }

                                { profile.address ? (
                                    <div className='flex gap-2'>
                                        <MapPin className='text-gray-700'></MapPin>
                                        <span className='text-gray-700'>{profile.address}</span>
                                    </div>
                                ) : null }
                            </div>
                        </div>
                    </div>
                </section>

                { profile.about ? (
                    <section className='bg-main-secondary min-h-72 w-full pl-10 pr-10 gap-2'>
                        <h6 className="text-2xl font-medium text-center uppercase p-5">About Me</h6>
                        <p className="text-sm" dangerouslySetInnerHTML={{__html: profile.about}}></p>
                    </section>
                ) : null}

                { profile.projects ? (
                    <section className='bg-main-primary min-h-72 w-full pt-2 pl-4 pr-4 md:pl-28 md:pr-28'>
                        <div className='min-h-72 grid grid-cols-1 gap-2 xl:grid-cols-2'>
                            { profile.projects?.map((element: Project, index: number) => <ProjectCardComponent.Root project={element} key={index} />)}
                        </div>
                    </section>
                ) : null }
            </main>

            <FooterComponent.Root>
                { socialMedias.map((element: SocialMedia, index: number) => {
                    return (
                        <FooterComponent.SocialMedia href={element.url} target='_blank' key={index}>
                            <FooterComponent.Icon
                                icon={element.icon}
                                strokeWidth={0.5}
                                className="text-gray-900 fill-gray-900 hover:text-gray-300 hover:fill-gray-300" />
                        </FooterComponent.SocialMedia>
                    )
                }) }
            </FooterComponent.Root>
        </>
    );
}
