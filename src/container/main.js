import React ,{ useState } from 'react';
import axios from '../axios-instance';

import { Container, Form, Jumbotron,Button,ButtonGroup,ToggleButton, InputGroup, FormControl } from 'react-bootstrap';
import Nav from '../component/navbar';

function Main(props) {

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState(''); 
    const [jobTitle, setJobTitle] = useState(''); 
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [marriageStatus, setMarriageStatus] = useState('Unmarried');
   
    const [companyName, setCompanyName] = useState('');
    const [companyType, setCompanyType] = useState('IT Service');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectLink, setProjectLink] = useState('');
    const [workEx, setWorkEx] = useState('');
    
    const radios = [
    { name: 'Married', value: 'Married'},
    { name: 'Unmarried', value: 'Unmarried'},
  ];

  const company = [
    { name: 'IT Service', value: 'IT Service' },
    { name: 'Pharmaceutical', value: 'Pharmaceutical' },
    { name: 'Automobile', value: 'Automobile' },
    { name: 'Production Based', value: 'Production Based' },
  ];

  const submitHandler = () =>{
    
  const empData = {
        name: name,
        email: email,
        age: age,
        city: city,
        state : state,
        jobTitle: jobTitle,
        salary: salary,
        gender: gender,
        marriageStatus: marriageStatus,
        companyType: companyType,
        companySize: companySize,
        workEx: workEx,
        
    }
        
    axios.post('/empData.json',empData)
        .then( res =>{
             console.log(res);
        }).catch(error => {
            console.log(error);
        });
   
  }

    return (
        <div>
            <Nav/>

            <Container >
                <br/><br/>
                <div style={{marginLeft:"10%",marginBottom:"3%"}}>
                    <h2>Employ Data Entry</h2>
                    <hr/>
                </div>                
            
                    <Form >
                    <Jumbotron style={{ width:"80%", padding:"4%", marginLeft:"10%", backgroundColor:"#f0f8ff" }}>                           
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" value={name} onChange={ (event)=> setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={ (event)=> setEmail(event.target.value)}  />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>DOB</Form.Label>
                            <Form.Control type="date" value={dob} onChange={ (event)=> setDOB(event.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" placeholder="Your Job Title" value={jobTitle } onChange={ (event)=> setJobTitle(event.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Salary</Form.Label>
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="100" type="number" value={salary} onChange={ (event)=> setSalary(event.target.value)} />
                            <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Your Age" value={age} onChange={ (event)=> setAge(event.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" value={gender} onChange={ (event)=> setGender(event.target.value)}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Label style={{marginRight:"20px"}}>Marriage Status </Form.Label>
                        <Form.Group >
                        <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                            key={idx}
                            type="radio"
                            variant="outline-success"
                            name="radio"
                            value={radio.value}
                            checked={marriageStatus === radio.value}
                            onChange={(e) => setMarriageStatus(e.currentTarget.value)}
                            >
                            {radio.name}
                            </ToggleButton>
                        ))}
                        </ButtonGroup>
                        </Form.Group>
                        
                        </Jumbotron>
                            <br/>
                            <div style={{marginLeft:"10%",marginBottom:"3%"}}>
                            <h2>Company Details</h2>
                            <hr/>
                            </div>
                        <Jumbotron style={{ width:"80%", padding:"4%", marginLeft:"10%", backgroundColor:"#f0f8ff" }}>                           
                        <Form.Group >
                            <Form.Label>Company Name </Form.Label>
                            <Form.Control type="text" placeholder="Company Name" value={companyName} onChange={ (event)=> setCompanyName(event.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label style={{marginRight:"20px"}} >Company Type </Form.Label>
                            <ButtonGroup toggle>
                        {company.map((radio, idx) => (
                            <ToggleButton
                            key={idx}
                            type="radio"
                            variant="outline-dark"
                            name="radio"
                            value={radio.value}
                            checked={companyType === radio.value}
                            onChange={(e) => setCompanyType(
                                e.currentTarget.value)}
                            >
                            {radio.name}
                            </ToggleButton>
                        ))}
                        </ButtonGroup>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Company City </Form.Label>
                            <Form.Control type="text" placeholder="Company City" value={city} onChange={ (event)=> setCity(event.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Company State" value={state} onChange={ (event)=> setState(event.target.value)}  />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="number" placeholder=" Zip code" value={zipCode} onChange={ (event)=> setZipCode(event.target.value)} />
                        </Form.Group>
                        
                        <Form.Group >
                            <Form.Label>Company Size</Form.Label>
                            <Form.Control as="select" value={companySize} onChange={ (event)=> setCompanySize(event.target.value)}>
                            <option> 11-50 </option>
                            <option> 50-200 </option>
                            <option> 200-1000 </option>
                            <option> 1000-10000 </option>
                            <option> 10000 + </option>
                            </Form.Control>
                        </Form.Group>
                        </Jumbotron>
                        <br/>
                        <div style={{marginLeft:"10%",marginBottom:"3%"}}>
                            <h2>Enter Project Details</h2>
                            <hr/>
                        </div>
                        <Jumbotron style={{ width:"80%", padding:"4%", marginLeft:"10%", backgroundColor:"#f0f8ff" }}>                            
                        <Form.Group >
                            <Form.Label>Project Title </Form.Label>
                            <Form.Control type="text" placeholder="Project title" value={projectTitle } onChange={ (event)=> setProjectTitle(event.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Describe Projects in short</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Project description" value={projectDescription} onChange={ (event)=> setProjectDescription(event.target.value)} />
                        </Form.Group>
                        
                        <Form.Group >
                            <Form.Label>Project link </Form.Label>
                            <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                https://example.com/users/
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" value={projectLink} onChange={(event)=> setProjectLink(event.target.value)} />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Work Experience </Form.Label>
                            <Form.Control type="range" value={workEx} onChange={(event)=> setWorkEx(event.target.value)} />
                        </Form.Group>
                    
                        <Form.Group >
                        <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="outline-primary" onClick={submitHandler}>
                            Submit
                        </Button>
                        </Jumbotron>
                    </Form>                
            </Container>
            
        </div>
    );
}

export default Main;