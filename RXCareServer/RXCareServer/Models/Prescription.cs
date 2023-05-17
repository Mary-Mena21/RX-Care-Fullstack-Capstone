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
}
