import { ReactNode } from "react";

interface SocialMediaProps {
	children?: ReactNode;
}

export default function Root({ children }: SocialMediaProps) {
	return (
		<footer className="bg-footer">
			<div className="w-full h-16 pl-4 pr-4 pt-2 grid grid-cols-1">
				<hr className="border-gray-400" />

				<div className="flex justify-between">
					<span className="text-sm text-gray-900">
						© 2024 <a href="http://localhost:3000" className="hover:underline">Portfólio™</a>. All Rights Reserved.
					</span>
					<div className="flex gap-1">{children}</div>
				</div>
			</div>
		</footer>
	)
}