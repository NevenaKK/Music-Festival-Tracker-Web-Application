import React, { useCallback, useEffect, useState } from "react";
import TestAxios from "../../apis/TestAxios";
import { useNavigate } from "react-router-dom";
import{jwtDecode} from 'jwt-decode'
import {Form, Button, Col, Row, Table, Breadcrumb, Dropdown } from "react-bootstrap";

const Nastupi=()=>{


    const token=window.localStorage.getItem("jwt")
    const decoded=token?jwtDecode(token):null
    const isAdmin=decoded?.role?.authority==="ROLE_ADMIN"
    const isKorisnik=decoded?.role?.authority==="ROLE_KORISNIK"


    const [pageNo,setPageNo]=useState(0);
    const [pageMax,setPageMax]=useState(0);

    const [nastupi,setNastupi]=useState([]);
    const [izvodjaci,setIzvodjaci]=useState([]);
    const [festivali,setFestivali]=useState([])
    const [noviNastup,setNoviNastup]=useState({
        izvodjacId:null,
        festivalId:null
    })

    const [searchParams,setSearchParams]=useState([])


    const getNastupi=useCallback(()=>{
        TestAxios.get(`/nastupi?pageNo=${pageNo}`,{
            params:{
                izvodjacId:searchParams.izvodjacId,
                festivalId:searchParams.festivalId             
            }
        })
            .then(res=>{
                console.log(res)
                setNastupi(res.data)
                setPageMax(res.headers['total-pages'])
                
            })
            .catch(()=>{
                alert("Neuspesno dobavljanje !")
            })
    },[pageNo,searchParams])

    useEffect(()=>{
        getNastupi()
        getFestivali()
        getIzvodjaci()
    },[pageNo,searchParams])

    const renderNastupi=()=>{
        return nastupi.map((nastup)=>{
            return(
                <tr key={nastup.id}>
                    <td>{nastup.izvodjacIme}</td>
                    <td>{nastup.festivalNaziv}</td>
                    <td> {isAdmin && <Button  variant="danger" onClick={()=>deleteNastup(nastup.id)}> Obrisi </Button>}</td>
                </tr>

                  
            )      
        })
    }

    const deleteNastup=(nastupId)=>{
        TestAxios.delete("/nastupi/"+nastupId)
            .then((res)=>{
                console.log(res)
                window.location.reload()
            })
            .catch(()=>{
                alert("Neuspesno brisanje !")
            })
    }

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

    const getFestivali=useCallback(()=>{
        TestAxios.get("/festivali")
            .then(res=>{
                console.log(res)
                setFestivali(res.data)
                
            })
            .catch(()=>{
                alert("Neuspesno dobavljanje !")
            })
    },[])

    const inputValueChanged=(e)=>{
        const {name,value}=e.target  
        setNoviNastup({...noviNastup,[name]:value})
        console.log({[e.target.name]: e.target.value})
    }


    const dodajNastup=()=>{
        TestAxios.post("/nastupi",{
            festivalId:noviNastup.festivalId,
            izvodjacId:noviNastup.izvodjacId

        })
            .then((res)=>{
                console.log(res.data)
                window.location.reload()
                
            })
            .catch(()=>{
                alert("Neuspesno dodavanje !")
            })
        
    }

    const handleChange=(e)=>{
        const{name,value}=e.target 
        setSearchParams({...searchParams,[name]:value})
         console.log({[e.target.name]: e.target.value}) 
    }



    return(
        <Row>
            <Row> <h1> Nastupi</h1></Row>


           { (isAdmin || isKorisnik) && <Row>
                <Col > 
            
                    <Form>

                        <Form.Group>
                        <Form.Label>Izvodjac</Form.Label>
                        <Form.Control id="izvodjac" as='select' name="izvodjacId" onChange={inputValueChanged}>
                            <option></option>
                            {
                                izvodjaci.map((izvodjac)=>{
                                    return <option key={izvodjac.id} value={izvodjac.id} >{izvodjac.ime}</option>
                                })
                            }
                        </Form.Control>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Festival</Form.Label>
                        <Form.Control id="festival" as='select' name="festivalId"onChange={inputValueChanged} >
                            <option> </option>
                            {
                                festivali.map((festival)=>{
                                    return <option key={festival.id} value={festival.id} >{festival.naziv}</option>
                                })
                            }
                        </Form.Control>
                        </Form.Group>

                        <br/>
                        <Button onClick={()=>dodajNastup()}>Kreiraj</Button>
                        <br/>
                        <br></br>

                    </Form>

                </Col>
                </Row>}
                        

                <Row>
                <Row><h3> Pretraga</h3></Row> 
                    <Col>
                    
                    <Form>
                    

                            <Form.Group>
                                <Form.Label> Izvodjaci</Form.Label>
                                <Form.Control as='select' name="izvodjacId" onChange={handleChange}>
                                    <option ></option>
                                    {
                                        izvodjaci.map((izvodjac)=>{
                                            return <option key={izvodjac.id} value={izvodjac.id}> {izvodjac.ime} </option>
                                        })
                                    }
                                </Form.Control>                                                         
                            </Form.Group>     


                            <br></br>
                    </Form>
                    </Col>

                    <Col>
                    <Form>

                            <Form.Group>
                                <Form.Label> Festival</Form.Label>
                                <Form.Control as='select' name="festivalId" onChange={handleChange}>
                                    <option ></option>
                                    {
                                        festivali.map((festival)=>{
                                            return <option key={festival.id} value={festival.id}> {festival.naziv} </option>
                                        })
                                    }
                                </Form.Control>                                                         
                            </Form.Group>
                            <br></br>
                    </Form>
                    </Col>

                </Row>



            <Row> 
                <Col>
                    <Table className="table-striped table-bordered table-hover">

                        <thead className="table-dark">
                            <tr>
                                <th> Izvodjac  </th>
                                <th> Festival </th>
                                <th>  </th>
                                
                              
                            </tr>
                        </thead>

                        <tbody>
                          {renderNastupi()}
                        </tbody>
                    </Table>

                </Col>
                </Row>

                <Row>
                <Col>
               
                    <div >
                        <span >
                            <Button disabled={pageNo<=0} onClick={(e)=>setPageNo(pageNo-1)}> Prethodna</Button>
                            </span>
                        <span style={{ marginLeft: '5px'}}>
                            <Button disabled={pageNo>=pageMax-1} onClick={(e)=>setPageNo(pageNo+1)}> Sledeca </Button>
                        </span>
                    </div>

                </Col>
                </Row>
        
        </Row>
    )
}

export default Nastupi;