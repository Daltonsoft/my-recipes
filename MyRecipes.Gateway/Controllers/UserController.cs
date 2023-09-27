
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/v1/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        throw new NotImplementedException("TODO: here we need to set the logic");
    }
}