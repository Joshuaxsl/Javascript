const Thesis = [
  {
    title: "Inventory system",
    description: "A simple invertory for your store",
  },
  {
    title: "Exploring the Potential of Artificial Intelligence",
    description:
      "Exploring the Potential of Artificial Intelligence in Enhancing Personalized Healthcare: A Capstone Study",
  },
  {
    title:
      "3D Visualization of Conic Sections in XNA Game Programming Framework",
    description: "",
  },
  {
    title: "3D Immersive Environment for Visualising Robot Sensor Data",
    description: "",
  },
  {
    title: "A calibration system for a visual prosthesis",
    description: "",
  },
  {
    title:
      "A collaborative web-based genome browser for large-scale epigenomic analysis",
    description: "",
  },
  {
    title:
      " A Comparison of the Efficiency of an Atomic Component Operation versus Primitive Operations for Building a Real-Time Collaborative Editing API",
    description: "",
  },
  {
    title: "A covert channel based on weak memory",
    description: "",
  },
  {
    title: "A DSpace Mobile Theme for San Diego State University",
    description: "",
  },
  {
    title: "A Dynamic Database Approach for E-Commerce System Using WordPress",
    description: "",
  },
  {
    title:
      "A Flexible Test Interface and Grading Service For an AJAX Based Course Management System",
    description: "",
  },
  {
    title: "A Foundational model of the ARM11 Memory Management Unit",
    description: "",
  },
  {
    title: "A Household Mobile Robot",
    description: "",
  },
  {
    title: "A Journey through the Lattice",
    description: "",
  },
  {
    title:
      "A Method for Minimizing Computing Core Costs in Cloud Infrastructures That Host Location-Based Advertising Services",
    description: "",
  },
  {
    title:
      "A Mobile Application to Aid Consumers in Accessing Cost Effectiveness in Their Automobile",
    description: "",
  },
  {
    title: "3A Mobile Device-Controlled Blood Pressure Monitor",
    description: "",
  },
  {
    title:
      "A Mobile Tool about Causes and Distribution of Dramatic Natural Phenomena",
    description: "",
  },
  {
    title:
      "A new Operating System Design for the Argus Multiprocessor platform",
    description: "",
  },
  {
    title: "A New RAID Linux Flash File System",
    description: "",
  },
  {
    title: "A New Software Project Management Tool",
    description: "",
  },
  {
    title: "A PhD Thesis Submission/Examination System for UNSW",
    description: "",
  },
  {
    title: "A Preferential Voting System as a Collaboration Software Solution",
    description: "",
  },
  {
    title:
      "A service oriented cross-platform approach to perform thermodynamic calculations",
    description: "",
  },
  {
    title: "A System for Retrograde Analysis in Chess",
    description: "",
  },
  {
    title: "A System for Verifying Modularity in Action Theories",
    description: "",
  },
  {
    title: "A System to Assist with Teaching Allocation",
    description: "",
  },
  {
    title:
      "A usability Analysis of Privacy-preserving mobile applications through crowd sourcing",
    description: "",
  },
  {
    title: "A Voting Ballot Web Application as a Collaborative Support System",
    description: "",
  },
  {
    title: "ACP Automated Course Portal through Email",
    description: "",
  },
  {
    title: "Adaptive Content Replication in Peer to Peer Networks",
    description: "",
  },
  {
    title: "Adaptive E-learning",
    description: "",
  },
  {
    title: "Adaptive Low Bit Rate Video Streaming Over Wireless Networks",
    description: "",
  },
  {
    title: "Adaptive Server Selection in Peer-to-Peer Networks",
    description: "",
  },
  {
    title:
      "Advanced File Manager with Multiple Functions to Manipulate Files with Different Formats",
    description: "",
  },
  {
    title: "Advertisement Management System",
    description: "",
  },
  {
    title: "Airline Reservation System",
    description: "",
  },
  {
    title: "AJAX-based Process and Service Mashup",
    description: "",
  },
  {
    title: "Allocation problems in practice",
    description: "",
  },
  {
    title: "An AJAX Based Technical Forum for Thermodynamics Community",
    description: "",
  },
  {
    title: "An AJAX-Based Event Calendar for a Course Management System",
    description: "",
  },
  {
    title: "An Alternative Data Structure to Line Sweep Algorithm",
    description: "",
  },
  {
    title: "An Android Application for Crime Analysis in San Diego",
    description: "",
  },
  {
    title:
      "An Efficient Location Information Management System LIMS For Smartphone Applications",
    description: "",
  },
  {
    title: "An Insight on a Mobile Friendly Web",
    description: "",
  },
  {
    title:
      "An Intelligent Healthcare Data Management System for Mobile Environment",
    description: "",
  },
  {
    title:
      "An Interactive Economic GIS Tool for Europe Using Map Objects for Java",
    description: "",
  },
  {
    title: "An Interactive GIS Tool on Chinese History and Its Topography",
    description: "",
  },
  {
    title: "An Interactive GUI Design for Code Analysis",
    description: "",
  },
  {
    title:
      "An Interactive History and Geography of Mexico Using Map Objects for Java",
    description: "",
  },
  {
    title: "An Interactive Mitochondrial Database",
    description: "",
  },
  {
    title:
      "Analysing logs of super computers and data centres for anomaly detection",
    description: "",
  },
  {
    title:
      "Analysis and Classification of Time-Series X-Ray Crystallography Image Sequences",
    description: "",
  },
  {
    title: "Analysis and Debugging Techniques of Android Platform",
    description: "",
  },
  {
    title:
      "Analysis of next generation sequencing data of microbial communities",
    description: "",
  },
];

generateClick();
function randomGenerate() {
  const randomIndex = Math.floor(Math.random() * Thesis.length);
  const randomTitle = Thesis[randomIndex].title;
  return randomTitle;
}

function generateClick() {
  generatedTitle = randomGenerate();
  document.querySelector("#js-generate").innerHTML = generatedTitle;
}
function copyTitle() {
  const generatedTitle = document.querySelector("#js-generate").innerHTML;

  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  textarea.value = generatedTitle;
  document.body.appendChild(textarea);

  // Copy the text from the textarea
  textarea.select();
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Show notification
  const notification = document.querySelector("#js-notification");
  notification.innerHTML = "Title copied!";
  notification.style.display = "block";

  // Hide notification after 2 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 300);
}

// Add an event listener to the copy button
const copyButton = document.querySelector("#js-copy");
copyButton.addEventListener("click", copyTitle);
