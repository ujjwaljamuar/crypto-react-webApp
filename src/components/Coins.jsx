import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";

import { server } from "../index.js";
import Loader from "./LoaderFuture.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import CoinCard from "./CoinCard.jsx";

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("inr");
    const btns = new Array(132).fill(1);

    const changePageHandler = (page) => {
        setPage(page);
        setLoading(true);
    };

    const currencySymbol =
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const fetchCoins = async () => {
        try {
            const { data } = await axios.get(
                `${server}/coins/markets?vs_currency=${currency}&page=${page}`
            );
            // console.log(data);

            setCoins(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCoins();
    }, [currency, page]);

    if (error)
        return (
            <Container maxW={"container.xl"}>
                <ErrorComponent
                    message={"Something Wrong with the Coins API"}
                />
            </Container>
        );
    return (
        <Container maxW={"container.xl"}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                        <HStack>
                            <Radio value="inr">₹ INR</Radio>
                            <Radio value="usd">$ USD</Radio>
                            <Radio value="eur">€ EUR</Radio>
                        </HStack>
                    </RadioGroup>
                    <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
                        {coins.map((i) => (
                            <CoinCard
                                id={i.id}
                                key={i.id}
                                name={i.name}
                                price={i.current_price}
                                img={i.image}
                                symbol={i.symbol}
                                currencySymbol={currencySymbol}
                            />
                        ))}
                    </HStack>

                    <HStack w={"full"} overflowX={"auto"} p={"8"}>
                        {btns.map((item, index) => (
                            <Button
                                key={index}
                                bgColor={"blackAlpha.900"}
                                color={"white"}
                                onClick={() => changePageHandler(index + 1)}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </HStack>
                </>
            )}
        </Container>
    );
};

export default Coins;
