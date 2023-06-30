import React from 'react'
import {RichTextEditorComponent, HtmlEditor, Image, Link, Inject, QuickToolbar, Toolbar} from '@syncfusion/ej2-react-richtexteditor'

import { Header } from '../components'
import { EditorData } from '../data/dummy'

const Editor = () => {
  return (
    <div className='mt-20 m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl'>
    <Header category='App' title='Editor'/>

    <RichTextEditorComponent>
      {/* <EditorData/> //To Show Data  inside editor*/}
      <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
    </RichTextEditorComponent>

    </div>
  )
}

export default Editor