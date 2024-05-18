import {  extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import '@fontsource-variable/nunito'

const theme = extendTheme({
  fonts: {
    heading: `'Nunito Variable', sans-serif`,    body: `'Nunito Variable', sans-serif`,
  },
  styles:{
    global: (props) =>({
      "html, body":{
        background:mode("#F7F8FB","#F7F8FB")(props)
      }
    })
  }
})

export default theme