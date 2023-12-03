import { Link, Typography } from "@mui/material";

const Copyright = (props) => {
  return (
    <Link color="inherit" href="/">
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        PDF assistant {new Date().getFullYear()}
        {"."}
      </Typography>
    </Link>
  );
};

export default Copyright;
