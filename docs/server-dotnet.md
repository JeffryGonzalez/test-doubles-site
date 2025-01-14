# Server - .NET  Specific

## Mocking Identity


As of .NET 7+ the dev experience for authenticating against JWTs is pretty easy for the dev experience.

Install the `Microsoft.AspNetCore.Authentication.JwtBearer` NuGet Package.

In the `Program.cs`:

```csharp 
builder.Services.AddAuthentication().AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = !builder.Environment.IsDevelopment();   
});
builder.Services.AddAuthorization();
```

Go to a terminal in your project's working directory and run:

```sh
dotnet user-jwts create
dotnet user-jwts create -n bob@aol.com
dotnet user-jwts create -n sue@aol.com --role Admin --role Boss
dotnet user-jwts create -n carl@aol.com --role Reader --valid-for 1095d 
```

(the last example makes the token valid for three years.)

This will update your `appsettings.development.json`:

```json
{
	"Authentication": {
	  "Schemes": {
	    "Bearer": {
	      "ValidAudiences": [
	        "http://localhost:35191",
	        "https://localhost:0",
	        "http://localhost:5008"
	      ],
	      "ValidIssuer": "dotnet-user-jwts"
	    }
	  }
	}
}
```


## Gray-Box Testing With Test Fixture
