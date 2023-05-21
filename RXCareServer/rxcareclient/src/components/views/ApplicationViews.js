import { DoctorViews } from "./AdminViews";
import { PatientViews } from "./UserViews";

export const ApplicationViews = () => {

  const appUser = localStorage.getItem("app_user");
  const appUserObject = JSON.parse(appUser);

  if (appUserObject.isDoctor) {
    return <DoctorViews />;
  } else {
    return <PatientViews />;
  }
};