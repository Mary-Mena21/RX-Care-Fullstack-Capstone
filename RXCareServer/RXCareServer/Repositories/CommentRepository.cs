using ReadersRendezvous.Utils;
using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }


        //------------------------------Backend-GetPatientComment( )#33-----------------------------------

        public CommentInfo GetPatientComment(int id)
        {
            using(var conn = Connection)
            {
                conn.Open();
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    var reader = cmd.ExecuteReader();






                }
            }

            return new CommentInfo { };
        }





















    }
}
