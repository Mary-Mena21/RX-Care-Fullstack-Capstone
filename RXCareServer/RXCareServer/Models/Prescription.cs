namespace RXCareServer.Models
{
    public class Prescription
    {
        public int Id { get; set; }
        public int? MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int? Quantity { get; set; }
        public int? PatientId { get; set; }

    }
    public class PrescriptionInfo
    {
        public int Id { get; set; }
        public int? MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int? Quantity { get; set; }
        public int? PatientId { get; set; }
        public Medicine? Medicine { get; set; }

    }

    public class PrescriptionInfo2
    {
        public int Id { get; set; }
        public int? MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int? Quantity { get; set; }
        public int? PatientId { get; set; }
        public bool? Active { get; set; }
        public Medicine? Medicine { get; set; }

    }



    public class PrescriptionDose
    {
        public int Id { get; set; }
        public int? MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int? Quantity { get; set; }
        public int? PatientId { get; set; }
        //   public Medicine? Medicine { get; set; }
        public List<AdminsteredDose>? AdminsteredDose { get; set; }

    }
}

/*
 
 
                            while (reader.Read())
                            {
                                var Prescription = new PrescriptionInfo()
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

                                    },
                                };
                                Prescriptions.Add(Prescription);
                            }

 

 
 
 
 /*

 
 
 
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
                                  LEFT JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
                                  WHERE [Prescription].[PatientId] = @Id";
                    DbUtils.AddParameter(cmd, "@Id", Id);
                    var reader = cmd.ExecuteReader();
                    PrescriptionDose prescription = null;
                    AdminsteredDose AdminsteredDose = null;
                    var prescriptions = new List<PrescriptionDose>();
                    var AdminsteredDoses = new List<AdminsteredDose>();

                    while (reader.Read())
                    {

                        prescription = new PrescriptionDose()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                            Dosage = DbUtils.GetString(reader, "Dosage"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            PatientId = DbUtils.GetInt(reader, "PatientId"),
                            AdminsteredDose = new List<AdminsteredDose>();

                        while (reader.Read())
                        {

                            AdminsteredDose adminsteredDose = new AdminsteredDose()
                            {
                                Id = DbUtils.GetInt(reader, "AdmId"),
                                Day = DbUtils.GetDateTime(reader, "Day"),
                                PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
                            };
                            AdminsteredDoses.Add(adminsteredDose);
                        };


                            prescriptions.Add(prescription);
                    }


                    conn.Close();
                    return prescriptions;
                    }

                }
            }
        }
 
 
 
 
 */