import { useState, useEffect } from 'react';

import React from 'react'

const url = "http://localhost:5000/users";

const data = {
    name: "Erundino",
    username: "Runi",
    email: "jonhy@yahoo.com",
    phone: "9893548125",
    companiesId: "1",
    title: "titulo 1"
  };

const request = new Request(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8'
  })
});



function FetchServerPost() {
    useEffect(function(){
        fetch(request)
        },[]);

  return (
    <div>FetchServerPost</div>
  )
}

export default FetchServerPost