namespace MyRecipes.Gateway.Authorization;

public static class ScopeConstants
{
    /// <summary>
    /// can read recipes
    /// </summary>
    public const string ReadRecipe = "read:recipe";
    /// <summary>
    /// can write / create new recipes
    /// </summary>
    public const string WriteRecipe = "write:recipe";
    /// <summary>
    /// can delete recipes
    /// </summary>
    public const string DeleteRecipe = "delete:recipe";
    /// <summary>
    /// can update recipes
    /// </summary>
    public const string UpdateRecipe = "update:recipe";
    /// <summary>
    /// can perform all crud operations
    /// </summary>
    public const string CRUDRecipe = "crud:recipe";
}
