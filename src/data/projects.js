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
    // Add more projects here
];

export default projects;
