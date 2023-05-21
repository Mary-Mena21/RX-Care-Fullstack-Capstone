using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface ILoginRepository
    {
        UserLogin LoginWithCredentials(LoginRequest loginRequest);
    }
}