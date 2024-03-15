import { ReactNode, AnchorHTMLAttributes } from "react";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: ReactNode;
}

export default function SocialMedia({ children, ...rest }: AnchorProps) {
	return <a {...rest}>
		{children}
	</a>
}