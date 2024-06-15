
interface CategoryCardProps {
	active?: boolean;
	name: string;
}
const CategoryCard = ({ name }: CategoryCardProps) => {
	return (
		<div className="px-8 py-2 rounded-md bg-[#F8F9FB]">
			<p className="text-[#323539]">Category {name} </p>
		</div>
	);
};

export default CategoryCard;
