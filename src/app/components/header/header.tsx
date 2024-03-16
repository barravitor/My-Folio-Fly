import Image from 'next/image'
import Link from 'next/link'

interface HeaderComponentProps { 
	username?: string
}

export default function HeaderComponent(props: HeaderComponentProps) {
	return (
		<header className="h-14">
			<div className="bg-header select-none  h-14 w-full fixed z-10 rounded-b p-3 grid items-center grid-cols-1 gap-1 sm:grid-cols-3 border-b-slate-950 shadow-lg">
				<Link key='home' href="/">
					<Image src="/logo.png" width={1000} height={100} alt='Image logo' className='w-28' />
				</Link>
			
				<span className="hidden text-gray-900 font-medium sm:block justify-self-center">
					{props?.username ?? ''}
				</span>
			</div>
		</header>
	)
}
