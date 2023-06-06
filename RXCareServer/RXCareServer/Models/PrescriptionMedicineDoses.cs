namespace RXCareServer.Models
{
    public class PrescriptionMedicineDoses
    {
        public int Id { get; set; }
        public int? MedicineId { get; set; }
        public string? Dosage { get; set; }
        public int? Quantity { get; set; }
        public int? PatientId { get; set; }
        public string? MedicineName { get; set; }
        public string? ImgUrl { get; set; }
        public string? Form { get; set; }
        public string? SideEffects { get; set; }
        public string? DrugInfo { get; set; }
        public DateTime Day { get; set; }
        public int PrescriptionId { get; set; }
    }
}
