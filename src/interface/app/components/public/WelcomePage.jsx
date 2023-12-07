import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import confuseImg from "../../img/confuse.png";
import houseImg from "../../img/house.png";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function WelcomePage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Button>
              <Button variant="outlined">
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Register
                </Link>
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "100%",
                  }}
                  image={confuseImg}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Make Lease Contracts Clear and Simple Feeling overwhelmed by
                    complex lease contract terms? Worried about not fully
                    understanding what you're signing? This is where our app
                    comes in, designed to transform your lease contract
                    experience.
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h3">
                    Understanding the Unfathomable Our app breaks down lease
                    contracts into simple, easy-to-understand terms. No more
                    confusion when reading clauses and conditions - we make it
                    transparent and comprehensible. Whether you're renting your
                    first home or are an experienced tenant, our tool is your
                    ally in understanding every aspect of your contract.
                  </Typography>
                  <Typography>
                    Benefits of Using Our App:
                    <li>
                      *Clarity in Contracts: We turn complicated legal terms
                      into straightforward, accessible language.{" "}
                    </li>
                    <li>
                      *Identify Pros and Cons: We help you see the benefits and
                      potential pitfalls in contracts, enabling you to make
                      informed decisions.{" "}
                    </li>
                    <li>
                      *Reliable Support: We provide guidance and advice to
                      navigate the legal aspects of home leasing.{" "}
                    </li>
                    <li>
                      {" "}
                      *Informed Decision Making: With our help, you can feel
                      confident and prepared to make the best decision about
                      your housing.{" "}
                    </li>
                    <li>
                      *Join the community of users who have found peace of mind
                      and confidence in managing their lease contracts.
                    </li>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "100%",
                  }}
                  image={houseImg}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Understanding the Unfathomable Our app breaks down lease
                    contracts into simple, easy-to-understand term
                  </Typography>
                  <Typography>
                    No more confusion when reading clauses and conditions - we
                    make it transparent and comprehensible. Whether you're
                    renting your first home or are an experienced tenant, our
                    tool is your ally in understanding every aspect of your
                    contract. Benefits of Using Our App: Clarity in Contracts:
                    We turn complicated legal terms into straightforward,
                    accessible language. Identify Pros and Cons: We help you see
                    the benefits and potential pitfalls in contracts, enabling
                    you to make informed decisions. Reliable Support: We provide
                    guidance and advice to navigate the legal aspects of home
                    leasing. Informed Decision Making: With our help, you can
                    feel confident and prepared to make the best decision about
                    your housing. Join the community of users who have found
                    peace of mind and confidence in managing their lease
                    contracts. Download our app today and experience clarity at
                    every step of your journey to a new home!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
