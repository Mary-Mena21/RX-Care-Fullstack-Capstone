using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IUserRepository
    {
        void AddUser(UserAdd User);
        void EditUser(UserAdd User);
    }
}