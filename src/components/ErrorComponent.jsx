import React from "react";

import "../styles/ErrorComponent.css";
import { Text } from "@chakra-ui/react";

const ErrorComponent = () => {
    return (
        <div className="error">
            {/* <script src="https://cdn.lordicon.com/bhenfmcm.js"></script> */}
            <lord-icon
                src="https://cdn.lordicon.com/vyukcgvf.json"
                trigger="loop"
                delay="2000"
                colors="outline:#121331,primary:#ffc738,secondary:#92140c"
                stroke="100"
                style={{ height: "50dvh", width: "50dvw", marginTop: "8rem" }}
            ></lord-icon>

            <Text color={"red.400"} fontWeight={"800"}>
                Something Wrong with the Exchange API
            </Text>
        </div>
    );
};

export default ErrorComponent;
