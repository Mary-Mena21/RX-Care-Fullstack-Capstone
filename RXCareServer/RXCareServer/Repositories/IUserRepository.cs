﻿using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IUserRepository
    {
        void AddLoginUser(UserLogin User);
        void AddRegisterUser(User User);
        void AddUser(UserInfo2 User);
        void DeleteUserById(int Id);
        void EditUser(UserInfo2 User);
        List<User> GetDctorsList();
        UserInfo3 GetUserById(int id);
        UserInfo2 GetUserInfoById(int id);
        UserInfo2 GetUserInfoByUserId(int Id);
        UserLogin GetUserLoginByEmail(string Email);
        User GetUserProfileById(int Id);
    }
}
