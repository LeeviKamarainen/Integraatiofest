import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';

import logo from '../assets/images/taustakuva.png'
import logo2 from '../assets/images/title.png'

const Example = () => {

    const data = [
        {
          src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
          title: '1',
          description: '4.21M views',
        },
        {
          src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
          title: '2',
          description: '4.74M views',
        },
        {
          src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
          title: '3',
          description: '3.98M views',
        },
        {
            src: logo,
            title: '4',
            description: '32M views',
        },
        {
            src: logo2,
            title: '5',
            description: '333M views',
        }
        
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
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="ease-in-out"
            transitionDuration={200}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
        {data.map((item) => (
            <Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
            <AspectRatio ratio="1" sx={{ minWidth: 60, m: 5 }}>
                <img
                src={item.src}
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
