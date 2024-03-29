import React, { useCallback, useEffect, useState } from "react";
import TestAxios from "../../apis/TestAxios";
import { useNavigate } from "react-router-dom";
import{jwtDecode} from 'jwt-decode'
import {Form, Button, Col, Row, Table, Breadcrumb } from "react-bootstrap";

const Izvodjaci=()=>{

    const token=window.localStorage.getItem("jwt")
    const decoded=token?jwtDecode(token):null
    const isAdmin=decoded?.role?.authority==="ROLE_ADMIN"
    const isKorisnik=decoded?.role?.authority==="ROLE_KORISNIK"

    const [izvodjaci,setIzvodjaci]=useState([])
    const [noviIzvodjac,setNoviIzvodjac]=useState({
        naziv:"",
        drzavaPorekla:"",
        zanr:"",
        brojClanova:-1
    })

    const [searchParams,setSearchParams]=useState([])



    const getIzvodjaci=useCallback(()=>{
        TestAxios.get("/izvodjaci")
            .then(res=>{
                console.log(res)
                setIzvodjaci(res.data)
                
            })
            .catch(()=>{
                alert("Neuspesno dobavljanje !")
            })
    },[])


    useEffect(()=>{
        getIzvodjaci()
    },[])


    const renderIzvodjaci=()=>{
        return izvodjaci.map((izvodjac)=>{
            return(
                <tr key={izvodjac.id} onClick={()=>{alert(izvodjac.brojClanova)}}>
                    <td>{izvodjac.ime}</td>
                    <td>{izvodjac.zanr}</td>
                    <td>{izvodjac.drzavaPorekla}</td>
                    <td>{izvodjac.brojClanova}</td>
                </tr>

                  
            )      
        })
    }

    const inputValueChanged=(e)=>{
        const {name,value}=e.target  
        setNoviIzvodjac({...noviIzvodjac,[name]:value})
    }


    const dodajIzvodjaca=()=>{
        TestAxios.post("/izvodjaci",{
            ime:noviIzvodjac.naziv,
            drzavaPorekla:noviIzvodjac.drzavaPorekla,
            zanr:noviIzvodjac.zanr,
            brojClanova:noviIzvodjac.brojClanova


        })
            .then((res)=>{
                console.log(res.data)
                window.location.reload()
                
            })
            .catch((error)=>{
                alert("Neuspesno dodavanje !")
            })
        
    }



    return(
        <Row>
            <Row> <h1>Izvodjaci </h1> </Row> 



           {isAdmin &&
            <Row>
                <Col > 

               
                    <Form>

                        <Form.Group>
                            <br/>
                            <Form.Label>Naziv</Form.Label>
                            <Form.Control id="naziv" name="naziv" onChange={inputValueChanged}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Drzava porekla</Form.Label>
                            <Form.Control id="drzavaPorekla" name="drzavaPorekla"onChange={inputValueChanged} ></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Zanr</Form.Label>
                            <Form.Control id="zanr"  name="zanr" onChange={inputValueChanged}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Broj clanova</Form.Label>
                            <Form.Control id="brojClanova" type="number" name="brojClanova" onChange={inputValueChanged}></Form.Control>
                        </Form.Group>


                        <br/>
                        <Button disabled={noviIzvodjac.naziv==="" || noviIzvodjac.drzavaPorekla==="" || noviIzvodjac.zanr==="" || noviIzvodjac.brojClanova===-1}
                             onClick={()=>dodajIzvodjaca()}>Kreiraj</Button>
                        <br/>
                        <br></br>
                    </Form>

                </Col>
                </Row>}





            <Row> 
                <Col>
                    <Table className="table-striped table-bordered table-hover">

                        <thead className="table-dark">
                            <tr>
                                <th> Naziv  </th>
                                <th> Zanr </th>
                                <th> Drzava porekla </th>
                                <th> Broj clanova </th>
                              
                            </tr>
                        </thead>

                        <tbody>
                            {renderIzvodjaci()}
                        </tbody>
                    </Table>

                </Col>
                </Row>

        </Row>
    )
}

export default Izvodjaci