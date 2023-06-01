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


        //------------------------------EditPatient( )--------Test 1------------------------------

        public void EditPatient(PatientInfo2 Patient)
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




        /*---------------------------GetDoctorInfoByPatientId()------------------------------------*/

        public PatientInfo5 GetDoctorInfoByPatientId(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Patient].[Id] 
                                                          ,[Patient].[DoctorId]
                                                          ,[Patient].[UserId]
                                                          ,[Doctor].[Id] AS DId
                                                          ,[Clinic].[Id] AS ClinicId
                                                          ,[Clinic].[Address]
                                                          ,[Clinic].[Phone]
                                                          ,[Clinic].[Facility]
                                                          ,[Clinic].[Type]
                                                          ,[Clinic].[Location]
                                                          ,[User].Id AS DUI
                                                          ,[User].Type
                                                          ,[User].Img
                                                          ,[User].FirstName
                                                          ,[User].LastName
                                                          ,[User].Email
                                                      FROM [RXCareDb].[dbo].[Patient]
                                                      JOIN [Doctor] ON [Doctor].Id = [Patient].DoctorId
                                                      JOIN [User] ON [Doctor].UserId = [User].Id
                                                      JOIN [Clinic] ON [Doctor].ClinicId = [Clinic].Id
                                                      WHERE [Patient].UserId = @Id;";
                    //INNER JOIN [Doctor] ON [Doctor].Id = [Patient].DoctorId
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    var patient = new PatientInfo5();
                    while (reader.Read())
                    {
                        patient = new PatientInfo5()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            Doctor = new DoctorInfo()
                            {
                                Id = DbUtils.GetInt(reader, "DId"),
                                User = new User()
                                {
                                    Id = DbUtils.GetInt(reader, "DUI"),
                                    Type = DbUtils.GetString(reader, "Type"),
                                    Img = DbUtils.GetString(reader, "Img"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                   
                                },
                                Clinic = new Clinic()
                                {
                                    Id = DbUtils.GetInt(reader, "ClinicId"),
                                    Address = DbUtils.GetString(reader, "Address"),
                                    Phone = DbUtils.GetString(reader, "Phone"),
                                    Facility = DbUtils.GetString(reader, "Facility"),
                                    Type = DbUtils.GetString(reader, "Type"),
                                    Location = DbUtils.GetString(reader, "Location"),



                                }


                            }
                        };
                    }
                    conn.Close();
                    return patient;
                }

            }

        }


        //--------------------------------------------------------------------------------------



        public PatientInfo5 GetDoctorInfoByPatientId2(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Patient].[Id] 
                                                          ,[Patient].[DoctorId]
                                                          ,[Patient].[Id]
                                                          ,[Doctor].[Id] AS DId
                                                          ,[Clinic].[Id] AS ClinicId
                                                          ,[Clinic].[Address]
                                                          ,[Clinic].[Phone]
                                                          ,[Clinic].[Facility]
                                                          ,[Clinic].[Type]
                                                          ,[Clinic].[Location]
                                                          ,[User].Id AS DUI
                                                          ,[User].Type
                                                          ,[User].Img
                                                          ,[User].FirstName
                                                          ,[User].LastName
                                                          ,[User].Email
                                                      FROM [RXCareDb].[dbo].[Patient]
                                                      JOIN [Doctor] ON [Doctor].Id = [Patient].DoctorId
                                                      JOIN [User] ON [Doctor].UserId = [User].Id
                                                      JOIN [Clinic] ON [Doctor].ClinicId = [Clinic].Id
                                                      WHERE [Patient].Id = @Id;";
                    //INNER JOIN [Doctor] ON [Doctor].Id = [Patient].DoctorId
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    var patient = new PatientInfo5();
                    while (reader.Read())
                    {
                        patient = new PatientInfo5()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            Doctor = new DoctorInfo()
                            {
                                Id = DbUtils.GetInt(reader, "DId"),
                                User = new User()
                                {
                                    Id = DbUtils.GetInt(reader, "DUI"),
                                    Type = DbUtils.GetString(reader, "Type"),
                                    Img = DbUtils.GetString(reader, "Img"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    Email = DbUtils.GetString(reader, "Email"),

                                },
                                Clinic = new Clinic()
                                {
                                    Id = DbUtils.GetInt(reader, "ClinicId"),
                                    Address = DbUtils.GetString(reader, "Address"),
                                    Phone = DbUtils.GetString(reader, "Phone"),
                                    Facility = DbUtils.GetString(reader, "Facility"),
                                    Type = DbUtils.GetString(reader, "Type"),
                                    Location = DbUtils.GetString(reader, "Location"),



                                }


                            }
                        };
                    }
                    conn.Close();
                    return patient;
                }

            }

        }


        //--------------------------------------------------------------------------------

        public PatientInfo GetPatientByUserId(int UserId)
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
                                          WHERE [Patient].UserId = @UserId;";
                    //INNER JOIN [Doctor] ON [Doctor].Id = [Patient].DoctorId
                    DbUtils.AddParameter(cmd, "@UserId", UserId);
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

































    }
}
