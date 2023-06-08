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
        public List<PrescriptionInfo2> GetPrescriptionByPatientId(int id)//5
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
                                              ,[Prescription].Active
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
                    var Prescriptions = new List<PrescriptionInfo2>();
                    while (reader.Read())
                    {
                        var prescription = new PrescriptionInfo2()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                            Dosage = DbUtils.GetString(reader, "Dosage"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            PatientId = DbUtils.GetInt(reader, "PatientId"),
                            Active = DbUtils.GetBoolean(reader, "Active"),
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
                        //if (prescription == null)
                        //{
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
                       // };
                        Prescriptions.Add(prescription);
                    }
                    conn.Close();
                    return Prescriptions;
                }
            }
        }

        //------------------------------GetPrescriptionMedicineByPrescriptionId---------------------------------
        public PrescriptionInfo GetPrescriptionMedicineByPrescriptionId(int Id)//5
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
                             WHERE [Prescription].Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    PrescriptionInfo prescription = null;
                    while (reader.Read())
                    {
                        //if (prescription == null)
                        //{
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
                        // };

                    }
                    conn.Close();
                    return prescription;
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
                        //if (prescription == null)
                        //{
                            prescription = new Prescription()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                Dosage = DbUtils.GetString(reader, "Dosage"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),
                                PatientId = DbUtils.GetInt(reader, "PatientId"),
                               
                            };
                        //};
                        Prescriptions.Add(prescription);
                    }
                    conn.Close();
                    return Prescriptions;
                }
            }
        }
        //------------------------------Backend-GetPrescriptionByPrescriptionId( )#31-------------
        //public List<PrescriptionDose> GetPrescriptionDosesByPatientId(int Id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"SELECT [Prescription].[Id] 
        //                              ,[Prescription].[MedicineId]
        //                              ,[Prescription].[Dosage]
        //                              ,[Prescription].[Quantity]
        //                              ,[Prescription].[PatientId]
        //                              ,[AdminsteredDose].[Id] AS AdmId
        //                              ,[AdminsteredDose].[Day]
        //                              ,[AdminsteredDose].[PrescriptionId]
        //                          FROM [RXCareDb].[dbo].[Prescription]
        //                          LEFT JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
        //                          WHERE [Prescription].[PatientId] = @Id";
        //            DbUtils.AddParameter(cmd, "@Id", Id);
        //            var reader = cmd.ExecuteReader();
        //            PrescriptionDose prescription = null;
        //            var Prescriptions = new List<PrescriptionDose>();
        //            var AdminsteredDoses = new List<AdminsteredDose>();


        //            prescription = new PrescriptionDose()
        //            {
        //                Id = DbUtils.GetInt(reader, "Id"),
        //                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
        //                Dosage = DbUtils.GetString(reader, "Dosage"),
        //                Quantity = DbUtils.GetInt(reader, "Quantity"),
        //                PatientId = DbUtils.GetInt(reader, "PatientId"),
        //                AdminsteredDose = new List<AdminsteredDose>();

        //            while (reader.Read())
        //            {
        //                AdminsteredDose AdminsteredDose = new AdminsteredDose()
        //                {
        //                    Id = DbUtils.GetInt(reader, "AdmId"),
        //                    Day = DbUtils.GetDateTime(reader, "Day"),
        //                    PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
        //                };
        //                AdminsteredDoses.Add(AdminsteredDose);
        //            };
        //            Prescriptions.Add(prescription);
        //            ;



        //            conn.Close();
        //            return Prescriptions;



        //        }
        //    }
        //}


        //        public List<PrescriptionDose> GetPrescriptionDosesByPatientId(int Id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"SELECT [Prescription].[Id]
        //                                      ,[Prescription].[MedicineId]
        //                                      ,[Prescription].[Dosage]
        //                                      ,[Prescription].[Quantity]
        //                                      ,[Prescription].[PatientId]
        //                                      ,[AdminsteredDose].[Id] AS AdmId
        //                                      ,[AdminsteredDose].[Day]
        //                                      ,[AdminsteredDose].[PrescriptionId]
        //                                  FROM [RXCareDb].[dbo].[Prescription]
        //                                  LEFT JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
        //                                  WHERE [Prescription].[PatientId] = @Id";
        //            DbUtils.AddParameter(cmd, "@Id", Id);
        //            var reader = cmd.ExecuteReader();
        //            var prescriptions = new List<PrescriptionDose>();
        //            var adminsteredDoses = new List<AdminsteredDose>();

        //            while (reader.Read())
        //            {
        //                if (prescriptions.Count == 0)
        //                {
        //                    PrescriptionDose prescription = new PrescriptionDose()
        //                    {
        //                        Id = DbUtils.GetInt(reader, "Id"),
        //                        MedicineId = DbUtils.GetInt(reader, "MedicineId"),
        //                        Dosage = DbUtils.GetString(reader, "Dosage"),
        //                        Quantity = DbUtils.GetInt(reader, "Quantity"),
        //                        PatientId = DbUtils.GetInt(reader, "PatientId"),
        //                        AdminsteredDose = new List<AdminsteredDose>()
        //                    };

        //                    AdminsteredDose adminsteredDose = new AdminsteredDose()
        //                    {
        //                        Id = DbUtils.GetInt(reader, "AdmId"),
        //                        Day = DbUtils.GetDateTime(reader, "Day"),
        //                        PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
        //                    };

        //                    prescription.AdminsteredDose.Add(adminsteredDose);
        //                    adminsteredDoses.Add(adminsteredDose);
        //                    prescriptions.Add(prescription);
        //                }
        //                else
        //                {
        //                    var prescription = prescriptions[prescriptions.Count - 1];

        //                    int admId = DbUtils.GetInt(reader, "AdmId");
        //                    if (admId != 0)
        //                    {
        //                        AdminsteredDose adminsteredDose = new AdminsteredDose()
        //                        {
        //                            Id = admId,
        //                            Day = DbUtils.GetDateTime(reader, "Day"),
        //                            PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
        //                        };

        //                        prescription.AdminsteredDose.Add(adminsteredDose);
        //                        adminsteredDoses.Add(adminsteredDose);
        //                    }
        //                }
        //            }

        //            conn.Close();
        //            return prescriptions;
        //        }
        //    }
        //}


        //-----------------------------------works1-----------------------------------------------------
        //public List<PrescriptionDose> GetPrescriptionDosesByPatientId(int Id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"SELECT [Prescription].[Id]
        //                              ,[Prescription].[MedicineId]
        //                              ,[Prescription].[Dosage]
        //                              ,[Prescription].[Quantity]
        //                              ,[Prescription].[PatientId]
        //                              ,[AdminsteredDose].[Day]
        //                              ,[AdminsteredDose].[PrescriptionId]
        //                              ,[Medicine].[Id] AS MedId
        //                              ,[Medicine].[MedicineName]
        //                              ,[Medicine].[ImgUrl]
        //                              ,[Medicine].[Form]
        //                              ,[Medicine].[SideEffects]
        //                              ,[Medicine].[DrugInfo]
        //                          FROM [RXCareDb].[dbo].[Prescription]
        //                           JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
        //                           JOIN [Medicine] ON [Prescription].[MedicineId] = [Medicine].[Id]
        //                          WHERE [Prescription].[PatientId] = @Id";
        //            DbUtils.AddParameter(cmd, "@Id", Id);
        //            var reader = cmd.ExecuteReader();
        //            PrescriptionDose? prescription = null;
        //            var prescriptions = new List<PrescriptionDose>();

        //            while (reader.Read())
        //            {
        //                int prescriptionId = DbUtils.GetInt(reader, "Id");



        //                prescription = new PrescriptionDose()
        //                {
        //                    Id = prescriptionId,
        //                    MedicineId = DbUtils.GetInt(reader, "MedicineId"),
        //                    Dosage = DbUtils.GetString(reader, "Dosage"),
        //                    Quantity = DbUtils.GetInt(reader, "Quantity"),
        //                    PatientId = DbUtils.GetInt(reader, "PatientId"),
        //                    Medicine = new Medicine()
        //                    {
        //                        Id = DbUtils.GetInt(reader, "MedId"),
        //                        MedicineName = DbUtils.GetString(reader, "MedicineName"),
        //                        ImgUrl = DbUtils.GetString(reader, "ImgUrl"),
        //                        Form = DbUtils.GetString(reader, "Form"),
        //                        SideEffects = DbUtils.GetString(reader, "SideEffects"),
        //                        DrugInfo = DbUtils.GetString(reader, "DrugInfo"),
        //                    },
        //                    AdminsteredDose = new List<AdminsteredDose>()
        //                };

        //                prescriptions.Add(prescription);


        //                int admId = DbUtils.GetInt(reader, "PrescriptionId");

        //                AdminsteredDose adminsteredDose = new AdminsteredDose
        //                {
        //                    Id = admId,
        //                    Day = DbUtils.GetDateTime(reader, "Day"),
        //                    PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
        //                };

        //                prescription.AdminsteredDose.Add(adminsteredDose);

        //            }

        //            conn.Close();
        //            return prescriptions;
        //        }
        //    }
        //}
        //****************************************************************************************************************

        //-----------------------------------works1---Brain Thanks--------------------------------------------------
        public List<PrescriptionMedicineDoses> GetPrescriptionDosesByPatientIdAll(int PatientId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Prescription].[Id]
                                      ,[Prescription].[MedicineId]
                                      ,[Prescription].[Dosage]
                                      ,[Prescription].[Quantity]
                                      ,[Prescription].[PatientId]
                                      ,[Prescription].[Active]
                                 
                                      ,[AdminsteredDose].[Day]
                                      ,[AdminsteredDose].[PrescriptionId]
                                      ,[Medicine].[Id] AS MedId
                                      ,[Medicine].[MedicineName]
                                      ,[Medicine].[ImgUrl]
                                      ,[Medicine].[Form]
                                      ,[Medicine].[SideEffects]
                                      ,[Medicine].[DrugInfo]
                                  FROM [RXCareDb].[dbo].[Prescription]
                                  Left JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
                                  Left JOIN [Medicine] ON [Prescription].[MedicineId] = [Medicine].[Id]
                                  WHERE [Prescription].[PatientId] = @PatientId
                                  Order by [Prescription].[Id]";

                    DbUtils.AddParameter(cmd, "@PatientId", PatientId);
                    var reader = cmd.ExecuteReader();
                    PrescriptionMedicineDoses? PrescriptionMedicineDose = null;
                    AdminsteredDose adminsteredDose = null;

                    var PrescriptionMedicineDoses = new List<PrescriptionMedicineDoses>();

                    while (reader.Read())
                    {
                        //     ,[AdminsteredDose].[Id] AS AdmId
                        var currentId = DbUtils.GetInt(reader, "Id");

                        if (PrescriptionMedicineDose == null || PrescriptionMedicineDose.Id != currentId)

                        {
                            if (PrescriptionMedicineDose != null)
                            {
                                PrescriptionMedicineDoses.Add(PrescriptionMedicineDose);
                            }
                            PrescriptionMedicineDose = new PrescriptionMedicineDoses()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                Dosage = DbUtils.GetString(reader, "Dosage"),
                                Quantity = DbUtils.GetInt(reader, "Quantity"),
                                PatientId = DbUtils.GetInt(reader, "PatientId"),
                                Active = DbUtils.GetBoolean(reader, "Active"),
                                MedicineName = DbUtils.GetString(reader, "MedicineName"),
                                ImgUrl = DbUtils.GetString(reader, "ImgUrl"),
                                Form = DbUtils.GetString(reader, "Form"),
                                SideEffects = DbUtils.GetString(reader, "SideEffects"),
                                DrugInfo = DbUtils.GetString(reader, "DrugInfo"),
                                AdminsteredDose = new List<AdminsteredDose>()
                            };

                        }
                        //if (adminsteredDose != null) {
                        // AdminsteredDose adminsteredDose = new AdminsteredDose
                            adminsteredDose = new AdminsteredDose
                            {
                                //Id = DbUtils.GetNullableInt(reader, "AdmId"),
                                Day = DbUtils.GetNullableDateTime(reader, "Day"),
                                PrescriptionId = DbUtils.GetNullableInt(reader, "PrescriptionId"),
                            };

                            PrescriptionMedicineDose.AdminsteredDose.Add(adminsteredDose);
                        //};
                    }
                    if (PrescriptionMedicineDose != null)
                    {

                        PrescriptionMedicineDoses.Add(PrescriptionMedicineDose);
                    }

                    conn.Close();
                    return PrescriptionMedicineDoses;
                }
            }
        }

        //****************************************************************************************************************
        //-----------------------------------works1---Brain Thanks--------------------------------------------------
        //public List<PrescriptionMedicineDoses> GetPrescriptionDosesByPatientIdAll(int PatientId)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"SELECT [Prescription].[Id]
        //                              ,[Prescription].[MedicineId]
        //                              ,[Prescription].[Dosage]
        //                              ,[Prescription].[Quantity]
        //                              ,[Prescription].[PatientId]
        //                              ,[Prescription].[Active]
        //                              ,[AdminsteredDose].[Id] AS AdmId
        //                              ,[AdminsteredDose].[Day]
        //                              ,[AdminsteredDose].[PrescriptionId]
        //                              ,[Medicine].[Id] AS MedId
        //                              ,[Medicine].[MedicineName]
        //                              ,[Medicine].[ImgUrl]
        //                              ,[Medicine].[Form]
        //                              ,[Medicine].[SideEffects]
        //                              ,[Medicine].[DrugInfo]
        //                          FROM [RXCareDb].[dbo].[Prescription]
        //                          LEFT JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
        //                          LEFT JOIN [Medicine] ON [Prescription].[MedicineId] = [Medicine].[Id]
        //                          WHERE [Prescription].[PatientId] = @PatientId
        //                          Order by [Prescription].[Id]";

        //            DbUtils.AddParameter(cmd, "@PatientId", PatientId);
        //            var reader = cmd.ExecuteReader();
        //            PrescriptionMedicineDoses? PrescriptionMedicineDose = null;
        //            var PrescriptionMedicineDoses = new List<PrescriptionMedicineDoses>();
        //            AdminsteredDose? adminsteredDose = null;

        //            while (reader.Read())
        //            {

        //                var currentId = DbUtils.GetInt(reader, "Id");

        //                if (PrescriptionMedicineDose == null || PrescriptionMedicineDose.Id != currentId)

        //                {
        //                    if (PrescriptionMedicineDose != null)
        //                    {
        //                        PrescriptionMedicineDoses.Add(PrescriptionMedicineDose);
        //                    }
        //                    PrescriptionMedicineDose = new PrescriptionMedicineDoses()
        //                    {
        //                        Id = DbUtils.GetInt(reader, "Id"),
        //                        MedicineId = DbUtils.GetInt(reader, "MedicineId"),
        //                        Dosage = DbUtils.GetString(reader, "Dosage"),
        //                        Quantity = DbUtils.GetInt(reader, "Quantity"),
        //                        PatientId = DbUtils.GetInt(reader, "PatientId"),
        //                        Active = DbUtils.GetBoolean(reader, "Active"),
        //                        MedicineName = DbUtils.GetString(reader, "MedicineName"),
        //                        ImgUrl = DbUtils.GetString(reader, "ImgUrl"),
        //                        Form = DbUtils.GetString(reader, "Form"),
        //                        SideEffects = DbUtils.GetString(reader, "SideEffects"),
        //                        DrugInfo = DbUtils.GetString(reader, "DrugInfo"),
        //                        AdminsteredDose = new List<AdminsteredDose>()
        //                    };

        //                }

        //                 adminsteredDose = new AdminsteredDose
        //                {
        //                    Id = DbUtils.GetInt(reader, "AdmId"),
        //                    Day = DbUtils.GetDateTime(reader, "Day"),
        //                    PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
        //                };

        //                PrescriptionMedicineDose.AdminsteredDose.Add(adminsteredDose);

        //            }
        //            if (PrescriptionMedicineDose != null)
        //            {

        //                PrescriptionMedicineDoses.Add(PrescriptionMedicineDose);
        //            }

        //            conn.Close();
        //            return PrescriptionMedicineDoses;
        //        }
        //    }
        //}







        ////-------------------------------------works2--------------------------------------
        //public List<PrescriptionDose> GetPrescriptionDosesByPatientId(int Id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"SELECT [Prescription].[Id] 
        //                              ,[Prescription].[MedicineId]
        //                              ,[Prescription].[Dosage]
        //                              ,[Prescription].[Quantity]
        //                              ,[Prescription].[PatientId]
        //                              ,[AdminsteredDose].[Id] AS AdmId
        //                              ,[AdminsteredDose].[Day]
        //                              ,[AdminsteredDose].[PrescriptionId]
        //                          FROM [RXCareDb].[dbo].[Prescription]
        //                          LEFT JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
        //                          WHERE [Prescription].[PatientId] = @Id";
        //            DbUtils.AddParameter(cmd, "@Id", Id);
        //            var reader = cmd.ExecuteReader();
        //            PrescriptionDose prescription = null;
        //            var prescriptions = new List<PrescriptionDose>();

        //            while (reader.Read())
        //            {
        //                int prescriptionId = DbUtils.GetInt(reader, "Id");

        //                if (prescription == null || prescription.Id != prescriptionId)
        //                {
        //                    prescription = new PrescriptionDose()
        //                    {
        //                        Id = prescriptionId,
        //                        MedicineId = DbUtils.GetInt(reader, "MedicineId"),
        //                        Dosage = DbUtils.GetString(reader, "Dosage"),
        //                        Quantity = DbUtils.GetInt(reader, "Quantity"),
        //                        PatientId = DbUtils.GetInt(reader, "PatientId"),
        //                        AdminsteredDose = new List<AdminsteredDose>()
        //                    };

        //                    prescriptions.Add(prescription);
        //                }

        //                int admId = DbUtils.GetInt(reader, "AdmId");
        //                if (admId == 0)
        //                {
        //                    AdminsteredDose adminsteredDose = new AdminsteredDose
        //                    {
        //                        Id = admId,
        //                        Day = DbUtils.GetDateTime(reader, "Day"),
        //                        PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
        //                    };

        //                    prescription.AdminsteredDose.Add(adminsteredDose);
        //                }
        //            }

        //            conn.Close();
        //            return prescriptions;
        //        }
        //    }
        //}
        //-------------------------------------works2---!!!!!!!!!!!!!👌-----------------------------------
        public List<PrescriptionDose> GetPrescriptionDosesByPatientId(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Prescription].[Id] 
                                      ,[Prescription].[MedicineId]
                                      ,[Prescription].[Dosage]
                                      ,[Prescription].[Quantity]
                                      ,[Prescription].[PatientId]
                                      ,[AdminsteredDose].[Id] AS AdmId
                                      ,[AdminsteredDose].[Day]
                                      ,[AdminsteredDose].[PrescriptionId]
                                  FROM [RXCareDb].[dbo].[Prescription]
                                   JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
                                  WHERE [Prescription].[PatientId] = @Id";
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    PrescriptionDose prescription = null;
                    var prescriptions = new List<PrescriptionDose>();

                    while (reader.Read())
                    {
                        int prescriptionId = DbUtils.GetInt(reader, "Id");


                        prescription = new PrescriptionDose()
                        {
                            Id = prescriptionId,
                            MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                            Dosage = DbUtils.GetString(reader, "Dosage"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            PatientId = DbUtils.GetInt(reader, "PatientId"),
                            AdminsteredDose = new List<AdminsteredDose>()
                        };

                        prescriptions.Add(prescription);


                        int admId = DbUtils.GetInt(reader, "AdmId");


                        AdminsteredDose adminsteredDose = new AdminsteredDose
                        {
                            Id = admId,
                            Day = DbUtils.GetDateTime(reader, "Day"),
                            PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
                        };

                        prescription.AdminsteredDose.Add(adminsteredDose);

                    }

                    conn.Close();
                    return prescriptions;
                }
            }
        }
        //---------------------------------TEST-------------------------------------------------------
        //public List<PrescriptionDose> GetPrescriptionDosesByPatientId(int Id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"SELECT [Prescription].[Id] 
        //                              ,[Prescription].[MedicineId]
        //                              ,[Prescription].[Dosage]
        //                              ,[Prescription].[Quantity]
        //                              ,[Prescription].[PatientId]
        //                              ,[AdminsteredDose].[Id] AS AdmId
        //                              ,[AdminsteredDose].[Day]
        //                              ,[AdminsteredDose].[PrescriptionId]
        //                          FROM [RXCareDb].[dbo].[Prescription]
        //                          JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
        //                          WHERE [Prescription].[PatientId] = @Id";
        //            DbUtils.AddParameter(cmd, "@Id", Id);
        //            var reader = cmd.ExecuteReader();
        //            PrescriptionDose prescription = null;
        //            var prescriptions = new List<PrescriptionDose>();

        //            while (reader.Read())
        //            {
        //                int prescriptionId = DbUtils.GetInt(reader, "Id");

        //                if (prescription == null || prescription.Id != prescriptionId)
        //                {
        //                    prescription = new PrescriptionDose()
        //                    {
        //                        Id = prescriptionId,
        //                        MedicineId = DbUtils.GetInt(reader, "MedicineId"),
        //                        Dosage = DbUtils.GetString(reader, "Dosage"),
        //                        Quantity = DbUtils.GetInt(reader, "Quantity"),
        //                        PatientId = DbUtils.GetInt(reader, "PatientId"),
        //                        AdminsteredDose = new List<AdminsteredDose>()
        //                    };

        //                    prescriptions.Add(prescription);
        //                }

        //                int admId = DbUtils.GetInt(reader, "AdmId");
        //                if (admId != 0)
        //                {
        //                    AdminsteredDose adminsteredDose = new AdminsteredDose
        //                    {
        //                        Id = admId,
        //                        Day = DbUtils.GetDateTime(reader, "Day"),
        //                        PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
        //                    };

        //                    prescription.AdminsteredDose.Add(adminsteredDose);
        //                }
        //            }

        //            conn.Close();
        //            return prescriptions;
        //        }
        //    }
        //}

        //---------------------------------------------------------------------------------------
        //public List<PrescriptionDose> GetPrescriptionDosesByPatientId(int Id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"SELECT [Prescription].[Id] 
        //                              ,[Prescription].[MedicineId]
        //                              ,[Prescription].[Dosage]
        //                              ,[Prescription].[Quantity]
        //                              ,[Prescription].[PatientId]
        //                              ,[AdminsteredDose].[Id] AS AdmId
        //                              ,[AdminsteredDose].[Day]
        //                              ,[AdminsteredDose].[PrescriptionId]
        //                          FROM [RXCareDb].[dbo].[Prescription]
        //                          LEFT JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
        //                          WHERE [Prescription].[PatientId] = @Id";
        //            DbUtils.AddParameter(cmd, "@Id", Id);
        //            var reader = cmd.ExecuteReader();
        //            PrescriptionDose prescription = null;
        //            var prescriptions = new List<PrescriptionDose>();

        //            while (reader.Read())
        //            {
        //                int prescriptionId = DbUtils.GetInt(reader, "Id");

        //                if (prescription == null || prescription.Id != prescriptionId)
        //                {
        //                    prescription = new PrescriptionDose()
        //                    {
        //                        Id = prescriptionId,
        //                        MedicineId = DbUtils.GetInt(reader, "MedicineId"),
        //                        Dosage = DbUtils.GetString(reader, "Dosage"),
        //                        Quantity = DbUtils.GetInt(reader, "Quantity"),
        //                        PatientId = DbUtils.GetInt(reader, "PatientId"),
        //                        AdminsteredDose = new List<AdminsteredDose>()
        //                    };

        //                    prescriptions.Add(prescription);
        //                }

        //                int admId = DbUtils.GetInt(reader, "AdmId");
        //                if (admId != 0)
        //                {
        //                    AdminsteredDose adminsteredDose = new AdminsteredDose
        //                    {
        //                        Id = admId,
        //                        Day = DbUtils.GetDateTime(reader, "Day"),
        //                        PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
        //                    };

        //                    prescription.AdminsteredDose.Add(adminsteredDose);
        //                }
        //            }

        //            conn.Close();
        //            return prescriptions;
        //        }
        //    }
        //}

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