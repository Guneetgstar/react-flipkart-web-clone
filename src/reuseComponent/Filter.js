import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  const marks = [
    {
      value: 0,
    },
    {
      value: 20,
    },
    {
      value: 37,
    },
    {
      value: 100,
    },
  ];
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };

  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }

  const AirbnbSlider = withStyles({
    root: {
      color: '#3a8589',
      height: 3,
      padding: '13px 0',
    },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);
  

const Filter = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return(
        <>
            <div>
                <div className="filte_div">
                    <p>PRICE</p>
                    <AirbnbSlider
                        ThumbComponent={AirbnbThumbComponent}
                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                        defaultValue={[20, 40]}
                    />   
                </div> 
                <div className="filte_div">
                    <p>BRAND</p>
                    <FormControl component="fieldset" >
                        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                        <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    color="primary" 
                                    checked={checked} 
                                    onChange={handleChange} 
                                    name="gilad"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }} 
                                />
                            }
                            label="TATA"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    color="primary" 
                                    checked={checked} 
                                    onChange={handleChange} 
                                    name="gilad"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }} 
                                />
                            }
                            label="TATA"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    color="primary" 
                                    checked={checked} 
                                    onChange={handleChange} 
                                    name="gilad"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }} 
                                />
                            }
                            label="TATA"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    color="primary" 
                                    checked={checked} 
                                    onChange={handleChange} 
                                    name="gilad"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }} 
                                />
                            }
                            label="TATA"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    color="primary" 
                                    checked={checked} 
                                    onChange={handleChange} 
                                    name="gilad"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }} 
                                />
                            }
                            label="TATA"
                        />
                        </FormGroup>
                    </FormControl>    
                    {/* <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        label="TATA"
                    /> */}
                </div>
            </div>       
        </>
    )
}

export default Filter;