namespace RXCareServer.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int MedicineId { get; set; }
        public string? PComment { get; set; }
        public DateOnly PCommentDate { get; set; }
        public string? DComment { get; set; }
        public DateOnly DCommentDate { get; set; }
    }
}
