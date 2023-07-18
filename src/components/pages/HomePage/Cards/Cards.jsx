/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [houseData, setHouseData] = useState([]);
    useEffect(() => {
        axios.get('/house.json').then(({ data }) => {
            setHouseData(data.properties);
        });
    }, []);

    return <div className="flex flex-col justify-center items-center p-20 max-w-6xl w-full">{houseData && houseData.map((data, idx) => <Card key={idx} data={data} />)}</div>;
};

export default Cards;
