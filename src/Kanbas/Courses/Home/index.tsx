import ModuleList from "../Modules/List";
import SidePanel from "./SidePanel";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <h2>Modules</h2>
        <ModuleList />
      </div>
      <div className="course-status-buttons flex-grow-0 me-2 d-none d-lg-block status-column p-2">
        <SidePanel />
      </div>
    </div>
  );
}
export default Home;
