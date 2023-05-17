namespace RXCareServer.Models
{
    public class AdminsteredDoseRepository
    {
        public int Id { get; set; }
        public DateOnly Day { get; set; }
        public int prescriptionId { get; set; }
    }
}
