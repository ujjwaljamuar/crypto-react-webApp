import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, HStack } from "@chakra-ui/react";

import { server } from "../index.js";
import Loader from "./Loader.jsx";
import ExchangeCard from "./ExchangeCard.jsx";
import ErrorComponent from "./ErrorComponent.jsx";

const Exchange = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchExchange = async () => {
        try {
            const { data } = await axios.get(`${server}/exchanges`);
            // console.log(data);

            setExchanges(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExchange();
    }, []);

    if (error)
        return (
            <Container maxW={"container.xl"}>
                <ErrorComponent />
            </Container>
        );
    return (
        <Container maxW={"container.xl"}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <HStack wrap={"wrap"}>
                        {exchanges.map((i) => (
                            <ExchangeCard
                                key={i.id}
                                name={i.name}
                                img={i.image}
                                url={i.url}
                                rank={i.trust_score_rank}
                            />
                        ))}
                    </HStack>
                </>
            )}
        </Container>
    );
};

export default Exchange;
