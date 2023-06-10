using ReadersRendezvous.Utils;
using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public class DoctorRepository : BaseRepository, IDoctorRepository
    {
        public DoctorRepository(IConfiguration configuration) : base(configuration) { }
        //----------------GetDoctorPatients( )--------------------//

        //public List<>
        public List<DoctorInformationProfile> GetDoctorsInformationProfileList()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [User].[Id]  
                                            ,[User].Img
                                            ,[User].FirstName
                                            ,[User].LastName
                                            ,[User].Email
                                            ,[DoctorInfo].[Specialty]
                                            ,[DoctorInfo].[Language]
                                            ,[DoctorInfo].[Gender]
                                            ,[DoctorInfo].[About]
                                            ,[DoctorInfo].[Education]
                                            ,[DoctorInfo].[Qualifications]
                                            ,[Clinic].[Address]
                                            ,[Clinic].[Phone]
                                            ,[Clinic].[Facility]
                                            ,[Clinic].[Type] 
                                            ,[Clinic].[Location]
                                        FROM [RXCareDb].[dbo].[User]
                                        INNER JOIN [Doctor] ON [User].[Id]  = [Doctor].[UserId]
                                        INNER JOIN [DoctorInfo] ON [DoctorInfo].[DoctorId]  = [Doctor].[Id]
                                        INNER JOIN [Clinic] ON [Clinic].[Id]  = [Doctor].[ClinicId]";

                    //DbUtils.AddParameter(cmd, "@Doctor", "Doctor");
                    var reader = cmd.ExecuteReader();
                    var doctors = new List<DoctorInformationProfile>();

                    while (reader.Read())
                    {

                        DoctorInformationProfile doctor = new DoctorInformationProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Img = DbUtils.GetString(reader, "Img"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Type = DbUtils.GetString(reader, "Type"),
                            Specialty = DbUtils.GetString(reader, "Specialty"),
                            Language = DbUtils.GetString(reader, "Language"),
                            Gender = DbUtils.GetString(reader, "Gender"),
                            About = DbUtils.GetString(reader, "About"),
                            Education = DbUtils.GetString(reader, "Education"),
                            Qualifications = DbUtils.GetString(reader, "Qualifications"),
                            Address = DbUtils.GetString(reader, "Address"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Facility = DbUtils.GetString(reader, "Facility"),
                            Location = DbUtils.GetString(reader, "Location"),

                        };

                        doctors.Add(doctor);
                    }
                    reader.Close();
                    return doctors;
                }
            }
        }

    }
}
