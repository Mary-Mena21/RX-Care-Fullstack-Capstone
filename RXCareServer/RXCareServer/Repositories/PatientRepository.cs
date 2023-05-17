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
                                              ,[Patient].[DoctorId]
                                              ,[Patient].[DoB]
                                              ,[Patient].[Address]
                                              ,[Patient].[Phone]
                                              ,[Patient].[Height]
                                              ,[Patient].[Weight]
                                              ,[Patient].[Note]
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
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            DoB = DbUtils.GetDateTime(reader, "DoB"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Height = DbUtils.GetDecimal(reader, "Height"),
                            Weight = DbUtils.GetDecimal(reader, "Weight"),
                            Note = DbUtils.GetString(reader, "Note"),
                            User = new User()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
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
                                              ,[Patient].[DoB]
                                              ,[Patient].[Address]
                                              ,[Patient].[Phone]
                                              ,[Patient].[Height]
                                              ,[Patient].[Weight]
                                              ,[Patient].[Note]
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
                            DoB = DbUtils.GetDateTime(reader, "DoB"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Height = DbUtils.GetDecimal(reader, "Height"),
                            Weight = DbUtils.GetDecimal(reader, "Weight"),
                            Note = DbUtils.GetString(reader, "Note"),
                            User = new User()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
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
