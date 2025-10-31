import React from "react";
import ClaudeRecipe from "./claudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipeFromGPT } from "../ai.js";
import "./Main.css";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  async function getRecipe() {
    setIsLoading(true);
    try {
      const RecipeMarkdown = await getRecipeFromGPT(ingredients);
      setRecipe(RecipeMarkdown);
    } catch (error) {
      console.error("Error getting recipe:", error);
      setRecipe(
        "Sorry, I couldn't generate a recipe at the moment. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add Ingredients"
          name="ingredient"
        />
        <button>+ Add Ingredients</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {isLoading && (
        <div className="loading-message">
          Cooking up the best dish for you...
        </div>
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
