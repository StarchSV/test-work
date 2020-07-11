import React, {useEffect, useState} from 'react'
import {Header} from "./src/components/Header";
import {Loader} from "./src/components/Loader";
import {Gallery} from "./src/components/Gallery";
import {Grid} from "./src/components/Grid";
import {Form} from "./src/components/Form";
import {Footer} from "./src/components/Footer";

export const App = (props) => {
  const [loading, setLoading] = useState(true)
  const [appState, setAppState] = useState('')
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/alexandrov-va/7f353ca822d074d7ce22d3af3d13696f/raw/0907091de6fedf6153cdb718f32a4215dc2c53cf/page.json')
        .then(res => res.json())
        .then(response => {setAppState(response)})
    setLoading(false)
  }, [])

  return (
    <>
      <Header/>
      { loading || !appState ? <Loader/> :
        <>
          <div className='mb-md-5 m-sm-3'>
            <Gallery galleryState={appState.components[0].metadata}/>
            <Grid gridState={appState.components[1].metadata}/>
            <Form formState={appState.form}/>
          </div>
          <Footer/>
        </>
      }
    </>
  )
}