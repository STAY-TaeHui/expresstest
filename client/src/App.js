import React, { Component } from 'react';
import Customer from './components/Customer'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import { withStyles} from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})

class App extends Component{
  
  state = {
    customers:""
  }

  componentDidMount(){
    this.callApi()
    .then(res=> this.setState({customers:res.express}))
    .catch(err=> console.log(err))

  }

  callApi = async()=>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  // state= {
  //   customers:""
  // }

  // componentDidMount(){
  //   this.callApi()
  //   .then(res=>this.setState({customers:res}))
  //   .catch(err=> console.log(err));

  // }

  // callApi=async()=>{
  //   const response = await fetch('/api/customers');
  //   const body =await response.json();
  //   return body;
  // }

  render(){
    const { classes} = this.props;
    return (
      <div>
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
          </TableRow>
          </TableHead>
          
          <TableBody>
        {
          this.state.customers ? this.state.customers.map(c=>{
            return ( 
              <Customer
                key={c.id}
                id={c.id}
                name={c.name}
                birthday={c.birthday}
              />
              )
          }) : ""
        } 
          </TableBody>
          </Table>
      </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(App);
 