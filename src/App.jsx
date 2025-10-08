import background from "@assets/background.svg";
import "@assets/css/index.css";
import { Route, Routes } from "react-router-dom";
import AddTabs from "./pages/components/AddTabs";
import ContentView from "./pages/ContentView";
import DashboardContent from "./pages/DashboardContent";
import LibraryContent from "./pages/LibraryContent";
import LinuxConfiguration from "./pages/LinuxConfiguration";
import NotFound from "./pages/NotFound";
import Standards from "./pages/Standards";
import FooterNavigation from "./pages/components/FooterNavigation";

export default function App() {
  return (
    <div id="container">
      <img id="background" alt={"Lion-Packages"} src={background} />

      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<DashboardContent />} />

        <Route path="standards" element={<Standards />} />

        <Route path="linux-configuration" element={<LinuxConfiguration />} />

        <Route path="docs">
          <Route path="framework">
            <Route path=":item_version/:tab" element={<AddTabs />}>
              <Route path=":code" element={<ContentView />} />
            </Route>
          </Route>

          <Route path="library">
            <Route path="content" element={<LibraryContent />} />

            <Route path=":library/:item_version/:tab" element={<AddTabs />}>
              <Route path=":code" element={<ContentView />} />
            </Route>
          </Route>
        </Route>
      </Routes>

      <FooterNavigation />
    </div>
  );
}
