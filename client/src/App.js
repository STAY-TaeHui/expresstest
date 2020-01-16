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




const customers =
  [
    {
      'id':1,
      'name':'홍길동',
      'birthday':'123125'
},
{
  'id':2,
  'name':'홍상삼',
  'birthday':'343453'
},
{
  'id':3,
  'name':'홍준표',
  'birthday':'564731'
},

  ]


class App extends Component{
  
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
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
          </TableRow>
          <TableBody>
        {customers.map(c=>{
            return ( 
              <Customer
                key={c.id}
                id={c.id}
                name={c.name}
                birthday={c.birthday}
              />
              )
          }
          )} 
          </TableBody>
          </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
 