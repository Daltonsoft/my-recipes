using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using MyRecipes.Gateway.Authorization;

public static class AuthConfigExtensions
{
    public static IServiceCollection SetupAuth(this IServiceCollection service, IConfiguration configuration)
    {
        service
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                var audience = configuration.GetValue<string>("authentication:audience");
                options.Authority = configuration.GetValue<string>("authentication:authority");
                options.Audience = audience;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateAudience = !string.IsNullOrEmpty(audience),
                    ValidateIssuerSigningKey = true
                };
            });

        service
            .AddAuthorization(options =>
            {
                options.AddPolicy(PolicyConstants.ReadRecipe, policy => { policy.Requirements.Add(new RbacRequirement(new[] { ScopeConstants.ReadRecipe, ScopeConstants.CRUDRecipe })); });
                options.AddPolicy(PolicyConstants.WriteRecipe, policy => { policy.Requirements.Add(new RbacRequirement(new[] { ScopeConstants.WriteRecipe, ScopeConstants.CRUDRecipe })); });
                options.AddPolicy(PolicyConstants.UpdateRecipe, policy => { policy.Requirements.Add(new RbacRequirement(new[] { ScopeConstants.UpdateRecipe, ScopeConstants.CRUDRecipe })); });
                options.AddPolicy(PolicyConstants.DeleteRecipe, policy => { policy.Requirements.Add(new RbacRequirement(new[] { ScopeConstants.DeleteRecipe, ScopeConstants.CRUDRecipe })); });
            });

        service.AddSingleton<IAuthorizationHandler, RbacHandler>();

        return service;
    }
}