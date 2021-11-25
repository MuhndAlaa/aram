import { useEffect } from "react";
import { BiHomeSmile, } from "react-icons/bi";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SideBar({ assigneeProjects, boards, setCurrentProject, setCurrentBoard }) {

  useEffect(() => {

  }, [boards])
  return (
    <div className="viewsSection ">
      <div className="sidebar close">
        <ul className="nav-links">
          <li>
            <button className="nav-links-item" to="/">
              <BiHomeSmile className="link-icon"></BiHomeSmile>
              <span className="link-name">Home</span>
            </button>
          </li>
          <li>
            <button className="nav-links-item">
              <BiHomeSmile className="link-icon"></BiHomeSmile>
              <span className="link-name">Notification</span>
            </button>
          </li>

          <li>
            {assigneeProjects?.map((project, i) => (
              <Accordion key={i}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                  <Typography onClick={() => { setCurrentProject(project.id) }}>{project.project}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {boards?.map((board, index) => (project.id === board.project_id ? <div onClick={() => { setCurrentBoard(board.id); setCurrentProject(project.id) }} className="text-black" key={index}>{board.board}</div> : null))}
                </AccordionDetails>
              </Accordion>
            )
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;