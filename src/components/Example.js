import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, AspectRatio, Box, Typography } from '@material-ui/core';

const Example = () => {

    const data = [
        {
          src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
          title: 'Night view',
          description: '4.21M views',
        },
        {
          src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
          title: 'Lake view',
          description: '4.74M views',
        },
        {
          src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
          title: 'Mountain view',
          description: '3.98M views',
        },
    ];


    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
    };

    return (
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
        {data.map((item) => (
            <Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
            <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                <img
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.src}?h=120&fit=crop&auto=format`}
                alt={item.title}
                />
            </AspectRatio>
            <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
                <Typography level="title-md">{item.title}</Typography>
                <Typography level="body-sm">{item.description}</Typography>
            </Box>
            </Card>
        ))}
        </Carousel>
    );
};

export default Example;
