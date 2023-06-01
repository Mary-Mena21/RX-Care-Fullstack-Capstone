namespace RXCareServer.Models
{
    public class Comment
    {
        public int? Id { get; set; }
        public int? PatientId { get; set; }
        public int? MedicineId { get; set; }
        public string? PComment { get; set; }
        public DateTime? PCommentDate { get; set; }
        public string? DComment { get; set; }
        public DateTime? DCommentDate { get; set; }
    }

    public class CommentInfo
    {
        public int? Id { get; set; }
        public int? PatientId { get; set; }
        public int? MedicineId { get; set; }
        public string?   PComment { get; set; }
        public DateTime? PCommentDate { get; set; }
        public string? DComment { get; set; }
        public DateTime? DCommentDate { get; set; }
        public Medicine? Medicine { get; set; }
    }
}
