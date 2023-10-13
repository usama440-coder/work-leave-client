"use client";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    text: "Dashboard",
    path: "/",
    icon: <DashboardRoundedIcon />,
  },
  {
    text: "Employees",
    path: "/employee",
    icon: <CalendarMonthRoundedIcon />,
  },
  {
    text: "My Leaves",
    path: "/my-leaves",
    icon: <EditCalendarRoundedIcon />,
  },
  {
    text: "Leaves to Approve",
    path: "/leaves",
    icon: <CheckCircleRoundedIcon />,
  },
];

const DrawerList = () => {
  const path = usePathname();

  return (
    <div>
      <Toolbar />
      <List>
        {links.map((link) => {
          return (
            <ListItem
              component={Link}
              href={link.path}
              key={link.text}
              disablePadding
              selected={path === link.path}
              sx={{ color: "black" }}
            >
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
};

export default DrawerList;
