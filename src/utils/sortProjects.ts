interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    technologies: string[];
}

export function sortProjects(projects: Project[]) {
    const projectArray: Project[] = [];
    const reversedProjectArray: Project[] = [];

    projects.forEach((project, index) => {
        if (index % 2 === 0) {
            projectArray.push(project);
        } else {
            reversedProjectArray.push(project);
        }
    });

    return { projectArray, reversedProjectArray };
}