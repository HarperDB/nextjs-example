import Link from 'next/link';

export default async function Page() {
	return (
		<section style={{ 
			minHeight: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '3rem 0 2rem',
			textAlign: 'center',
			backgroundColor: '#f8fafc',
			flex: 1,
			height: '100%'
		}}>
			<h1 style={{ 
				fontSize: '2.5rem', 
				fontWeight: '700', 
				margin: '0 0 1rem',
				color: '#1e293b',
				letterSpacing: '-0.025em'
			}}>
				Doggy Management System
			</h1>
			<p style={{ 
				fontSize: '1.125rem', 
				color: '#64748b', 
				margin: '0 0 1rem',
				maxWidth: '600px',
				marginLeft: 'auto',
				marginRight: 'auto'
			}}>
				An application for managing dog records. <br/> View, search, and organize your canine database with ease.
			</p>
			<Link href="/dogs">Dogs</Link>
		</section>
	);
}
