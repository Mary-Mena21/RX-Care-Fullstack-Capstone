using ReadersRendezvous.Utils;
using RXCareServer.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace RXCareServer.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        //----------------AddPatient( )------Test2--------------//


        public void AddUser(UserAdd User)
        //public void AddUser(User User)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[User]
                                                   ([Type]
                                                   ,[Img]
                                                   ,[FirstName]
                                                   ,[LastName]
                                                   ,[Email])
                                             OUTPUT INSERTED.Id
                                             VALUES
                                                   (@Type
                                                   ,@Img
                                                   ,@FirstName
                                                   ,@LastName
                                                   ,@Email)";
                    //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
                    DbUtils.AddParameter(cmd, "@Type", User.Type);
                    DbUtils.AddParameter(cmd, "@Img", User.Img);
                    DbUtils.AddParameter(cmd, "@FirstName", User.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", User.LastName);
                    DbUtils.AddParameter(cmd, "@Email", User.Email);
                    User.Id = (int)cmd.ExecuteScalar();//needs output inserted.id

                }
            }

        }
        //-------------------------------------------------


    }
}

/*
 {
  "id": 0,
  "type": "patient",
  "img": "patient16.jpg",
  "firstName":  "Sophia",
  "lastName": "Harris",
  "email": "sophiaharris@example.com"
  "patient": {
    "id": 0,
    "userId": 0,
    "doctorId": 1,
    "doB": "2003-08-17",
    "address": "123 Main St, Nashville, TN 37213",
    "phone": "901-555-2345",
    "height": 70,
    "weight": 180,
    "note": " "
  }
}
 */