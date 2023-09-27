using Microsoft.AspNetCore.Http.Extensions;

namespace MyRecipes.Gateway.Middleware;

public class ErrorHandlerMiddleware
{
    private readonly RequestDelegate next;
    private readonly ILogger<ErrorHandlerMiddleware> logger;

    public ErrorHandlerMiddleware(RequestDelegate next, ILogger<ErrorHandlerMiddleware> logger)
    {
        this.next = next;
        this.logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);

            if (context.Response is HttpResponse response && response.StatusCode == 404)
            {
                await response.WriteAsJsonAsync(new
                {
                    message = "Not Found"
                });
            }
            else if (context.Response is HttpResponse forbiddenResponse && forbiddenResponse.StatusCode == 403)
            {
                await forbiddenResponse.WriteAsJsonAsync(new
                {
                    error = "insufficient_permissions",
                    error_description = "Insufficient permissions to access resource",
                    message = "Permission denied"
                });
            }
            else if (context.Response is HttpResponse unauthorizedResponse && unauthorizedResponse.StatusCode == 401)
            {
                await unauthorizedResponse.WriteAsJsonAsync(
                    new
                    {
                        message = context.Request.Headers.ContainsKey("Authorization")
                                        ? "Bad credentials"
                                        : "Requires authentication"
                    });
            }
        }
        catch (Exception ex)
        {
            await HandleException(context, ex);
        }
    }

    private async Task HandleException(HttpContext context, Exception ex)
    {
        context.Response.StatusCode = 500;
        logger.LogError(ex, $"Error Raised At: {context.Request.GetDisplayUrl()} [{context.Request.Method}]");
        await context.Response.WriteAsJsonAsync(new { message = "Internal Server Error." });
    }
}
