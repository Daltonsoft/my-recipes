import { useNavigate } from "react-router-dom";
import { RecipeTileModel } from "src/models/RecipeTileModel";

interface Props {
  recipe: RecipeTileModel;
}

export const RecipeTile: React.FC<Props> = ({ recipe }) => {
  const navigation = useNavigate();

  return (
    <div
      className='recipe-tile flex flex-col justify-center align-middle w-80 h-80 m-2 cursor-pointer overflow-hidden shadow-md'
      onClick={() => navigation(`/recipes/${recipe.id}`)}>
      <img className='flex-shrink h-full w-full' src={recipe.picture} alt={recipe.name}></img>
      <span className='w-full text-center'>{recipe.name}</span>
    </div>
  );
};
