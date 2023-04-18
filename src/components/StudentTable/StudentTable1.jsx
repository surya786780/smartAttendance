import React, { useState,useEffect } from 'react'

import axios from "axios";

import MainComp from "../MainComp/MainComp"
function StudentTable1() {

    const [dataSource, setDataSource] = useState([]);
//api request
    const getData = async () => {
        console.log("hitt");
        try {
        const url = `${process.env.REACT_APP_SERVER_KEY}/studentsData`;
        const userData = await axios.get(url);
        setDataSource(userData.data);
        } catch (e) {
        console.error(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

  //api request

  return (
   <>
     <MainComp />
     <div className="inner-comp p-5">
        <h2 className='d-flex justify-content-center bg-warning '>Student's Details</h2>

        {/* table */}
        <table class="table table-warning mt-4">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Register Number</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email ID</th>
                <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataSource.map((e)=>{
                        return (
                            <tr>
                            <th scope="row">{e.id}</th>
                            <td>{e.RegisterNumber}</td>
                            <td>{e.name}</td>
                            <td>{e.phoneNumber}</td>
                            <td>{e.emailID}</td>
                            <td>{e.address.doorno},&nbsp;{e.address.street},<br/>{e.address.district},<br />{e.address.zip}.</td>
                            </tr>
                            )
                    })
                }
                
        </tbody>
        </table>
     </div>
   </>
  )
}

export default StudentTable1