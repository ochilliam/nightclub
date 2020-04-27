import React, { useState } from "react";
import IdentityModalLogin from "react-netlify-identity-widget";
import Hero from "./Hero";

const Login: React.FC = () => {
    const [isVisible, setDialogVisible] = useState<boolean>(true);
    const toggleDialog = () => setDialogVisible(false);

    return (
        <>
            <IdentityModalLogin
                showDialog={isVisible}
                onCloseDialog={toggleDialog}
            />
            <Hero />
        </>
    );
};

export default Login;
