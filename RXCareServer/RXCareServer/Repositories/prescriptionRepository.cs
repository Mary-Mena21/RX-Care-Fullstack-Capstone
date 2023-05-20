using ReadersRendezvous.Utils;
using RXCareServer.Models;
using System.Net;

namespace RXCareServer.Repositories
{
    public class prescriptionRepository : BaseRepository, IprescriptionRepository
    {

        public prescriptionRepository(IConfiguration configuration) : base(configuration) { }

        //-----------------------------Backend-GetPrescriptionById( )#19-----------works---------------------

        public List<PrescriptionInfo> GetPrescriptionById(int id)//5
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Prescription].Id 
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
                             FROM [RXCareDb].[dbo].[Prescription]
                             LEFT JOIN [Medicine] ON [Prescription].MedicineId = [Medicine].Id
                             WHERE [Prescription].PatientId = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();
                    var Prescriptions = new List<PrescriptionInfo>();
                    while (reader.Read())
                    {
                        var prescription = new PrescriptionInfo()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
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
                        };
                        Prescriptions.Add(prescription);
                    }
                    conn.Close();
                    return Prescriptions;
                }
            }
        }
        //------------------------------Backend-AddPrescription( )#15-------------------------------


    }
}