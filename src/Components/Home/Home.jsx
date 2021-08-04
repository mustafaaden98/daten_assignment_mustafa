import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    table: {
        width: '100%'
    },
    employeeSearch: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textField:{
        marginRight:'20px'
    },
    container:{
        padding:'10px'
    }
});

const data = [
    { "id": "1", "firstName": "Mustafa", "lastName": "Adenwala", "role": "CEO", "contact": "8999506062" },
    { "id": "2", "firstName": "Nafisa", "lastName": "Adenwala", "role": "HR", "contact": "7000509596" },
    { "id": "3", "firstName": "Abdeali", "lastName": "Adenwala", "role": "Senior Software Engineer", "contact": "8999506062" },
    { "id": "4", "firstName": "Rahul", "lastName": "Gandhi", "role": "Senior Software Engineer", "contact": "1111111111" },
    { "id": "5", "firstName": "Salman", "lastName": "Khan", "role": "Senior Software Engineer", "contact": "222222222" },
    { "id": "6", "firstName": "Ranbeer", "lastName": "Kapoor", "role": "Software Engineer", "contact": "333333333" },
    { "id": "7", "firstName": "Ajay", "lastName": "Devgan", "role": "Software Engineer", "contact": "44444444" },
    { "id": "8", "firstName": "Taha", "lastName": "Saify", "role": "Software Engineer", "contact": "55555555" },
    { "id": "9", "firstName": "Akshay", "lastName": "Kumar", "role": "Software Engineer", "contact": "66666666" },
    { "id": "10", "firstName": "Farhan", "lastName": "Akhtar", "role": "Intern", "contact": "777777777" }
]

const Home = () => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [employeeData, setFilteredEmployee] = useState(data);
    const _onChangeSearch = (e) => {
        const {value} = e.target;
        setSearch(value);
        let filteredEmployee = [];
        filteredEmployee = data.filter(employee => employee.firstName.toLowerCase().includes(value.toLowerCase()));
        setFilteredEmployee(filteredEmployee)
    }

    return (
        <div className = {classes.container}>
            <div>
                <p>
                    MustafaAdenwala is an Indian e-commerce company, headquartered in Bangalore, Karnataka, India, and incorporated in Singapore as a private limited company.[6] The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.

                    The service competes primarily with Amazon's Indian subsidiary and domestic rival Snapdeal.[7][8] As of March 2017, MustafaAdenwala held a 39.5% market share of India's e-commerce industry.[9] MustafaAdenwala has a dominant position in the apparel segment, bolstered by its acquisition of Myntra, and was described as being "neck and neck" with Amazon in the sale of electronics and mobile phones.[10] MustafaAdenwala also owns PhonePe, a mobile payments service based on the Unified Payments Interface.
                </p>
            </div>
            <div className={classes.employeeSearch}>
                <h1>Employee Details</h1>
                <div className = {classes.textField}>
                    <TextField id="standard-basic" label="Search" onChange = {_onChangeSearch} value = {search} />
                </div>
            </div>
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Contact Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employeeData.map((elm, index) => {
                                return (
                                    <TableRow key={elm.id}>
                                        <TableCell>{elm.firstName}</TableCell>
                                        <TableCell>{elm.lastName}</TableCell>
                                        <TableCell>{elm.role}</TableCell>
                                        <TableCell>{elm.contact}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Home