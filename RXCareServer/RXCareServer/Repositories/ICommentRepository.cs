using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface ICommentRepository
    {
        void AddPatientComment(Comment comment);
        void DeleteCommentById(int id);
        void EditPatientComment(Comment comment);
        Comment GetPatientComment(int id);

        CommentInfo GetPatientCommentOnMedicine(int PatientId);
    }
}