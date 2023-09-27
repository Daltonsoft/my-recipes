using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using MyRecipes.Gateway.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.AddServerHeader = false;
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins(builder?.Configuration?.GetValue<string>("CLIENT_ORIGIN_URL") ?? throw new Exception("No client origin is set in config"))
            .WithHeaders(new string[] {
                HeaderNames.ContentType,
                HeaderNames.Authorization
            })
            .WithMethods("GET")
            .SetPreflightMaxAge(TimeSpan.FromSeconds(86400));
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});
builder.Services.SetupAuth(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection()
   .UseErrorHandler()
   .UseSecureHeaders();

app.MapControllers();

app.UseCors()
   .UseAuthentication()
   .UseAuthorization();

app.Run();