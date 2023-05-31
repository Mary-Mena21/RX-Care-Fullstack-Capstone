using RXCareServer.Models;

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
        UserLogin GetUserLoginByEmail(string Email);
        User GetUserProfileById(int Id);
    }
}





/*
                          if (prescription != null)
                        
                            prescription = new PrescriptionInfo()
                            {
                                Id = DbUtils.GetInt(reader, "PreId"),
                                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                Dosage = DbUtils.GetString(reader, "Dosage"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),


                            };
 
 */