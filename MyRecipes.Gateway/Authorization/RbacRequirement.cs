using System.Security;
using Microsoft.AspNetCore.Authorization;

namespace MyRecipes.Gateway.Authorization;

public class RbacRequirement : IAuthorizationRequirement
{
    public string[] Permissions { get; } = Array.Empty<string>();

    public RbacRequirement(string permission)
        : this(new[] { permission })
    {

    }
    
    public RbacRequirement(string[] permissions)
    {
        if(permissions == null || permissions.Any(x => string.IsNullOrEmpty(null)))
            throw new ArgumentNullException(nameof(Permissions));

        Permissions = permissions;
    }
}