import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HStack p={"4"} bgColor={"blackAlpha.900"} shadow={"base"}>
            <Button variant={"unstyled"} color={"white"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/coins"}>Coins</Link>
                <Link to={"/exchange"}>Exchange</Link>
            </Button>
        </HStack>
    );
};

export default Header;
