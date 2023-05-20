namespace RXCareServer.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Type { get; set; }
        public string? Img { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
    }

    public class UserInfo1
    {
        public string? Type { get; set; }
        public string? Img { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
    }

    public class UserInfo2
    {
        public int Id { get; set; }
        public string? Type { get; set; }
        public string? Img { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public Patient Patient { get; set; }
    }

    public class UserInfo3
    {
        public int Id { get; set; }
        public string? Type { get; set; }
        public string? Img { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public PatientInfo3 Patient { get; set; }

    }

}
