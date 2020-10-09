import React, { Fragment } from "react";
import "./task.styles.scss";
import { Row, Col, Card, CardBody, Input, Label, Button } from "reactstrap";
import swal from "sweetalert";


class Task extends React.Component{
    constructor(props){
        super(props);
        this.state={
            stringData:"",
            testedData:[],
        }        
    }

    handleCheck = ()=>{
        const{stringData, index} = this.state;
        if(stringData === ""){
            swal("info", "Please Insert Your Text !!","info")
        }else{
            
            const text1 = stringData.split("");
            let index = text1.length-1;
            let check = 0;
            let originText="";
            let reversText="";
            for(let i=0; i<text1.length; i++){
                if(text1[i]===text1[index]){
                    check = check;
                }else{
                    check=1;
                }
                originText+=" "+text1[i];
                reversText+=" "+text1[index];
                index--;
            }
            this.state.testedData.push({originText:originText, reversText:reversText, status:check===0?"Polindrom":"Not Polindrom"})
            this.setState({
                testedData:this.state.testedData
            })
        }
    }
    handleFieldChange = (e)=>{  
        this.setState({
            stringData:e.target.value
        })
    }

    render(){
        console.log(this.state.stringData);
        return(
            <Fragment>
                <Card className="main-card">
                    <CardBody className="card-task" md>
                        <Row>
                            <Col sm="12">
                                <Row>
                                    <Col className="title-task">
                                        Palindrome Test
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="10">
                                        <input type="text" className="form-control" placeholder="Input Your Test" onChange={(e)=>this.handleFieldChange(e)}/>
                                    </Col>
                                    <Col>
                                        <Button
                                            type="button"
                                            onClick={()=>this.handleCheck()}
                                        >Check Your Text</Button>
                                    </Col>
                                </Row>
                                <Row>
                                <Label className="list-text">Your List Testing </Label>
                               </Row>
                                <Row>          
                                    <Col xs="12">
                                        {
                                        this.state.testedData.map((data,index)=>
                                        <Row>
                                            <label htmlFor="">{data.status}</label>
                                            <br/>
                                            <Col xs="12">Origin Text   : {data.originText}</Col>
                                            <Col xs="12">Reverse Teext : {data.reversText}</Col>
                                <hr className="line"/>

                                        </Row>

                                        )   
                                        }
                                    </Col>

                                </Row>

                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}


export default Task;