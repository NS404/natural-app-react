import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BasicTable from '../components/BasicTable';

function Tabular() {

  const [colHeaders, setColHeaders] = useState([]);
	const [rows, setRows] = useState([]);
  let params = useParams();
    

    const fetchData = async (name) => {
        const data = await fetch(`http://localhost:8080/api/views/${name}`);
        let jsonData = await data.json();
        setColHeaders(jsonData.attributeTitles);
        setRows(jsonData.attributeValues);
    }


    useEffect(() => {
        fetchData(params.name);
    },[params.name]);

  

  return (
    <BasicTable colHeaders={colHeaders} rows={rows}/>
  );
}

export default Tabular