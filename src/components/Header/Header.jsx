import React from 'react'
import "./header.css"
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { createTheme, ThemeProvider } from '@material-ui/core';
import categories from '../../Data/Categories';

const Header = ({ categoriy, setCategory, word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#fff'
            }
        },
    });
    const handleChange=(e)=>{
     setCategory(e.target.value)
     setWord("")
    }
    return (
        <div className='header'>
            <span className='title'>{word?word:"My Dictionary"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                    className="search" 
                    id="standard-basic" 
                    label="Search Word" 
                    value={word}
                    onChange={(e)=>setWord(e.target.value)}
                     />
                    <TextField
                    className="select"
                        select
                        label="Language"
                        value={categoriy}
                        onChange={(e) => handleChange(e)}
                        variant="standard"
                    >
                        {categories.map((item) => (
                            <MenuItem key={item.label} value={item.label}>{item.value}</MenuItem>
                        ))}


                    </TextField>
                </ThemeProvider>

            </div>
        </div>
    )
}

export default Header
