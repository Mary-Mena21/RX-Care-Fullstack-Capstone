//using Microsoft.Data.SqlClient;
//using Microsoft.Extensions.Configuration;
//using ReadersRendezvous.Utils;
//using RXCareServer.Models;
//using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

//namespace RXCareServer.Repositories
//{
//    public class LoginRepository : BaseRepository, ILoginRepository
//    {
//        private readonly IConfiguration _configuration;
//        public LoginRepository(IConfiguration config) : base(config)
//        {
//            _configuration = config;
//        }


//        public UserLogin LoginWithCredentials(LoginRequest loginRequest)
//        {
//            using (SqlConnection conn = Connection)
//            {
//                conn.Open();

//                using (SqlCommand cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"SELECT TOP 1 * FROM(SELECT [Id]
//                                              ,[IsAuthorized]
//                                              ,[Type]
//                                              ,[Img]
//                                              ,[FirstName]
//                                              ,[LastName]
//                                              ,[Email] 
//                                          FROM [RXCareDb].[dbo].[User]
//                                          WHERE Email = @Email) TBL          ";

//                    //cmd.Parameters.AddWithValue("@Password", loginRequest.Password);
//                    //cmd.Parameters.AddWithValue("@Id", credentials.Id);
//                    cmd.Parameters.AddWithValue("@Email", loginRequest.Email);

//                    using (SqlDataReader reader = cmd.ExecuteReader())
//                    {

//                        if (reader.Read())
//                        {
//                            UserLogin user = new UserLogin
//                            {
//                                Id = DbUtils.GetInt(reader, "Id"),
//                                IsAuthorized = true,
//                                Type = DbUtils.GetString(reader, "Type"),
//                                FirstName = DbUtils.GetString(reader, "FirstName"),
//                                LastName = DbUtils.GetString(reader, "LastName"),
//                                Email = DbUtils.GetString(reader, "Email"),

//                            };
//                            reader.Close();
//                            return user;
//                        }
//                    }

//                    return null;
//                }
//            }
//        }
//        //-----------------------------------------------------------------------------

//        public void RegisterUser(LoginRequest registerUser)
//        {
//            using (SqlConnection conn = Connection)
//            {
//                conn.Open();

//                using (SqlCommand cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"INSERT INTO [dbo].[User]
//                                                   (
//                                                   ,[Email])
//                                             OUTPUT INSERTED.Id As UID
//                                             VALUES
//                                                   (
//                                                   ,@Email) ";

//                    DbUtils.AddParameter(cmd, "@Email", registerUser.Email);

//                    cmd.ExecuteNonQuery();

//                }
//            }
//        }




//    }
//}
