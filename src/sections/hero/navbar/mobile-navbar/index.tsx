import useScroll from "@/hooks";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

interface MobileNavbarPorps {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => void;
}
const MobileNavbar = ({ isOpen, toggleDrawer }: MobileNavbarPorps) => {
  const {
    scrollToAboutSec,
    scrollToExperienceSec,
    scrollToSkillsSec,
    scrollToWorkSec,
    scrollToEduSec,
  } = useScroll();
  return (
    <Drawer open={isOpen} anchor="right" onClose={() => toggleDrawer(false)}>
      <Box onClick={() => toggleDrawer(false)}>
        <List sx={{ width: "260px", p: "0" }}>
          <ListItemButton
            sx={{ p: "0", borderBottom: "1px solid #00000021" }}
            onClick={scrollToAboutSec}
          >
            <ListItem>
              <ListItemText primary="ABOUT ME" />
            </ListItem>
          </ListItemButton>
          <ListItemButton
            sx={{ p: "0", borderBottom: "1px solid #00000021" }}
            onClick={scrollToExperienceSec}
          >
            <ListItem>
              <ListItemText primary="EXPERINCE" />
            </ListItem>
          </ListItemButton>
          <ListItemButton
            sx={{ p: "0", borderBottom: "1px solid #00000021" }}
            onClick={scrollToSkillsSec}
          >
            <ListItem>
              <ListItemText primary="SKILLS" />
            </ListItem>
          </ListItemButton>
          <ListItemButton
            sx={{ p: "0", borderBottom: "1px solid #00000021" }}
            onClick={scrollToWorkSec}
          >
            <ListItem>
              <ListItemText primary="WORK" />
            </ListItem>
          </ListItemButton>
          <ListItemButton
            sx={{ p: "0", borderBottom: "1px solid #00000021" }}
            onClick={scrollToEduSec}
          >
            <ListItem>
              <ListItemText primary="EDUCATION" />
            </ListItem>
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileNavbar;
