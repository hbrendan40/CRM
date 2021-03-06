import React, {Component} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Form extends Component {
    constructor(props) {
      super(props);

   

      this.state = {
         
      
            customerID: props.match.params.id,
            FirstName: '',
            LastName:'',
            Email: '',
            Phone: ''
            

      }
  
      this.handleChange = this.handleChange.bind(this);


      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
      console.log("hey" + this.state.customerID)
    }
  

    //componentDidMount(){
      //  this.getCurrentEmployeeInfo()
    //}
    
    //getCurrentCustomerInfo(){
        //localhost:4000/Customer/search Customer Id = props.Customer.customer_id
       // fetch('http://localhost:4000/products')
       // .then(response => response.json())
        //.then(response => this.setState({customer: response.data}))
        //.catch(err => console.log(err))
        
   // }

   // editCurrentCustomerInfo(){

    //}


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  
    handleSubmit(event) {
      alert(this.state.FirstName + this.state.LastName+ this.state.Email+this.state.Phone);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="container">
        

        <div className="jumbotron">
        <h1>Edit Customer Information</h1>
        <form onSubmit={this.handleSubmit}>
             <Col>
             <Row>
          <label>
            First Name:
            <input type="text" name="FirstName" defaultValue={this.state.customerID} onChange={this.handleChange} />
          </label>
          </Row>
          <Row>
          <label>
            Last Name:
            <input type="text" name="LastName" defaultValue="H" onChange={this.handleChange} />
          </label>
          </Row>

            <Row>
          <label>
            Email:
            <input type="text" name="Email" defaultValue="h" onChange={this.handleChange} />
          </label>
          </Row>

          <Row>
          <label>
            Phone:
            <input type="text" name="Phone" defaultValue="h" onChange={this.handleChange} />
          </label>
          </Row>

          <Row>
          <label>
            Address:
            <input type="text" name="address" defaultValue="123 Maple St" onChange={this.handleChange} />
          </label>
          </Row>

          <Row>
          <label>
            City:
            <input type="text" name="city" defaultValue="San Mateo" onChange={this.handleChange} />
          </label>
          </Row>

          <Row>
          <label>
            Zip Code:
            <input type="text" name="zip" defaultValue="94065" onChange={this.handleChange} />
          </label>
          </Row>

          <input type="submit" value="Submit Change" />
          </Col>
        </form>
        </div>
        </div>
      );
    }
  }
  export default Form;