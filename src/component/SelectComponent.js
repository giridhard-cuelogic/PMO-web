import React, {Component}from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import './common.scss';


class SelectComponent extends Component {
    render(){
        return(
            <FormControl className="selectInput">
                <NativeSelect
                    // value={state.age}
                    // onChange={handleChange('age')}
                    name="age"
                    className="selectInput-inner"
                    // inputProps={{ 'aria-label': 'age' }}
                >
                    <option value="">None</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
            </FormControl>
        )
    }
}  
export default SelectComponent; 
