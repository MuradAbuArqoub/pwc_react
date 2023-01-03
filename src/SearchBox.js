import React, {useState} from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default function SearchBox() {
    const [SearchText, setSearchText] = useState("");
    console.log(SearchText);
  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex"}}>
            <div style={{ flex: 1 }}>
          <OutlinedInput style={{ width: "100%"}} value = {SearchText} onChange = {() => {setSearchText(Event.target.value)}}/>
        </div>

        <div style={{ display: "flex", alignItems: "center", padding: "0px, 20px"}}>
        <Button variant="contained" color="primary" onClick={() => {}}>
        Search
      </Button>
      </div>
      </div>
      <div>
      <List component="nav" aria-label="main mailbox folders">
        {
            [1,2,3,4,5].map((item) => {
                return(
                    <div key = {item}>
                        <ListItem button>
                            <ListItemIcon>
                                <img src="/placeholder.png" alt="placeholder" style={{ width: 38, height: 38}}/>
                                    </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                        <Divider/>
                    </div>
                );
            })
        }
        
      </List>
      </div>
    </div>
  );
}
