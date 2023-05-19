using ReadersRendezvous.Utils;
using RXCareServer.Models;
using System.Net;
using System.Numerics;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace RXCareServer.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        ////----------------AddPatient( )------Test2--------------//


        //public void AddUser(UserAdd User)
        ////public void AddUser(User User)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"INSERT INTO [dbo].[User]
        //                                           ([Type]
        //                                           ,[Img]
        //                                           ,[FirstName]
        //                                           ,[LastName]
        //                                           ,[Email])
        //                                     OUTPUT INSERTED.Id As UID
        //                                     VALUES
        //                                           (@Type
        //                                           ,@Img
        //                                           ,@FirstName
        //                                           ,@LastName
        //                                           ,@Email)

        //                                INSERT INTO [dbo].[Patient]
        //                                           ([UserId]
        //                                           ,[DoctorId]
        //                                           ,[DoB]
        //                                           ,[Address]
        //                                           ,[Phone]
        //                                           ,[Height]
        //                                           ,[Weight]
        //                                           ,[Note])
        //                                     OUTPUT INSERTED.Id APID
        //                                     VALUES
        //                                           (@UserId
        //                                           ,@DoctorId
        //                                           ,@DoB
        //                                           ,@Address
        //                                           ,@Phone
        //                                           ,@Height
        //                                           ,@Weight
        //                                           ,@Note)
        //                                                    ";
        //            //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
        //            DbUtils.AddParameter(cmd, "@Type", User.Type);
        //            DbUtils.AddParameter(cmd, "@Img", User.Img);
        //            DbUtils.AddParameter(cmd, "@FirstName", User.FirstName);
        //            DbUtils.AddParameter(cmd, "@LastName", User.LastName);
        //            DbUtils.AddParameter(cmd, "@Email", User.Email);

        //            DbUtils.AddParameter(cmd, "@UserId", User.Patient.UserId);
        //            DbUtils.AddParameter(cmd, "@DoctorId", User.Patient.DoctorId);
        //            DbUtils.AddParameter(cmd, "@DoB", User.Patient.DoB);
        //            DbUtils.AddParameter(cmd, "@Address", User.Patient.Address);
        //            DbUtils.AddParameter(cmd, "@Phone", User.Patient.Phone);
        //            DbUtils.AddParameter(cmd, "@Height", User.Patient.Height);
        //            DbUtils.AddParameter(cmd, "@Weight", User.Patient.Weight);
        //            DbUtils.AddParameter(cmd, "@Note", User.Patient.Note);

        //            User.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
        //            User.Patient.UserId = User.Id;//needs output inserted.id
        //            User.Patient.Id = (int)cmd.ExecuteScalar();//needs output inserted.id

        //        }
        //    }

        //}

        //----------------AddPatient( )------Test3-----Works !!!👌👏---------//


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
        //----------------EditPatient( )------Test3------it works--------//

        public void EditUser(UserAdd User)
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