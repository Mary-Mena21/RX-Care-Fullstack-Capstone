using ReadersRendezvous.Utils;
using RXCareServer.Models;
using System.Net;

namespace RXCareServer.Repositories
{
    public class prescriptionRepository : BaseRepository, IprescriptionRepository
    {

        public prescriptionRepository(IConfiguration configuration) : base(configuration) { }

        //-----------------------------Backend-GetPrescriptionById( )#19-----------works---------------------
        //GetPrescriptionByPrescriptionId Prescription
        public List<PrescriptionInfo> GetPrescriptionByPatientId(int id)//5
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

        //----------------------------------------------------------------------------------------
        public List<PrescriptionInfo> GetPrescriptionByPatientId2(int Id)//5
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
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    PrescriptionInfo prescription = null;
                    var Prescriptions = new List<PrescriptionInfo>();
                    while (reader.Read())
                    {
                        if (prescription == null)
                        {
                            prescription = new PrescriptionInfo()
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
                        };
                        Prescriptions.Add(prescription);
                    }
                    conn.Close();
                    return Prescriptions;
                }
            }
        }

        //------------------------------Backend-GetPrescriptionByPrescriptionId( )#31-------------

        public Prescription GetPrescriptionByPrescriptionId(int Id)//5
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
                                         FROM [RXCareDb].[dbo].[Prescription]
                                         WHERE [Prescription].Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    Prescription prescription = null;
                    while (reader.Read())
                    {
                        if (prescription == null)
                        {
                            prescription = new Prescription()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                Dosage = DbUtils.GetString(reader, "Dosage"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),
                                PatientId = DbUtils.GetInt(reader, "PatientId"),

                            };
                        }
                    }
                    conn.Close();
                    return prescription;
                }
            }
        }
        //------------------------------Backend-GetPrescriptionByPrescriptionId( )#31-------------
        public List<Prescription> GetPrescriptionOnlyByPatientId(int Id)//5
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
                             FROM [RXCareDb].[dbo].[Prescription]
                             WHERE [Prescription].PatientId = @Id";
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    Prescription prescription = null;
                    var Prescriptions = new List<Prescription>();
                    while (reader.Read())
                    {
                        if (prescription == null)
                        {
                            prescription = new Prescription()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                Dosage = DbUtils.GetString(reader, "Dosage"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),
                                PatientId = DbUtils.GetInt(reader, "PatientId"),
                               
                            };
                        };
                        Prescriptions.Add(prescription);
                    }
                    conn.Close();
                    return Prescriptions;
                }
            }
        }
        //------------------------------Backend-AddPrescription( )#15----------works!-------------

        public void AddPrescription(Prescription prescription)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [Prescription]
                                                   ([MedicineId]
                                                   ,[Dosage]
                                                   ,[Quantity]
                                                   ,[PatientId])
                                             OUTPUT INSERTED.Id APID
                                             VALUES
                                                   (@MedicineId
                                                   ,@Dosage
                                                   ,@Quantity
                                                   ,@PatientId)";
                    DbUtils.AddParameter(cmd, "@MedicineId", prescription.MedicineId);
                    DbUtils.AddParameter(cmd, "@Dosage", prescription.Dosage);
                    DbUtils.AddParameter(cmd, "@Quantity", prescription.Quantity);
                    DbUtils.AddParameter(cmd, "@PatientId", prescription.PatientId);

                    prescription.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                }
            }
        }

        //------------------------------Backend-EditPrescription( )#16---------works!---------------------


        public void EditPrescription(Prescription prescription)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE [dbo].[Prescription]
                                           SET [MedicineId] = @MedicineId
                                              ,[Dosage] = @Dosage
                                              ,[Quantity] = @Quantity
                                              ,[PatientId] = @PatientId
                                         WHERE [Id] = @Id";
                    DbUtils.AddParameter(cmd, "@MedicineId", prescription.MedicineId);
                    DbUtils.AddParameter(cmd, "@Dosage", prescription.Dosage);
                    DbUtils.AddParameter(cmd, "@Quantity", prescription.Quantity);
                    DbUtils.AddParameter(cmd, "@PatientId", prescription.PatientId);
                    DbUtils.AddParameter(cmd, "@Id", prescription.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        //-------------------------------Backend-DeletePrescription( )#17--------------------------------------


        public void DeletePrescriptionByPrescriptionId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Prescription WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }






















    }
}


/*
 {
  "id": 0,
  "medicineId":1,
  "dosage": "1 capsule daily",
  "quantity": 60,
  "patientId": 39
}
 */