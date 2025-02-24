import { render, screen } from "@testing-library/react";
import { Projects } from "../Projects";
import { projectsData } from "../projectsData";


describe("Projects Component", () => {

    test("renders the section title", () => {
        render(<Projects projectsData={projectsData}/>);
        const titleElement = screen.getByText("Projects I Worked On");
        expect(titleElement).toBeInTheDocument();
    });

    test("renders correctly when there is no project data", () => {
        render(<Projects projectsData={[]} />);
        
        const sectionElement = screen.getByText("Projects I Worked On");
        expect(sectionElement).toBeInTheDocument();

        const projectElements = screen.queryAllByRole("article");
        expect(projectElements).toHaveLength(0);
    })

    test("renders all project titles as links", () => {
        render(<Projects projectsData={projectsData}/>);
        projectsData.forEach((project) => {
            const linkElement = screen.getByRole("link", {name: project.title});
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute("href", project.url);
            expect(linkElement).toHaveAttribute("target", "_blank");
            expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
        })
    });

    test("renders project summaries", () => {
        render(<Projects projectsData={projectsData}/>);
        projectsData.forEach((project) => {
            const summaryElement = screen.getByText(project.summary);
            expect(summaryElement).toBeInTheDocument();
        });
    });

    test("renders tech stack for each project", () => {
        render(<Projects projectsData={projectsData}/>);
        projectsData.forEach((project) => {
            project.techStack.forEach((tech) => {
                const techElement = screen.getByText(tech);
                expect(techElement).toBeInTheDocument();
            });
        });
    });

    test("renders correctly if a project has no tech stack", () => {
        const modifiedProjectsData = [...projectsData];
        modifiedProjectsData.forEach(data => (data.techStack = []));
        render(<Projects projectsData={modifiedProjectsData}/>);

        const techStackElements = screen.getAllByTestId("techStack");
        techStackElements.forEach((techStackElement) => {
            expect(techStackElement.children.length).toBe(0);
        })
    })

    test("renders an image carousel for each project", () => {
        render(<Projects projectsData={projectsData}/>);
        const carouselElements = screen.getAllByTestId("carousel");

        carouselElements.forEach((carouselElement, index) => {
            const images = carouselElement.querySelectorAll("img");
            expect(images.length).toBe(projectsData[index].img.length);
        })
    })

    test("renders no images if no images are provided", () => {
        const modifiedProjectsData = [...projectsData];
        modifiedProjectsData.forEach(data => (data.img = []));
        render(<Projects projectsData={modifiedProjectsData}/>);

        const carouselElements = screen.getAllByTestId("carousel");

        carouselElements.forEach((carouselElement) => {
            const images = carouselElement.querySelectorAll("img");
            expect(images.length).toBe(0);
        })
    })

    
});

