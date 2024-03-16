'use client'

import Image from "next/image";

export interface Project {
    image: string,
    name: string,
    sourceUrl?: string,
    deployUrl?: string,
    description: string,
    technologies?: string[]
}

interface RootProps {
    project: Project
}

export default function Root({ project }: RootProps) {
    function openUrl(url: string): void {
        window.open(url, '_blank');
    }

    return (
        <article className='bg-gray-400 relative h-full flex flex-col items-center overflow-hidden rounded'>
            <header className="w-full flex flex-col pb-1 gap-2 items-center sm:flex-row">
                <Image src={project.image} width={500} height={500} className="justify-items-center size-52 rounded-br-none pt-2 sm:pt-0 sm:rounded-br-lg" alt='Image of project' />
                
                <div className="flex flex-col gap-1 pl-2 justify-center items-center sm:pl-0 sm:items-start">
                    <span className='text-lg font-medium'>{project.name}</span>
                    <span className="underline text-blue-900 decoration-blue-500/60">
                        { project.technologies?.join(' | ') }
                    </span>
                </div>
            </header>

            <section className='flex flex-col p-2 grow'>
                <p className="text-sm line-clamp-[8]" dangerouslySetInnerHTML={{__html: project.description}}></p>
            </section>

            <footer className="w-full flex justify-center gap-2 p-2 sm:justify-end">
                { project.sourceUrl ? (
                    <button className="bg-orange-600 rounded-lg w-28 text-white" onClick={() => openUrl(project.sourceUrl ?? '')}>
                        Source
                    </button>
                ) : null }

                { project.deployUrl ? (
                    <button className="bg-blue-800 rounded-lg w-28 text-white" onClick={() => openUrl(project.deployUrl ?? '')}>
                        Deploy
                    </button>
                ) : null }
            </footer>
        </article>
    )
}