import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const highlightedCate = "Home" //TODO: Make this update

const Sidebar = () =>(
  <Stack
    direction={'row'}
    sx={{
      overflowY: "auto",
      height: {sx: "auto", md: '95%'},
      flexDirection: {md: 'column'},
    }}
  >
    {categories.map((category) => (
      <button 
        className="category-btn"
        style={{
          background: category.name === highlightedCate && '#FC1503',
          color: 'white'
        }}
        key={category.name}
      >
        <span style={{color: category.name === highlightedCate ? 'white' : 'red',
          marginRight: '15px'}}>
          {category.icon}
        </span>
        <span style={{opacity: category.name === highlightedCate ? '1' : '0'}}>
          {category.name}
        </span>
      </button>
    ))}
  
  </Stack>
)

export default Sidebar