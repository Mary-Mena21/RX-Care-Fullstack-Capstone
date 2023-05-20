using ReadersRendezvous.Utils;
using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }


        //------------------------------Backend-GetPatientComment( )#33-----------------------------------

        public Comment GetPatientComment(int PatientId)
        {
            using(var conn = Connection)
            {
                conn.Open();
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [Id]
                                              ,[PatientId]
                                              ,[MedicineId]
                                              ,[PComment]
                                              ,[PCommentDate]
                                              ,[DComment]
                                              ,[DCommentDate]
                                          FROM [RXCareDb].[dbo].[Comment]
                                          WHERE [Comment].PatientId = @PatientId";
                    DbUtils.AddParameter(cmd, "@PatientId", PatientId);
                    var reader = cmd.ExecuteReader();
                    Comment comment = null;
                    while (reader.Read())
                    {
                        if(comment == null)
                        {
                            comment = new Comment
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                PatientId = DbUtils.GetInt(reader, "PatientId"),
                                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                PComment = DbUtils.GetString(reader, "PComment"),
                                PCommentDate = DbUtils.GetDateTime(reader, "PCommentDate"),
                                DComment = DbUtils.GetString(reader, "DComment"),
                                DCommentDate = DbUtils.GetDateTime(reader, "DCommentDate"),
                            };
                        }
                    }
            conn.Close();
            return comment;
                }
            }
        }

        //------------------------------Backend-GetPatientComment( )#33-----------------------------------

        public CommentInfo GetPatientCommentOnMedicine(int PatientId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT 
                                               [Comment].Id AS ComId
                                              ,[Comment].PatientId
                                              ,[Comment].MedicineId
                                              ,[Comment].PComment
                                              ,[Comment].PCommentDate
                                              ,[Comment].DComment
                                              ,[Comment].DCommentDate
                                              ,[Medicine].Id As MedId
                                              ,[Medicine].MedicineName
                                              ,[Medicine].ImgUrl
                                              ,[Medicine].Form
                                              ,[Medicine].SideEffects
                                              ,[Medicine].DrugInfo
                                          FROM [RXCareDb].[dbo].[Comment]
                                          LEFT JOIN [Medicine] ON [Comment].MedicineId = [Medicine].Id 
                                          WHERE [Comment].PatientId = 14";
                    DbUtils.AddParameter(cmd, "@PatientId", PatientId);
                    var reader = cmd.ExecuteReader();
                    CommentInfo comment = null;
                    while (reader.Read())
                    {
                        if (comment == null)
                        {
                            comment = new CommentInfo
                            {
                                Id = DbUtils.GetInt(reader, "ComId"),
                                PatientId = DbUtils.GetInt(reader, "PatientId"),
                                MedicineId = DbUtils.GetInt(reader, "MedicineId"),
                                PComment = DbUtils.GetString(reader, "PComment"),
                                PCommentDate = DbUtils.GetDateTime(reader, "PCommentDate"),
                                DComment = DbUtils.GetString(reader, "DComment"),
                                DCommentDate = DbUtils.GetDateTime(reader, "DCommentDate"),
                                Medicine = new Medicine()
                                {
                                    Id = DbUtils.GetInt(reader, "MedId"),
                                    MedicineName = DbUtils.GetString(reader, "MedicineName"),
                                    ImgUrl = DbUtils.GetString(reader, "ImgUrl"),
                                    Form = DbUtils.GetString(reader, "Form"),
                                    SideEffects = DbUtils.GetString(reader, "SideEffects"),
                                    DrugInfo = DbUtils.GetString(reader, "DrugInfo"),

                                }
                            };
                        }
                    }
                    conn.Close();
                    return comment;
                }
            }
        }

        //------------------------------Backend-AddPatientComment( )#34-----------------------------------

        public void AddPatientComment(Comment comment)
        {
            using(var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[Comment]
                                                    ([PatientId]
                                                    ,[MedicineId]
                                                    ,[PComment]
                                                    ,[PCommentDate]
                                                    ,[DComment]
                                                    ,[DCommentDate])
                                                    OUTPUT INSERTED.Id
                                                VALUES
                                                    (@PatientId
                                                    ,@MedicineId
                                                    ,@PComment
                                                    ,@PCommentDate
                                                    ,@DComment
                                                    ,@DCommentDate)";
                    DbUtils.AddParameter(cmd, "@PatientId", comment.PatientId);
                    DbUtils.AddParameter(cmd, "@MedicineId", comment.MedicineId);
                    DbUtils.AddParameter(cmd, "@PComment", comment.PComment);
                    DbUtils.AddParameter(cmd, "@PCommentDate", comment.PCommentDate);
                    DbUtils.AddParameter(cmd, "@DComment", comment.DComment);
                    DbUtils.AddParameter(cmd, "@DCommentDate", comment.DCommentDate);
                    comment.Id = (int)cmd.ExecuteScalar();//needs output inserted.id

                }
            }
        }
        /*{
  "id": 0,
  "patientId": 11,
  "medicineId": 1,
  "pComment": "I felt nauseous after taking this medicine.",
  "pCommentDate": "2023-05-20T19:56:25.514Z",
  "dComment": "We may need to adjust the dosage or switch to a different medication.",
  "dCommentDate": "2023-05-21T14:50:25.514Z"
}*/
        //------------------------------Backend-AddPatientComment( )#34-----------------------------------
















    }
}
