import { useNavigate } from "react-router-dom";
import { RecipeTileModel } from "src/models/RecipeTileModel";

export interface RecipeTileProps {
  recipe: RecipeTileModel;
}

export const RecipeTile: React.FC<RecipeTileProps> = ({ recipe }) => {
  const navigation = useNavigate();

  return (
    <div
      className='flex flex-col justify-center align-middle w-80 h-80 m-2 box-border cursor-pointer overflow-hidden shadow-md bg-white hover:bg-blend-darken'
      onClick={() => navigation(`/recipes/${recipe.id}`)}>
      <img className='flex-shrink h-full w-full' src={recipe.picture} alt={recipe.name}></img>
      <span className='w-full text-center'>{recipe.name}</span>
    </div>
  );
};
