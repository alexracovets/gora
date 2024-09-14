import PropTypes from 'prop-types';
import Slider from "react-slick";

import SliderArrow from "../UI/SliderArrow/SliderArrow";

export default function SliderMobile({ children, styleName }) {

    const settings = {
        className: styleName,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        nextArrow: <SliderArrow isPrev={false} />,
        prevArrow: <SliderArrow isPrev={true} />
    };

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

SliderMobile.propTypes = {
    styleName: PropTypes.string,
    children: PropTypes.node
};