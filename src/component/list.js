import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatarimg from '../asets/avatar2.png';

;

function createData(img, eid, fname, lname, activeMission, lastactiveMission, Title, department, globalscore) {
  return { img, eid, fname, lname, activeMission, lastactiveMission, Title, department, globalscore};
}

const rows = [
  createData( `${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`, 'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData( `${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`, 'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
  createData(`${Avatarimg}`,'Emp1234', 'Emir Abedelkader', 'Jordan', 12, '12 Mar 20020', 'HR', 'Hr Onboarding', 4.8/5),
];

export default function AcccessibleTable() {
  

  return (
    <TableContainer component={Paper}>
      <Table className="usertable" aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>EMP ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Active Missions</TableCell>
            <TableCell align="right">Last Active Date</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Global Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                  <div className="eidwrapper">
                    <span className="empImg"><img src={row.img}></img> </span> 
                    <span>{row.eid}</span>
                </div>    
              </TableCell>             
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.activeMission}</TableCell>
              <TableCell align="right">{row.lastactiveMission}</TableCell>
              <TableCell align="right">{row.Title}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.globalscore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
