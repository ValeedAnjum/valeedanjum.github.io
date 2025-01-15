import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Stack, Typography } from "@mui/material";

export default function Navbar() {
  const goToAbout = () => {
    const aboutSection = document.getElementById("about-sec");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", p: 2, borderRadius: "12px" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              cursor: "pointer",
              fontSize: "2rem",
              userSelect: "none",
            }}
          >
            Valeed.
          </Typography>
          <Stack
            direction="row"
            sx={{
              flexGrow: 1,
              pl: 2,
            }}
          >
            <Button variant="main" disableRipple onClick={goToAbout}>
              About Me
            </Button>
            <Button variant="main" disableRipple>
              Skills
            </Button>
            <Button variant="main" disableRipple>
              Experince
            </Button>
            <Button variant="main" disableRipple>
              Work
            </Button>
          </Stack>
          <Stack direction="row">
            <Button variant="accent">Contact Me</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
