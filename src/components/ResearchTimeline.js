import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { Component } from "react";
import WorkIcon from "material-ui-icons/Work";
import SchoolIcon from "material-ui-icons/School";

const data = [
  {
    date: "2011 - present",
    title: "Creative Director",
    subtitle: "",
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    isWorking: true
  },

  {
    date: "2010 - 2011",
    title: "San Francisco, CA",
    subtitle: "",
    description: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
    isWorking: true
  },
  {
    date: "2008 - 2010",
    title: "Web Designer",
    subtitle: "Los Angeles, CA",
    description: "User Experience, Visual Design",
    isWorking: true
  },
  {
    date: "April 2013",
    title: "Content Marketing for Web, Mobile and Social Media",
    subtitle: "Online Course",
    description: "Strategy, Social Media",
    isWorking: false
  },
  {
    date: "November 2012",
    title: "Agile Development Scrum Master",
    subtitle: "Certification",
    description: "Creative Direction, User Experience, Visual Design",
    isWorking: false
  },
  {
    date: "2002 - 2006",
    title: "Bachelor of Science in Interactive Digital Media Visual Imaging",
    subtitle: "Bachelor Degree",
    description: "Creative Direction, Visual Design",
    isWorking: false
  },
];
class ResearchTimeline extends Component {

  /**
   * Render single item with date, title and description
   * @param {*} item 
   * <SchoolIcon />
   */
  renderResearchItem(item) {
    return (
      <VerticalTimelineElement
        className={item.isWorking ? "vertical-timeline-element--work" : "vertical-timeline-element--education"}
        date={item.date}
        iconStyle={{ background: item.isWorking ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)", color: "#fff" }}
        icon={item.isWorking ? <WorkIcon /> : <SchoolIcon />}>
        <h3 className="vertical-timeline-element-title"> {item.title} </h3>
        <h4 className="vertical-timeline-element-subtitle"> {item.subtitle} </h4>
        <p> {item.description}</p>
      </VerticalTimelineElement>);
  }
  render() {
    return (
      <div >
        <VerticalTimeline animate={true}>
          {this.renderResearchItem(data[0])}
          {this.renderResearchItem(data[1])}
          {this.renderResearchItem(data[2])}
          {this.renderResearchItem(data[3])}
          {this.renderResearchItem(data[4])}
          {this.renderResearchItem(data[5])}
        </VerticalTimeline>
      </div>
    );
  }
}

export default ResearchTimeline;
