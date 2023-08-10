"use client";
import { dividerClasses } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import "./GitHubDate.css"

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

// ...
function GitHubDate() {
  return (
    <div className="GitHubDate">
        <h1><span>GitHub </span>Calender</h1>
        <p>My Last 6 Month Activities</p>
      <GitHubCalendar
        username="md-hadiuzzaman-rifat"
        transformData={selectLastHalfYear}
        blockSize={20}
        hideColorLegend
        blockMargin={8}
        fontSize={20}
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
      />
    </div>
  );
}

export default GitHubDate;
