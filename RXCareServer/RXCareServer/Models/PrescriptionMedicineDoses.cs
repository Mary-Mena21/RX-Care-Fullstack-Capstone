namespace RXCareServer.Models
{
    public class PrescriptionMedicineDoses
    {
        public int Id { get; set; }
        public int? MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int? Quantity { get; set; }
        public int? PatientId { get; set; }
        public string? Active { get; set; }
        public string? MedicineName { get; set; }
        public string? ImgUrl { get; set; }
        public string? Form { get; set; }
        public string? SideEffects { get; set; }
        public string? DrugInfo { get; set; }
        public List<AdminsteredDose>? AdminsteredDose { get; set; }

    }

    public class PrescriptionMedicine
    {
        public int Id { get; set; }
        public int? MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int? Quantity { get; set; }
        public int? PatientId { get; set; }
        public string? Active { get; set; }
        public string? MedicineName { get; set; }
        public string? ImgUrl { get; set; }
        public string? Form { get; set; }
        public string? SideEffects { get; set; }
        public string? DrugInfo { get; set; }

    }
}




//-------------------------------------works2---!!!!!!!!!!!!!👌-----------------------------------
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
//                           JOIN [AdminsteredDose] ON [AdminsteredDose].[PrescriptionId] = [Prescription].[Id]
//                          WHERE [Prescription].[PatientId] = @Id";
//            DbUtils.AddParameter(cmd, "@Id", Id);
//            var reader = cmd.ExecuteReader();
//            PrescriptionDose prescription = null;
//            var prescriptions = new List<PrescriptionDose>();

//            while (reader.Read())
//            {
//                int prescriptionId = DbUtils.GetInt(reader, "Id");


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


//                int admId = DbUtils.GetInt(reader, "AdmId");


//                    AdminsteredDose adminsteredDose = new AdminsteredDose
//                    {
//                        Id = admId,
//                        Day = DbUtils.GetDateTime(reader, "Day"),
//                        PrescriptionId = DbUtils.GetInt(reader, "PrescriptionId"),
//                    };

//                    prescription.AdminsteredDose.Add(adminsteredDose);

//            }

//            conn.Close();
//            return prescriptions;
//        }
//    }
//}