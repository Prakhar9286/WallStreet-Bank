import React from "react";

export const AdminUserSearchBox = () => {
    const styles = {
        userBox : {
            width: "600px",
            height: "200px",
            borderRadius: "5px",
            backgroundColor: "green"
       }
    }


    return(
        <div className="userBox" style={styles.userBox}></div>
    )
}