import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { createClient } from "contentful"
import News from '../components/NewsList'


function createData(dato, hjemmehold, udehold, spillestedogbane) {
  return { dato, hjemmehold, udehold, spillestedogbane };
}

const rows = [
  createData('12/08/21 kl. 19:50', '2300 Flames IF', 'Blue Bears', 'Kløvermarken 7 - Kunst 41'),
  createData('23/08/21 kl. 19:50', '2300 Flames IF', 'Fox United', 'Kløvermarken 7 - Kunst 41'),
  createData('29/08/21 kl. 11:10', 'Minkbeskytterne', '2300 Flames IF', 'Valby idrætspark 7 - Kunst 41'),
  createData('11/09/21 kl. 10:00', 'Fingerbøllet BK', '2300 Flames IF', 'Kløvermarken 7 - Kunst 43'),
  createData('20/09/21 kl. 19:50', '2300 Flames IF', 'DIBS FC', 'Kløvermarken 7 - Kunst 42'),
  createData('27/09/21 kl. 21:00', 'Edura', '2300 Flames IF', 'Valby idrætspark 7 - Kunst 41'),
  createData('02/10/21 kl. 13:30', '2300 Flames IF', 'FC Hot Shot', 'Kløvermarken 7 - Kunst 42'),
  createData('11/10/21 kl. 18:40', 'Solens Børn', '2300 Flames IF', 'Kløvermarken 7 - Kunst 42'),
  createData('16/10/21 kl. 18:40', '2300 Flames IF', 'FC JURA OLDBOYS', 'Kløvermarken 7 - Kunst 42'),
  createData('23/10/21 kl. 13:50', 'Blue Bears', '2300 Flames IF', 'Valby idrætspark  7 - Kunst 45'),
  createData('30/10/21 kl. 11:10', '2300 Flames IF', 'De Røde Djævle', 'Kløvermarken 7 - Kunst 43'),

];

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "news" })

  return {
    props: {
      news: res.items
    }
  }

}

export default function BasicTable({ news }) {
  return (
    <>
      <Head>
        <title>FLAMMERNE | Forside</title>
        <meta name="keywords" content="FLAMMERNE" />
      </Head>
      
      <div className={styles.homecontainer}>
      <div className={styles.nyheder}>
          
          <h1 align="center" className={styles.heading}>Seneste nyheder</h1>
          <div className={styles.scrollBar}>
          {news.map(news => (
            <News key={news.sys.id} news={news} />
          ))}
        </div>
      </div>
        <div className="kampProgram">
        <h1 className={styles.heading}>Kommende kampe</h1>
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Dato</b></TableCell>
                  <TableCell align="center"><b>Hjemmehold</b></TableCell>
                  <TableCell align="center"><b>Udehold</b></TableCell>
                  <TableCell align="center"><b>Spillested og bane</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.dato}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.dato}
                    </TableCell>
                    <TableCell align="center">{row.hjemmehold}</TableCell>
                    <TableCell align="center">{row.udehold}</TableCell>
                    <TableCell align="right">{row.spillestedogbane}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h4><a href="https://resultater.dai-sport.dk/tms/Turneringer-og-resultater/Pulje-Stilling.aspx?PuljeId=679" target="_blank">Se stilling her</a></h4>
        </div>
      </div>
    </>
  );
}