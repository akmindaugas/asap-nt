import React from 'react'
import PageTemplate from '../components/PageTemplate/PageTemplate'
import styles from "../styles/Home.module.css"
import {useRouter} from "next/router"




const Index = () => {
  const router = useRouter;

 

  

  return (
    <PageTemplate>

        <div className={styles.container} >


        </div>
    </PageTemplate>
  
  )
}

export default Index