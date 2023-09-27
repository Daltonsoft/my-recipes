namespace MyRecipes.Gateway.Middleware;

public class SecureHeadersMiddleware
{
    private readonly RequestDelegate _next;

    public SecureHeadersMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        context.Response.Headers.Add("X-XSS-Protection", "0");
        context.Response.Headers.Add("X-Frame-Options", "deny");
        context.Response.Headers.Add("X-Content-Type-Options", "nosniff");

        // TODO add a proper CSP Header Value which is configurable
        //context.Response.Headers.Add("Content-Security-Policy", "default-src 'self'; frame-ancestors 'none';");
        context.Response.Headers.Add("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
        context.Response.Headers.Add("Pragma", "no-cache");

        await _next(context);
    }
}
