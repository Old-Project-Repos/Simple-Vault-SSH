import { ChakraProvider, theme } from "@chakra-ui/react";
import SidebarWithHeader from "../sidebar/sidebar";
import { ConsoleScreen } from "../console/console";
import Theme from "../../hooks/theme";
import './App.css'

export const App = () => (
  <ChakraProvider theme={theme}>
    <SidebarWithHeader>
      <Theme>
        <ConsoleScreen />
      </Theme>
    </SidebarWithHeader>
  </ChakraProvider>
);