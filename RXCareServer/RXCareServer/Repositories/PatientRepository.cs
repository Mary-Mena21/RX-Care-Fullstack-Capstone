using ReadersRendezvous.Utils;
using RXCareServer.Models;
using System.Net;

namespace RXCareServer.Repositories
{
    public class PatientRepository : BaseRepository, IPatientRepository
    {
        public PatientRepository(IConfiguration configuration) : base(configuration)
        {
        }
        //----------------GetDoctorPatients( )--------------------//

        public List<PatientInfo> GetDoctorPatients(int DoctorId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Patient].[Id]
                                              ,[Patient].[UserId]
                                              ,[Patient].[DoctorId]
                                              ,[Patient].[DoB]
                                              ,[Patient].[Address]
                                              ,[Patient].[Phone]
                                              ,[Patient].[Height]
                                              ,[Patient].[Weight]
                                              ,[Patient].[Note]
                                              ,[User].[Id] As UId
                                              ,[User].Type
                                              ,[User].Img
                                              ,[User].FirstName
                                              ,[User].LastName
                                              ,[User].Email
                                          FROM [RXCareDb].[dbo].[Patient]
                                          INNER JOIN [User] ON [User].Id = [Patient].UserId
                                          WHERE [Patient].DoctorId = @DoctorId;";
                                        //INNER JOIN [Doctor] ON [Doctor].Id = [Patient].DoctorId
                    DbUtils.AddParameter(cmd, "@DoctorId", DoctorId);
                    var reader = cmd.ExecuteReader();
                    var patients = new List<PatientInfo>();
                    while (reader.Read())
                    {
                        var patient = new PatientInfo()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            DoB = DbUtils.GetDateTime(reader, "DoB"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Height = DbUtils.GetDecimal(reader, "Height"),
                            Weight = DbUtils.GetDecimal(reader, "Weight"),
                            Note = DbUtils.GetString(reader, "Note"),
                            User = new User()
                            {
                                Id = DbUtils.GetInt(reader, "UId"),
                                Type = DbUtils.GetString(reader, "Type"),
                                Img =DbUtils.GetString(reader, "Img"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),

                            }
                        };
                        patients.Add(patient);
                    }
                    conn.Close();
                    return patients;
                }

            }

        }

        //----------------GetAllPatients( )--------------------//

        //public List<Patient> GetPatients()
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"SELECT [Patient].[Id]
        //                                      ,[Patient].[UserId]
        //                                      ,[Patient].[DoctorId]
        //                                      ,[Patient].[DoB]
        //                                      ,[Patient].[Address]
        //                                      ,[Patient].[Phone]
        //                                      ,[Patient].[Height]
        //                                      ,[Patient].[Weight]
        //                                      ,[Patient].[Note]
        //                                  FROM [RXCareDb].[dbo].[Patient]";
        //            //INNER JOIN [Doctor] ON [Doctor].Id = [Patient].DoctorId
        //            var reader = cmd.ExecuteReader();
        //            var patients = new List<Patient>();
        //            while (reader.Read())
        //            {
        //                var patient = new Patient()
        //                {
        //                    Id = DbUtils.GetInt(reader, "Id"),
        //                    UserId = DbUtils.GetInt(reader, "UserId"),
        //                    DoctorId = DbUtils.GetInt(reader, "DoctorId"),
        //                    DoB = DbUtils.GetDateTime(reader, "DoB"),
        //                    Address = DbUtils.GetString(reader, "Address"),
        //                    Phone = DbUtils.GetString(reader, "Phone"),
        //                    Height = DbUtils.GetDecimal(reader, "Height"),
        //                    Weight = DbUtils.GetDecimal(reader, "Weight"),
        //                    Note = DbUtils.GetString(reader, "Note"),
        //                };
        //                patients.Add(patient);
        //            }
        //            conn.Close();
        //            return patients;
        //        }

        //    }

        //}

        //----------------GetPatientById( )--------------------//

        public PatientInfo GetPatientById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Patient].[Id] 
                                              ,[Patient].[DoctorId]
                                              ,[Patient].[UserId]
                                              ,[Patient].[DoB]
                                              ,[Patient].[Address]
                                              ,[Patient].[Phone]
                                              ,[Patient].[Height]
                                              ,[Patient].[Weight]
                                              ,[Patient].[Note]
                                              ,[User].[Id] As UId
                                              ,[User].Type
                                              ,[User].Img
                                              ,[User].FirstName
                                              ,[User].LastName
                                              ,[User].Email
                                          FROM [RXCareDb].[dbo].[Patient]
                                          INNER JOIN [User] ON [User].Id = [Patient].UserId
                                          WHERE [Patient].Id = @Id;";
                    //INNER JOIN [Doctor] ON [Doctor].Id = [Patient].DoctorId
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    var patient = new PatientInfo();
                    while (reader.Read())
                    {
                         patient = new PatientInfo()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            DoB = DbUtils.GetDateTime(reader, "DoB"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Height = DbUtils.GetDecimal(reader, "Height"),
                            Weight = DbUtils.GetDecimal(reader, "Weight"),
                            Note = DbUtils.GetString(reader, "Note"),
                            User = new User()
                            {
                                Id = DbUtils.GetInt(reader, "UId"),
                                Type = DbUtils.GetString(reader, "Type"),
                                Img = DbUtils.GetString(reader, "Img"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                Email = DbUtils.GetString(reader, "Email"),

                            }
                        };
                    }
                    conn.Close();
                    return patient;
                }

            }

        }

//        //----------------AddPatient( )-------Test1-------------//

//        public void AddPatient(Patient patient)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"INSERT INTO [dbo].[Patient]
//                                                   (
//                                                   [DoctorId]
//                                                   ,[DoB]
//                                                   ,[Address]
//                                                   ,[Phone]
//                                                   ,[Height]
//                                                   ,[Weight]
//                                                   ,[Note])
//                                             OUTPUT INSERTED.Id
//                                             VALUES
//                                                   (
//                                                   @DoctorId
//                                                   ,@DoB
//                                                   ,@Address
//                                                   ,@Phone
//                                                   ,@Height
//                                                   ,@Weight
//                                                   ,@Note)



//";
//                    //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
//                    DbUtils.AddParameter(cmd, "@DoctorId", patient.DoctorId);
//                    DbUtils.AddParameter(cmd, "@DoB", patient.DoB);
//                    DbUtils.AddParameter(cmd, "@Address", patient.Address);
//                    DbUtils.AddParameter(cmd, "@Phone", patient.Phone);
//                    DbUtils.AddParameter(cmd, "@Height", patient.Height);
//                    DbUtils.AddParameter(cmd, "@Weight", patient.Weight);
//                    DbUtils.AddParameter(cmd, "@Note", patient.Note);
//                    patient.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
//                    //patient.UserId = (int)cmd.ExecuteScalar();//needs output inserted.id
//                }
//            }
//        }


        //----------------AddPatient( )------Test2--------------//


        public void AddPatient(PatientAdd2 patient)
        {
            //using (var conn = Connection)
            //{
            //    conn.Open();
            //    using (var cmd = conn.CreateCommand())
            //    {
            //        cmd.CommandText = @"INSERT INTO [dbo].[Patient]
            //                                       (
            //                                       [DoctorId]
            //                                       ,[DoB]
            //                                       ,[Address]
            //                                       ,[Phone]
            //                                       ,[Height]
            //                                       ,[Weight]
            //                                       ,[Note])
            //                                 OUTPUT INSERTED.Id
            //                                 VALUES
            //                                       (
            //                                       @DoctorId
            //                                       ,@DoB
            //                                       ,@Address
            //                                       ,@Phone
            //                                       ,@Height
            //                                       ,@Weight
            //                                       ,@Note)

            //                            INSERT INTO [dbo].[User]
            //                                       ([Type]
            //                                       ,[Img]
            //                                       ,[FirstName]
            //                                       ,[LastName]
            //                                       ,[Email])
            //                                 OUTPUT INSERTED.Id
            //                                 VALUES
            //                                       (@Type
            //                                       ,@Img
            //                                       ,@FirstName
            //                                       ,@LastName
            //                                       ,@Email)";
            //        //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
            //        DbUtils.AddParameter(cmd, "@DoctorId", patient.DoctorId);
            //        DbUtils.AddParameter(cmd, "@DoB", patient.DoB);
            //        DbUtils.AddParameter(cmd, "@Address", patient.Address);
            //        DbUtils.AddParameter(cmd, "@Phone", patient.Phone);
            //        DbUtils.AddParameter(cmd, "@Height", patient.Height);
            //        DbUtils.AddParameter(cmd, "@Weight", patient.Weight);
            //        DbUtils.AddParameter(cmd, "@Note", patient.Note);

            //        DbUtils.AddParameter(cmd, "@Type", patient.User.Type);
            //        DbUtils.AddParameter(cmd, "@Img", patient.User.Img);
            //        DbUtils.AddParameter(cmd, "@FirstName", patient.User.FirstName);
            //        DbUtils.AddParameter(cmd, "@LastName", patient.User.LastName);
            //        DbUtils.AddParameter(cmd, "@Email", patient.User.Email);
            //        patient.User.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
            //        patient.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
            //        patient.UserId = patient.User.Id ;//needs output inserted.id
            //    }
            //}

        }


        /* {
       "id": 0,
       "userId": 0,
       "doctorId": 1,
       "doB": "2003-08-17",
       "address": "123 Main St, Nashville, TN 37213",
       "phone": "901-555-2345",
       "height": 70,
       "weight": 180,
       "note": "string",
       "user": {
         "id": 0,
         "type": "patient",
         "img": "patient16.jpg",
         "firstName": "Sophia",
         "lastName": "Harris",
         "email": "sophiaharris@example.com"
           }
         } */

        //----------------AddPatient( )-------Test3-------------//

        public void AddPatient(Patient patient, User user)
        {
            //using (var conn = Connection)
            //{
            //    conn.Open();
            //    using (var cmd = conn.CreateCommand())
            //    {
            //        cmd.CommandText = @"INSERT INTO [dbo].[Patient]
            //                                       (
            //                                       [DoctorId]
            //                                       ,[DoB]
            //                                       ,[Address]
            //                                       ,[Phone]
            //                                       ,[Height]
            //                                       ,[Weight]
            //                                       ,[Note])
            //                                 OUTPUT INSERTED.Id
            //                                 VALUES
            //                                       (
            //                                       @DoctorId
            //                                       ,@DoB
            //                                       ,@Address
            //                                       ,@Phone
            //                                       ,@Height
            //                                       ,@Weight
            //                                       ,@Note),

            //                            INSERT INTO [dbo].[User]
            //                                       ([Type]
            //                                       ,[Img]
            //                                       ,[FirstName]
            //                                       ,[LastName]
            //                                       ,[Email])
            //                                 OUTPUT INSERTED.Id
            //                                 VALUES
            //                                       (@Type
            //                                       ,@Img
            //                                       ,@FirstName
            //                                       ,@LastName
            //                                       ,@Email)";
            //        //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
            //        DbUtils.AddParameter(cmd, "@DoctorId", patient.DoctorId);
            //        DbUtils.AddParameter(cmd, "@DoB", patient.DoB);
            //        DbUtils.AddParameter(cmd, "@Address", patient.Address);
            //        DbUtils.AddParameter(cmd, "@Phone", patient.Phone);
            //        DbUtils.AddParameter(cmd, "@Height", patient.Height);
            //        DbUtils.AddParameter(cmd, "@Weight", patient.Weight);
            //        DbUtils.AddParameter(cmd, "@Note", patient.Note);

            //        DbUtils.AddParameter(cmd, "@Type", user.Type);
            //        DbUtils.AddParameter(cmd, "@Img", user.Img);
            //        DbUtils.AddParameter(cmd, "@FirstName", user.FirstName);
            //        DbUtils.AddParameter(cmd, "@LastName", user.LastName);
            //        DbUtils.AddParameter(cmd, "@Email", user.Email);
            //        patient.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
            //        user.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
            //    }
            //}
        }

        //------------------------------EditPatient( )--------Test 1------------------------------


        public void EditPatient(PatientAdd2 Patient)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       UPDATE [dbo].[Patient]
                                              SET
                                                   [DoctorId] = @DoctorId
                                                   ,[UserId] = @UserId
                                                   ,[DoB] = @DoB
                                                   ,[Address] = @Address
                                                   ,[Phone] = @Phone
                                                   ,[Height] = @Height
                                                   ,[Weight] = @Weight
                                                   ,[Note] = @Note)
                                                    WHERE [Id] = @Id";
                    //cmd.CommandText = "";
                    cmd.CommandText = @" UPDATE  [dbo].[User]
                                                SET
                                                    [Type]=@Type
                                                   ,[Img]=@Img
                                                   ,[FirstName]=@FirstName
                                                   ,[LastName]=@LastName
                                                   ,[Email]=@Email
                                                    WHERE [Id] = @UserId";

                    DbUtils.AddParameter(cmd, "@Type", Patient.User.Type);
                    DbUtils.AddParameter(cmd, "@Img", Patient.User.Img);
                    DbUtils.AddParameter(cmd, "@FirstName", Patient.User.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", Patient.User.LastName);
                    DbUtils.AddParameter(cmd, "@Email", Patient.User.Email);
                    //User.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                    //User.Patient.UserId = User.Id;//needs output inserted.id
                    Patient.UserId = Patient.User.Id;
                    //cmd.ExecuteNonQuery();

                    DbUtils.AddParameter(cmd, "@DoctorId", Patient.DoctorId);
                    DbUtils.AddParameter(cmd, "@UserId",Patient.User.Id);
                    DbUtils.AddParameter(cmd, "@DoB", Patient.DoB);
                    DbUtils.AddParameter(cmd, "@Address", Patient.Address);
                    DbUtils.AddParameter(cmd, "@Phone", Patient.Phone);
                    DbUtils.AddParameter(cmd, "@Height", Patient.Height);
                    DbUtils.AddParameter(cmd, "@Weight", Patient.Weight);
                    DbUtils.AddParameter(cmd, "@Note", Patient.Note);

                    Patient.User.Id = Patient.UserId;

                    cmd.ExecuteNonQuery();




                }
            }

        }


        //------------------------------EditPatient( )--------Test 2------------------------------
        public void EditPatient(Patient Patient)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       UPDATE [dbo].[Patient]
                                              SET
                                                   [DoctorId] = @DoctorId
                                                   ,[UserId] = @UserId
                                                   ,[DoB] = @DoB
                                                   ,[Address] = @Address
                                                   ,[Phone] = @Phone
                                                   ,[Height] = @Height
                                                   ,[Weight] = @Weight
                                                   ,[Note] = @Note)
                                                    WHERE [Id] = @Id";
                    ////cmd.CommandText = "";
                    //cmd.CommandText = @" UPDATE  [dbo].[User]
                    //                            SET
                    //                                [Type]=@Type
                    //                               ,[Img]=@Img
                    //                               ,[FirstName]=@FirstName
                    //                               ,[LastName]=@LastName
                    //                               ,[Email]=@Email
                    //                                WHERE [Id] = @UserId";

                    //DbUtils.AddParameter(cmd, "@Type", Patient.User.Type);
                    //DbUtils.AddParameter(cmd, "@Img", Patient.User.Img);
                    //DbUtils.AddParameter(cmd, "@FirstName", Patient.User.FirstName);
                    //DbUtils.AddParameter(cmd, "@LastName", Patient.User.LastName);
                    //DbUtils.AddParameter(cmd, "@Email", Patient.User.Email);
                    //User.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                    //User.Patient.UserId = User.Id;//needs output inserted.id
                    //Patient.UserId = Patient.User.Id;
                    //cmd.ExecuteNonQuery();

                    DbUtils.AddParameter(cmd, "@DoctorId", Patient.DoctorId);
                    DbUtils.AddParameter(cmd, "@UserId", Patient.UserId);
                    DbUtils.AddParameter(cmd, "@DoB", Patient.DoB);
                    DbUtils.AddParameter(cmd, "@Address", Patient.Address);
                    DbUtils.AddParameter(cmd, "@Phone", Patient.Phone);
                    DbUtils.AddParameter(cmd, "@Height", Patient.Height);
                    DbUtils.AddParameter(cmd, "@Weight", Patient.Weight);
                    DbUtils.AddParameter(cmd, "@Note", Patient.Note);

                   // Patient.User.Id = Patient.UserId;

                    cmd.ExecuteNonQuery();




                }
            }

        }














































    }
}
