import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const links = [
  {
    text: "Dashboard",
    path: "/",
    icon: <DashboardRoundedIcon />,
  },
  {
    text: "Employees",
    path: "/employees",
    icon: <CalendarMonthRoundedIcon />,
  },
  {
    text: "My Leaves",
    path: "/",
    icon: <EditCalendarRoundedIcon />,
  },
  {
    text: "Leaves to Approve",
    path: "/leaves",
    icon: <CheckCircleRoundedIcon />,
  },
];

export const drawer = (
  <div>
    <Toolbar />
    <List>
      {links.map((link) => {
        return (
          <ListItem key={link.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  </div>
);
