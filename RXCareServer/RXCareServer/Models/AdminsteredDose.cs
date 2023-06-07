namespace RXCareServer.Models
{
    public class AdminsteredDose
    {
        public int Id { get; set; }
        public DateTime? Day { get; set; }
        public int? PrescriptionId { get; set; }
    }
}
