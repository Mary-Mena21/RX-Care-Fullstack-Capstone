using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface ICommentRepository
    {
        void AddPatientComment(Comment comment);
        void DeleteCommentById(int id);
        void EditPatientComment(Comment comment);
        List<Comment> GetPatientComment(int PatientId);

        List<CommentInfo> GetPatientCommentOnMedicine(int PatientId);
    }
}