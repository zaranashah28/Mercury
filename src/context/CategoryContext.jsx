import { useState, createContext } from 'react';
import { categoryData } from '../data/categoryData';

// Create category context
export const CategoryContext = createContext();

// Create the category context provider
export const CategoryProvider = (props) => {
	const [category, setCategory] = useState(categoryData);
	const [searchCategory, setSearchCategory] = useState('');
	const [selectCategory, setSelectCategory] = useState('');

	// Search category by project title
	const searchCategoryByTitle = category.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchCategory.toLowerCase())
			? item
			: searchCategory === ''
			? item
			: '';
		return result;
	});

	// Select category by project category
	const selectCategoryByCategory = category.filter((item) => {
		let categories =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return categories.includes(selectCategory);
	});

    console.log("category",category)
	return (
		<CategoryContext.Provider
			value={{
				category,
				setCategory,
				searchCategory,
				setSearchCategory,
				searchCategoryByTitle,
				selectCategory,
				setSelectCategory,
				selectCategoryByCategory,
			}}
		>
			{props.children}
		</CategoryContext.Provider>
	);
};
