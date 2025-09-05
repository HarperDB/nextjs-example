'use server';

import('harperdb');

export async function listDogs() {
	try {
		const dogs = [];
		if (typeof tables === 'undefined' || !tables.Dog) {
			return dogs;
		}
		for await (const dog of tables.Dog.search()) {
			dogs.push({ id: dog.id, name: dog.name });
		}
		return dogs;
	} catch (error) {
		console.error('Error listing dogs:', error);
		return [];
	}
}

export async function getDog(id) {
	try {
		if (typeof tables === 'undefined' || !tables.Dog) {
			return null;
		}
		return await tables.Dog.get(id);
	} catch (error) {
		console.error('Error getting dog:', error);
		return null;
	}
}

export async function createDog(formData) {
	const name = formData.get('name');
	const breed = formData.get('breed');
	
	if (!name || !breed) {
		throw new Error('Name and breed are required');
	}
	
	if (typeof tables === 'undefined' || !tables.Dog) {
		throw new Error('Database not available');
	}
	
	return await tables.Dog.create({ name, breed });
}
