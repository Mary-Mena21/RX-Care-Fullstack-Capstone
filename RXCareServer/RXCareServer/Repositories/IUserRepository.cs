using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IUserRepository
    {
        void AddLoginUser(UserLogin User);
        void AddUser(UserInfo2 User);
        void DeleteUserById(int id);
        void EditUser(UserInfo2 User);
        UserInfo3 GetUserById(int id);
        UserLogin GetUserLoginByEmail(string Email);
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