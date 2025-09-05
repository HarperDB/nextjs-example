import Link from 'next/link';

export const metadata = {
	title: 'Doggy Management System',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				style={{
					margin: 0,
					fontFamily: 'system-ui, -apple-system, sans-serif',
					lineHeight: 1.6,
					color: '#333',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<header style={{ backgroundColor: '#403b8a', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
					<nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
						<ul
							style={{
								display: 'flex',
								gap: '2rem',
								listStyle: 'none',
								padding: '1rem 0',
								margin: 0,
								alignItems: 'center',
							}}
						>
							<li style={{ marginRight: 'auto' }}>
								<Link
									href="/"
									style={{ color: 'white', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}
								>
									Doggy Management System
								</Link>
							</li>
							<li>
								<Link
									href="/"
									style={{
										color: 'white',
										textDecoration: 'none',
										padding: '0.5rem 1rem',
										borderRadius: '4px',
										transition: 'background-color 0.2s',
									}}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/dogs"
									style={{
										color: 'white',
										textDecoration: 'none',
										padding: '0.5rem 1rem',
										borderRadius: '4px',
										transition: 'background-color 0.2s',
									}}
								>
									Dogs
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main
					style={{
						flex: 1,
						maxWidth: '1200px',
						margin: '0 auto',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{children}
				</main>
				<footer style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e5e7eb', marginTop: 'auto' }}>
					<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem 1rem', textAlign: 'center' }}>
						<p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>
							Built with{' '}
							<Link href="https://harpersystems.dev" style={{ color: '#403b8a', textDecoration: 'none' }}>
								Harper
							</Link>
							{' & '}{' '}
							<Link href="https://nextjs.org" style={{ color: '#403b8a', textDecoration: 'none' }}>
								Next.js
							</Link>
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
