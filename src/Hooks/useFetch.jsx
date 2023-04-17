import React, { useEffect, useState } from 'react';
import { fetcher,UrlApi } from "../config";
import useSWR from "swr";

export const useFetch = (type,numPage)  => {
  const {getApi} = UrlApi
  const {data,isLoading,error} = useSWR(getApi(type,numPage),fetcher)
  const [dataFetch,setDataFetch] = useState()
  useEffect(()=>{
        data && setDataFetch(()=> data.results)
    },[data])

    return {dataFetch,isLoading,error};
}
