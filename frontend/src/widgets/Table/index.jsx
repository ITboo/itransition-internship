import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useTranslation} from 'react-i18next'

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.isbn}</TableCell>
        <TableCell align="right">{row.title}</TableCell>
        <TableCell align="right">{row.author}</TableCell>
        <TableCell align="right">{row.publisher}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Stack
                direction="row"
                spacing={3}
                sx={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <img
                    src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855898.jpg"
                    alt=""
                    width={200}
                  />
                  <Stack
                direction="row"
                spacing={3}
                sx={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <FavoriteIcon /> {row.likes}
              </Stack>
                  
                </Box>
                <Box>
                  <Typography variant="h4" gutterBottom component="div">
                    {row.title}
                  </Typography>
                  <Typography variant="h5" gutterBottom component="div">
                    by {row.author}
                  </Typography>
                  <Typography variant="h6" gutterBottom component="div">
                    {row.publisher}
                  </Typography>{" "}
                  <Box>
                    {row.reviews.map((review) => (
                      <Box>
                        <Typography>{review.date}</Typography>
                        <Typography>{review.text}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ books }) {
  const {t} = useTranslation()
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>#</TableCell>
            <TableCell align="right">ISBN</TableCell>
            <TableCell align="right">{t('title')}</TableCell>
            <TableCell align="right">{t('author')}</TableCell>
            <TableCell align="right">{t('publisher')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
