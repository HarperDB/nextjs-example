import Link from 'next/link';

export const metadata = {
	title: 'Harper - Next.js App',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body style={{ width: '800px', fontFamily: 'sans-serif' }}>
				<header>
					<nav>
						<ul
							style={{
								display: 'flex',
								gap: '1rem',
								listStyle: 'none',
								padding: 0,
							}}
						>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/dogs">Dogs</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<section style={{ borderBottom: '1px solid' }}>
						<h1>Harper Next.js Example Application</h1>
						<p>This application demonstrates multiple distinct Next.js features.</p>

						<p>Use the navigation links to try different page types.</p>

						<p>
							Dig into the source code here:{' '}
							<Link href="https://github.com/HarperDB/nextjs-example">HarperDB/nextjs-example</Link>
						</p>
					</section>
					{children}
				</main>
			</body>
		</html>
	);
}
