import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Logo from "./Logo/Logo";
import { Link, Outlet } from "remix";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container sx={{ padding: 2, minHeight: "100vh" }} direction="column">
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs>
          <Link to="/">
            <Logo />
          </Link>
        </Grid>
        <Grid container item xs={8} justifyContent="flex-end" spacing={4}>
          <Grid item textAlign="end">
            <Link to="/about">About</Link>
          </Grid>
          <Grid item textAlign="end">
            <Link to="/contact">Contact</Link>
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
      <footer>
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-end"
          className="italic"
          alignContent="end"
          spacing={4}
        >
          <Grid item textAlign="end">
            <a
              target="_blank"
              href="https://www.instagram.com/driem.works"
              className="mb-4"
            >
              Instagram
            </a>
          </Grid>
          <Grid item textAlign="end">
            <Link to="/imprint">Impressum</Link>
          </Grid>
        </Grid>
      </footer>
    </Grid>
  );
}
