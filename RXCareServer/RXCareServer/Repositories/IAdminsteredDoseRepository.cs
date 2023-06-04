using RXCareServer.Models;

namespace RXCareServer.Repositories
{
    public interface IAdminsteredDoseRepository
    {
        void AddAdminsteredDose(AdminsteredDose adminsteredDose);
        void DeleteAdminsteredDose(int Id);
        void EditAdminsteredDose(AdminsteredDose adminsteredDose);
        List<AdminsteredDose> GetAdminsteredDoses(int PrescriptionId);
    }
}