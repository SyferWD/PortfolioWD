import {act, fireEvent, render, screen} from "@testing-library/react";
import ImgCarousel from "../ImgCarousel";
import { StaticImageData } from "next/image";

const mockImages = [
    { src : {src: '/images1.jpg'} as StaticImageData, alt: 'Image 1'},
    { src : {src: '/images2.jpg'} as StaticImageData, alt: 'Image 2'},
    { src : {src: '/images3.jpg'} as StaticImageData, alt: 'Image 3'},
]

describe("ImgCarousel Component Tests", () => {

    test("renders without crashing and displays correct number of images", () => {
        render(<ImgCarousel images={mockImages} />);
        const imageElements = screen.getAllByRole("img");
        expect(imageElements).toHaveLength(mockImages.length);
    });

    test("renders without crashing even if no images are provided", () => {
        render(<ImgCarousel images={[]} />);

        const imageElements = screen.queryAllByRole("img");
        expect(imageElements).toHaveLength(0);
    });

    test("clicking next button should update the index", () => {
        render(<ImgCarousel images={mockImages} />);

        const nextButton = screen.getByRole("button", {name: /next/i});
        fireEvent.click(nextButton)

        const currentImg = screen.getByRole("img", {name: /image 2/i});
        expect(currentImg).toBeInTheDocument();
    });

    test("clicking prev button should update the index", async() => {
        render(<ImgCarousel images={mockImages} />);

        await act(async() => {
            fireEvent.click(screen.getByRole('button', { name: /next/i }));
        });
        const prevButton = screen.getByRole("button", {name: /prev/i});
        await act(async() => {
            fireEvent.click(prevButton);
        })
        const currentImg = screen.getByRole("img", {name: /image 1/i});
        expect(currentImg).toBeInTheDocument();
    });

    test("automatic slide change after 5 seconds", async() => {
        jest.useFakeTimers();
        render(<ImgCarousel images={mockImages} />);
        
        await act(async() => {
            jest.advanceTimersByTime(5000)
        });

        const currentImg = screen.getByRole("img", {name: /Image 2/i});
        expect(currentImg).toBeInTheDocument();

        jest.useRealTimers();
    });

    test("swipe left to next image", () => {
        render(<ImgCarousel images={mockImages} />);

        fireEvent.touchStart(screen.getByTestId('carousel'), {
            touches: [{ clientX: 100}]
        });

        fireEvent.touchMove(screen.getByTestId('carousel'), {
            touches: [{ clientX: 0}]
        });

        fireEvent.touchEnd(screen.getByTestId('carousel'));

        const currentImg = screen.getByRole("img", { name: /image 2/i});
        expect(currentImg).toBeInTheDocument();
    })

    test("swipe right to next image", () => {
        render(<ImgCarousel images={mockImages} />);

        fireEvent.touchStart(screen.getByTestId('carousel'), {
            touches: [{ clientX: 0}]
        });

        fireEvent.touchMove(screen.getByTestId('carousel'), {
            touches: [{ clientX: 100}]
        });

        fireEvent.touchEnd(screen.getByTestId('carousel'));

        const currentImg = screen.getByRole("img", { name: /image 3/i});
        expect(currentImg).toBeInTheDocument();
    });

    test("clicking dot navigates to the corresponding image", () => {
        render(<ImgCarousel images={mockImages} />);

        const dotButton = screen.getAllByTestId("naviBtn")[1];
        fireEvent.click(dotButton);

        const currentImg = screen.getByRole("img", {name: /image 2/i});
        expect(currentImg).toBeInTheDocument();
    })

    test("clicking on dot navigates to the corresponding image and clicking next button after", () => {
        render(<ImgCarousel images={mockImages} />);

        const dotButton = screen.getAllByTestId("naviBtn")[1];
        fireEvent.click(dotButton);

        let currentImg = screen.getByRole("img", {name: /image 2/i});
        expect(currentImg).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {name: /next/i}));

        currentImg = screen.getByRole("img", {name: /image 3/i});
        expect(currentImg).toBeInTheDocument();
    })

    test("clicking on the next on the last image should navigate back to the first image", () => {
        render(<ImgCarousel images={mockImages} />);

        // click twice to simulate on the final image
        fireEvent.click(screen.getByRole("button", {name: /next/i}));
        fireEvent.click(screen.getByRole("button", {name: /next/i}));

        // click once more on the final image 
        fireEvent.click(screen.getByRole("button", {name: /next/i}));

        const currentImg = screen.getByRole("img", {name: /image 1/i});
        expect(currentImg).toBeInTheDocument();
    })
})