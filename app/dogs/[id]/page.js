import { getDog } from '@/app/actions';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Dog({ params }) {
	const dog = await getDog(params.id);
	
	if (!dog) {
		notFound();
	}

	return (
		<section>
			<h1>{dog.name}</h1>
			<p>Breed: {dog.get('breed')}</p>
			<p>Woof!</p>
		</section>
	);
}
