import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Estrelas.module.css'

import React, { useEffect, useState } from 'react';

import { fetchEstrelas } from '../../services/api';

const Estrelas = () => {

  const [estrelas, setEstrelas] = useState([]);

  const carregaEstrelas = async () => {
    try {
      const dadosEstrelas = await fetchEstrelas();
      setEstrelas(dadosEstrelas.estrelas);
      console.log(dadosEstrelas)
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  }

  useEffect(() => {
    carregaEstrelas()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className={styles.estrela}>
          {estrelas.map(e => (
            <div className={styles.divestrela}>
              <h1 className={styles.textType}>{e.nome}</h1>
              <p className={styles.textType}> Temperatura Média : {e.temperatura_media}</p>
              <p className={styles.textType}> Tipo de Estrela : {e.tipo}</p>
              <p className={styles.textType}> Distancia da terra :{e.distancia_da_terra}</p>
              <p className={styles.textType}> Tamanho da estrela :{e.tamanho}</p>
            </div>

          ))}
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Estrelas

/*"tipo": "A1V",
 "distancia_da_terra": "8.6 light-years",
 "tamanho": "1.7 million km (diâmetro)"
},
{*/