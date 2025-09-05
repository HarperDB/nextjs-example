import Link from 'next/link';
import { listDogs, createDog } from '@/app/actions';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function handleCreateDog(formData) {
	'use server';
	try {
		await createDog(formData);
		redirect('/dogs');
	} catch (error) {
		console.error('Failed to create dog:', error);
	}
}

export default async function DogsPage({ searchParams }) {
	const dogs = await listDogs();
	const searchQuery = searchParams?.search?.toLowerCase() || '';
	
	const filteredDogs = dogs.filter(dog => 
		dog.name.toLowerCase().includes(searchQuery)
	);

	return (
		<section>
			<h1>Dogs</h1>
			
			{/* Search Form */}
			<form method="GET" style={{ marginBottom: '20px' }}>
				<input 
					type="text" 
					name="search" 
					placeholder="Search dogs by name..." 
					defaultValue={searchParams?.search || ''}
					style={{ padding: '8px', marginRight: '10px', width: '200px' }}
				/>
				<button type="submit">Search</button>
				{searchQuery && (
					<Link href="/dogs" style={{ marginLeft: '10px' }}>Clear</Link>
				)}
			</form>
			
			{/* Dogs List */}
			{filteredDogs.length > 0 ? (
				<div>
					<h2>Dogs ({filteredDogs.length})</h2>
					<ul>
						{filteredDogs.map(dog => (
							<li key={dog.id} style={{ marginBottom: '8px' }}>
								<Link href={`/dogs/${dog.id}`}>
									<strong>{dog.name}</strong>
								</Link>
							</li>
						))}
					</ul>
				</div>
			) : (
				<p>{searchQuery ? `No dogs found matching "${searchParams.search}"` : 'No dogs found. Add one below!'}</p>
			)}
			
			{/* Create Dog Form */}
			<div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
				<h2>Add a New Dog</h2>
				<form action={handleCreateDog}>
					<div style={{ marginBottom: '10px' }}>
						<label htmlFor="name">Name:</label><br />
						<input 
							type="text" 
							id="name" 
							name="name" 
							required 
							style={{ padding: '8px', width: '200px' }}
						/>
					</div>
					<div style={{ marginBottom: '10px' }}>
						<label htmlFor="breed">Breed:</label><br />
						<input 
							type="text" 
							id="breed" 
							name="breed" 
							required 
							style={{ padding: '8px', width: '200px' }}
						/>
					</div>
					<button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
						Add Dog
					</button>
				</form>
			</div>
		</section>
	);
}
