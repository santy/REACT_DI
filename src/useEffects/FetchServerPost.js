import { useState, useEffect } from 'react';

import React from 'react'

const url = "http://localhost:5000/users";

const data = {
    name: "ErundinoAwait3",
    username: "Runi",
    email: "jonhy@yahoo.com",
    phone: "9893548125",
    companiesId: "1",
    title: "titulo 1"
  };



async function fetchPost(url){
  await fetch(url, {
  method: "POST", 
  body: JSON.stringify(data), //convierte JS en JSON
  headers: {
    "Content-Type": "application/json",
  },
})}



function FetchServerPost() {

    useEffect(function(){
        fetchPost(url)
        },[]);


  return (
    <div>FetchServerPost</div>
  )
}

export default FetchServerPost