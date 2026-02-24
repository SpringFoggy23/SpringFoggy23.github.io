const projects = [
    {
        id: "project-a",
        title: "Computer Fabrication",
        subtitle: "Course Project - Emily Whiting",
        description: "A project exploring computational fabrication techniques, implemented using Blender for 3D modeling and Onshape for CAD design. This project focuses on the intersection of software and physical manufacturing.",
        image: "/images/Result.jpg",
        images: ["/images/Result.jpg", "/images/Group.jpg"],
        tools: ["Blender", "Onshape"],
        links: {
            github: "https://github.com/SpringFoggy23",
            demo: "https://yourdemo.com/projectA",
            contact: "mailto:zsliu@bu.edu"
        },
        details: {
            timeline: [
                { phase: "Phase 1", date: "Week 1-2", description: "Design conceptualization and sketching." },
                { phase: "Phase 2", date: "Week 3-4", description: "3D Modeling in Blender." },
                { phase: "Phase 3", date: "Week 5-6", description: "CAD refinement in Onshape and fabrication prep." },
            ],
            challenges: [
                { title: "Complex Geometry", description: "Handling non-manifold geometry in Blender for 3D printing." },
                { title: "Tolerance Control", description: "Ensuring proper fit for assembled parts in Onshape." },
            ],
            stack: [
                { name: "Blender", type: "3D Modeling" },
                { name: "Onshape", type: "CAD" },
                { name: "Python", type: "Scripting (Blender API)" },
            ]
        }
    },
    {
        id: "real-time-defect-detection",
        title: "Real-Time Thermal Defect Detection",
        subtitle: "Research Project - DEBS 2025",
        description: "Improved a real-time defect detection system for laser powder bed fusion using Apache Kafka and Flink. Analyzed thermal grayscale images to identify saturated points and outliers, achieving 28× higher throughput and 7× lower latency than the baseline system implementation.",
        image: "/images/2025MayCertificate.JPG",
        images: ["/images/2025MayCertificate.JPG"],
        tools: ["Apache Kafka", "Apache Flink", "Java"],
        links: {
            paper: "https://dl.acm.org/doi/10.1145/3701717.3735574",
            contact: "mailto:zsliu@bu.edu"
        },
        details: {
            timeline: [
                { phase: "Research & Development", date: "Jan 2025 - May 2025", description: "System design, implementation, and performance analysis." },
            ],
            challenges: [
                { title: "High Throughput Processing", description: "Handling high-frequency thermal image streams for real-time analysis." },
                { title: "Latency Optimization", description: "Reducing system latency by 7x to enable immediate defect identification." },
            ],
            stack: [
                { name: "Apache Flink", type: "Stream Processing" },
                { name: "Apache Kafka", type: "Message Broker" },
                { name: "Java", type: "Programming Language" },
            ]
        }
    },
    // Add more projects here
];

export default projects;
