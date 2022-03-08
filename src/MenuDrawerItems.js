import ContactsIcon from "@mui/icons-material/Contacts";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import MapIcon from "@mui/icons-material/Map";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

export default function MenuDrawerItems() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Map" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FindInPageIcon />
          </ListItemIcon>
          <ListItemText primary="Forms" />
        </ListItem>
      </List>
    </div>
  );
}
