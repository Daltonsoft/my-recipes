namespace MyRecipes.Gateway.Middleware;

public static class SecureHeadersMiddlewareExtensions
{
    public static IApplicationBuilder UseSecureHeaders(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<SecureHeadersMiddleware>();
    }
}