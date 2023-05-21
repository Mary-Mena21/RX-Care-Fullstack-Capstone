using ReadersRendezvous.Utils;
using RXCareServer.Models;
using System.Net;
using System.Numerics;
using System.Xml.Linq;
using static Azure.Core.HttpHeader;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace RXCareServer.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        //----------------.GetUserById(id) ---------------Works need To handle null Data---------------------//
        public UserInfo3 GetUserById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [User].[Id] 
                                              ,[User].Type
                                              ,[User].Img
                                              ,[User].FirstName
                                              ,[User].LastName
                                              ,[User].Email
                                              ,[Patient].[Id] As PatId
                                              ,[Patient].[DoctorId]
                                              ,[Patient].[UserId]
                                              ,[Patient].[DoB]
                                              ,[Patient].[Address]
                                              ,[Patient].[Phone]
                                              ,[Patient].[Height]
                                              ,[Patient].[Weight]
                                              ,[Patient].[Note]
                                              ,[Prescription].Id AS PreId
                                              ,[Prescription].MedicineId
                                              ,[Prescription].Dosage
                                              ,[Prescription].Quantity
                                              ,[Prescription].PatientId
                                              ,[Medicine].Id As MedId
                                              ,[Medicine].MedicineName
                                              ,[Medicine].ImgUrl
                                              ,[Medicine].Form
                                              ,[Medicine].SideEffects
                                              ,[Medicine].DrugInfo
                                              ,[Comment].Id AS ComId
                                              ,[Comment].PatientId
                                              ,[Comment].MedicineId
                                              ,[Comment].PComment
                                              ,[Comment].PCommentDate
                                              ,[Comment].DComment
                                              ,[Comment].DCommentDate
                                          FROM [RXCareDb].[dbo].[User]
                                          LEFT JOIN [Patient] ON [User].Id = [Patient].UserId
                                          LEFT JOIN [Prescription] ON [Patient].Id = [Prescription].PatientId
                                          LEFT JOIN [Medicine] ON [Prescription].MedicineId = [Medicine].Id
                                          LEFT JOIN [Comment] ON [Patient].Id = [Comment].PatientId AND [Medicine].Id = [Comment].MedicineId 
                                          WHERE [User].[Id] = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();
                    UserInfo3? user = null;

                    while (reader.Read())
                    {
                        if (user == null)
                        {
                            user = new UserInfo3()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Type = DbUtils.GetString(reader, "Type"),
                                Img = DbUtils.GetString(reader, "Img"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),

                                Patient = new PatientInfo3()
                                {
                                    Id = DbUtils.GetInt(reader, "PatId"),
                                    DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                                    UserId = DbUtils.GetInt(reader, "UserId"),
                                    DoB = DbUtils.GetDateTime(reader, "DoB"),
                                    Address = DbUtils.GetString(reader, "Address"),
                                    Phone = DbUtils.GetString(reader, "Phone"),
                                    Height = DbUtils.GetDecimal(reader, "Height"),
                                    Weight = DbUtils.GetDecimal(reader, "Weight"),
                                    Note = DbUtils.GetString(reader, "Note"),
                                    Prescriptions = new List<PrescriptionInfo>(),
                                }
                            };
                        }
                        if(DbUtils.GetNullableInt(reader, "PreId") != null) {
                            user.Patient.Prescriptions.Add(new PrescriptionInfo()

                            {
                                 Id = DbUtils.GetInt(reader, "PreId"),
                                 MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                 Dosage = DbUtils.GetString(reader, "Dosage"),
                                 Quantity = DbUtils.GetInt(reader, "Quantity"),
                                 PatientId = DbUtils.GetInt(reader, "PatientId"),
                                 Medicine = new Medicine()
                                 {
                                     Id = DbUtils.GetInt(reader, "MedId"),
                                     MedicineName = DbUtils.GetString(reader, "MedicineName"),
                                     ImgUrl = DbUtils.GetString(reader, "ImgUrl"),
                                     Form = DbUtils.GetString(reader, "Form"),
                                     SideEffects = DbUtils.GetString(reader, "SideEffects"),
                                     DrugInfo = DbUtils.GetString(reader, "DrugInfo"),

                                 }
                             });
                        }
                        //--------------------------------------------------------------
                        if (DbUtils.GetNullableInt(reader, "ComId") != null)
                        {
                            user.Patient.Comment = new CommentInfo()

                            {
                                Id = DbUtils.GetInt(reader, "ComId"),
                                PatientId = DbUtils.GetInt(reader, "PatientId"),
                                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                PComment = DbUtils.GetString(reader, "PComment"),
                                PCommentDate = DbUtils.GetDateTime(reader, "PCommentDate"),
                                DComment = DbUtils.GetString(reader, "DComment"),
                                DCommentDate = DbUtils.GetDateTime(reader, "DCommentDate"),
                                Medicine = new Medicine()
                                {
                                    Id = DbUtils.GetInt(reader, "MedId"),
                                    MedicineName = DbUtils.GetString(reader, "MedicineName"),
                                    ImgUrl = DbUtils.GetString(reader, "ImgUrl"),
                                    Form = DbUtils.GetString(reader, "Form"),
                                    SideEffects = DbUtils.GetString(reader, "SideEffects"),
                                    DrugInfo = DbUtils.GetString(reader, "DrugInfo"),

                                },
                            };
                        }
                    }
                    reader.Close();
                    return user;
                }
            }
        }


        //----------------AddPatient( )------Test3-----Works !!!👌👏---------//

        public void AddUser(UserInfo2 User)
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
                                             OUTPUT INSERTED.Id As UID
                                             VALUES
                                                   (@Type
                                                   ,@Img
                                                   ,@FirstName
                                                   ,@LastName
                                                   ,@Email) ";
                    //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
                    DbUtils.AddParameter(cmd, "@Type", User.Type);
                    DbUtils.AddParameter(cmd, "@Img", User.Img);
                    DbUtils.AddParameter(cmd, "@FirstName", User.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", User.LastName);
                    DbUtils.AddParameter(cmd, "@Email", User.Email);
                    User.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                    User.Patient.UserId = User.Id;//needs output inserted.id

                    cmd.CommandText = "";
                    cmd.CommandText = @"INSERT INTO [dbo].[Patient]
                                                   (
                                                   [DoctorId]
                                                   ,[UserId]
                                                   ,[DoB]
                                                   ,[Address]
                                                   ,[Phone]
                                                   ,[Height]
                                                   ,[Weight]
                                                   ,[Note])
                                             OUTPUT INSERTED.Id APID
                                             VALUES
                                                   (
                                                   @DoctorId
                                                   ,@UserId
                                                   ,@DoB
                                                   ,@Address
                                                   ,@Phone
                                                   ,@Height
                                                   ,@Weight
                                                   ,@Note)";

                    DbUtils.AddParameter(cmd, "@DoctorId", User.Patient.DoctorId);
                    DbUtils.AddParameter(cmd, "@UserId", User.Patient.UserId);
                    DbUtils.AddParameter(cmd, "@DoB", User.Patient.DoB);
                    DbUtils.AddParameter(cmd, "@Address", User.Patient.Address);
                    DbUtils.AddParameter(cmd, "@Phone", User.Patient.Phone);
                    DbUtils.AddParameter(cmd, "@Height", User.Patient.Height);
                    DbUtils.AddParameter(cmd, "@Weight", User.Patient.Weight);
                    DbUtils.AddParameter(cmd, "@Note", User.Patient.Note);
                    User.Patient.Id = (int)cmd.ExecuteScalar();//needs output inserted.id

                }
            }

        }




        //----------------AddPatient( )------Test3-----Works !!!👌👏---------//

        public void AddLoginUser(UserLogin User)
        //public void AddUser(User User)
        {
            //using (var conn = Connection)
            //{
            //    conn.Open();
            //    using (var cmd = conn.CreateCommand())
            //    {
            //        cmd.CommandText = @"INSERT INTO [dbo].[User]
            //                                       ([Type]
            //                                       ,[Email])
            //                                 OUTPUT INSERTED.Id As UID
            //                                 VALUES
            //                                       (@Type
            //                                       ,@Email) ";
            //        //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
            //        DbUtils.AddParameter(cmd, "@Type", User.Type);
            //        DbUtils.AddParameter(cmd, "@Email", User.Email);
            //        User.Id = (int)cmd.ExecuteScalar();//needs output inserted.id

            //    }
            //}

        }
        //----------------EditPatient( )------Test3------it works--------//
        public void EditUser(UserInfo2 User)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE  [dbo].[User]
                                                SET
                                                    [Type]=@Type
                                                   ,[Img]=@Img
                                                   ,[FirstName]=@FirstName
                                                   ,[LastName]=@LastName
                                                   ,[Email]=@Email
                                                    WHERE [Id] = @Id";

                    DbUtils.AddParameter(cmd, "@Id", User.Id);
                    DbUtils.AddParameter(cmd, "@Type", User.Type);
                    DbUtils.AddParameter(cmd, "@Img", User.Img);
                    DbUtils.AddParameter(cmd, "@FirstName", User.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", User.LastName);
                    DbUtils.AddParameter(cmd, "@Email", User.Email);
                    cmd.ExecuteNonQuery();

                    cmd.CommandText = "";
                    cmd.CommandText = @"UPDATE [dbo].[Patient]
                                               SET
                                                    [DoctorId] = @DoctorId
                                                   ,[DoB] = @DoB
                                                   ,[Address] = @Address
                                                   ,[Phone] = @Phone
                                                   ,[Height] = @Height
                                                   ,[Weight] = @Weight
                                                   ,[Note] = @Note
                                                    WHERE [UserId] = @UserId ";

                    DbUtils.AddParameter(cmd, "@DoctorId", User.Patient.DoctorId);
                    DbUtils.AddParameter(cmd, "@UserId", User.Patient.UserId);
                    DbUtils.AddParameter(cmd, "@DoB", User.Patient.DoB);
                    DbUtils.AddParameter(cmd, "@Address", User.Patient.Address);
                    DbUtils.AddParameter(cmd, "@Phone", User.Patient.Phone);
                    DbUtils.AddParameter(cmd, "@Height", User.Patient.Height);
                    DbUtils.AddParameter(cmd, "@Weight", User.Patient.Weight);
                    DbUtils.AddParameter(cmd, "@Note", User.Patient.Note);
                    cmd.ExecuteNonQuery();


                }
            }

        }

        /*------------------DeleteBook()--2--------------------*/
        public void DeleteUserById(int id)
        {
            //using (var conn = Connection)
            //{
            //    conn.Open();
            //    using (var cmd = conn.CreateCommand())
            //    {
            //        cmd.CommandText = "Delete FROM Prescription WHERE PatientId = ";
            //        cmd.CommandText = "Delete From Patient WHERE UserId = @Id";
            //        cmd.CommandText = "DELETE FROM User WHERE Id = @Id";
            //        DbUtils.AddParameter(cmd, "@Id", id);
            //        cmd.ExecuteNonQuery();
            //    }
            //}
        }

        //----------------.GetUserById(id) ---------------Works need To handle null Data---------------------//
        public UserLogin GetUserLoginByEmail(string Email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [User].[Id] 
                                              ,[User].Type
                                              ,[User].Email
                                          FROM [RXCareDb].[dbo].[User]
                                          WHERE [User].[Email] = @Email";

                    DbUtils.AddParameter(cmd, "@Email", Email);
                    var reader = cmd.ExecuteReader();
                    UserLogin? user = null;

                    while (reader.Read())
                    {
                        if (user == null)
                        {
                            user = new UserLogin
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Type = DbUtils.GetString(reader, "Type"),
                                Email = DbUtils.GetString(reader, "Email"),

                            };
                        }
         
                    }
                    reader.Close();
                    return user;
                }
            }
        }







    }
}

/*
 {
  "id": 0,
  "type": "patient",
  "img": "patient16.jpg",
  "firstName":  "Sophia",
  "lastName": "Harris",
  "email": "sophiaharris@example.com",
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