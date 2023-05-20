namespace RXCareServer.Models
{
    public class Prescription
    {
        public int Id { get; set; }
        public int MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int Quantity { get; set; }
        public int PatientId { get; set; }

    }
    public class PrescriptionInfo
    {
        public int Id { get; set; }
        public int MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int Quantity { get; set; }
        public int PatientId { get; set; }
        public Medicine Medicine { get; set; }

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

 
 */