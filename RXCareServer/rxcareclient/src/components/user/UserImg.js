import React, { useState, useEffect } from "react";

export const UserImg = () => {
    const [UserData, setUserData] = useState([]);
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject);
    /* ------------GetUser--------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/User/GetProfileById/${appUserObject.id}`
            );
            const Data = await response.json();
            setUserData(Data);
            console.log(Data);
        };
        fetchData();
    }, []);

    return (
        <>
      {/*       <div>
                {UserData.map((user) => {
                    return (
                        <>
                            <div class="d-flex justify-content-center h-100">
                                <div class="image_outer_container">
                                    <div class="green_icon"></div>
                                    <div class="image_inner_container">
                                        <img src={user.Img} />
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div> */}
        </>
    );
};
