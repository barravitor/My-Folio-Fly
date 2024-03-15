interface HeaderComponentProps { 
	username?: string
}

export default function HeaderComponent(props: HeaderComponentProps) {
	return (
		<header className="bg-header h-14 w-full fixed z-10 rounded-b p-3 grid items-center grid-cols-1 gap-1 sm:grid-cols-3 border-b-slate-950 shadow-lg">
			<h1 className="text-gray-900 font-medium justify-self-center sm:justify-self-start">
				Portfólio
			</h1>
			<span className="hidden text-gray-900 font-medium sm:block justify-self-center">
				{props?.username ?? ''}
			</span>
		</header>
	)
}
