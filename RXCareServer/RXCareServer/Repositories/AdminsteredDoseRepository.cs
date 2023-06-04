using ReadersRendezvous.Utils;
using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public class AdminsteredDoseRepository : BaseRepository, IAdminsteredDoseRepository
    {
        public AdminsteredDoseRepository(IConfiguration configuration) : base(configuration) { }

        //-------------------------GetAdminsteredDose()---------------------------------

        public List<AdminsteredDose> GetAdminsteredDoses(int PrescriptionId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Id]
                                              ,[Day]
                                              ,[prescriptionId]
                                          FROM [RXCareDb].[dbo].[AdminsteredDose]
                                          WHERE [prescriptionId] = @PrescriptionId";
                    DbUtils.AddParameter(cmd, "@PrescriptionId", PrescriptionId);
                    var reader = cmd.ExecuteReader();
                    AdminsteredDose? adminsteredDose = null;
                    var adminsteredDoses = new List<AdminsteredDose>();
                    while (reader.Read())
                    {
                        //if(comment == null)
                        //{
                        adminsteredDose = new AdminsteredDose
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Day = DbUtils.GetDateTime(reader, "Day"),
                            PrescriptionId = DbUtils.GetInt(reader, "prescriptionId"),
                        };
                        //}
                        adminsteredDoses.Add(adminsteredDose);
                    }
                    conn.Close();
                    return adminsteredDoses;
                }
            }
        }
        //-------------------------GetAdminsteredDosesById()---------------------------------

        public AdminsteredDose GetAdminsteredDoseById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Id]
                                              ,[Day]
                                              ,[prescriptionId]
                                          FROM [RXCareDb].[dbo].[AdminsteredDose]
                                          WHERE [Id] = @Id";
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    AdminsteredDose? adminsteredDose = null;
                    while (reader.Read())
                    {
                        //if(comment == null)
                        //{
                        adminsteredDose = new AdminsteredDose
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Day = DbUtils.GetDateTime(reader, "Day"),
                            PrescriptionId = DbUtils.GetInt(reader, "prescriptionId"),
                        };

                    }
                    conn.Close();
                    return adminsteredDose;
                }
            }
        }
        //------------------------------Backend-AddPrescription( )#15----------works!-------------

        public void AddAdminsteredDose(AdminsteredDose adminsteredDose)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[AdminsteredDose]
                                                           ([Day]
                                                           ,[PrescriptionId])
                                                    OUTPUT INSERTED.Id APID
                                                    VALUES
                                                   (@Day
                                                   ,@PrescriptionId)";
                    DbUtils.AddParameter(cmd, "@Day", adminsteredDose.Day);
                    DbUtils.AddParameter(cmd, "@prescriptionId", adminsteredDose.PrescriptionId);


                    adminsteredDose.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                }
            }
        }

        //----------------------------EditAdminsteredDose()------------------------------------

        public void EditAdminsteredDose(AdminsteredDose adminsteredDose)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE [dbo].[AdminsteredDose]
                                           SET [Day] = @Day
                                              ,[PrescriptionId] = @PrescriptionId
                                         WHERE [Id] = @Id";
                    DbUtils.AddParameter(cmd, "@Day", adminsteredDose.Day);
                    DbUtils.AddParameter(cmd, "@prescriptionId", adminsteredDose.PrescriptionId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        //----------------------------DeleteAdminsteredDose()------------------------------------

        public void DeleteAdminsteredDose(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM AdminsteredDose WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        //--------------------------------------------------------------------------------------





    }
}
