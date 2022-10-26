import { useState } from "react";
import "./console.css";
import { Box, Flex } from "@chakra-ui/react";
import Split from 'react-split-it'
import Terminal from "./terminal";
import Footer from "./footer";
import TabPanel from "./tabPanel"

export const ConsoleScreen = () => {
  const footerHeight = 50
  const termInitialSize = 35

  const [ terminalHeight, setTerminalHeight ] = useState(termInitialSize) // in %
  const [value, setValue] = useState(1)
  const [consoles, setConsoles] = useState([1])

  const newTerminal = (key, footerHeight, terminalHeight) => {
    return (
      <Terminal id={key} footerHeight={footerHeight} terminalHeight={terminalHeight} /> // to work on 1
    )
  }

  return(
    <Flex direction="column" justify="space-between" overflow="hidden" h="103vh">
      <Split className="split" direction="vertical" gutterSize={1} minSize={footerHeight} sizes={[1.0 - (terminalHeight/100), terminalHeight/100]} onSetSizes={(sizes) => { setTerminalHeight(sizes[1]*100)}}>
        <Box visibility="hidden" h="100%"></Box>  {/* to work on 2: why used? */}
        <Box h="100%">
          <Footer value={value} setValue={setValue} consoles={consoles} setConsoles={setConsoles} footerHeight={footerHeight} /> {/* to work on 3 */}
          {consoles.map((key) => {
            return(
              <TabPanel value={value} key={key} index={key}> {/* to work on 4 */}
                {newTerminal(key, footerHeight, terminalHeight)}
              </TabPanel>
            )
          })}
        </Box>
      </Split>
    </Flex>
  )
};
