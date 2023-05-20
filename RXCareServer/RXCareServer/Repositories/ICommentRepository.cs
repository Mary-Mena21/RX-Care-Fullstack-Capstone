using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface ICommentRepository
    {
        CommentInfo GetPatientComment(int id);
    }
}