import React, { Component, Fragment } from "react";
import Banner from "../component/Banner/Banner";
import Carousel from "../component/Carousel/Carousel";
import Special from "../component/Special/Special";
import BannerBottom from "../component/BannerBottom/BannerBottom";
import Footer from "../component/Footer/Footer";
import BestSellerContainer from "../container/BestSellerContainer";
const img = {
  img1:
    "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-2327-cnew.jpg",
  img2:
    "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-2305-590x394.jpg",
};

const imgCarousel = [
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/3138-Desk.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2591-desk.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/slider-desktop.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2929-2.jpg",
];
export class HomePage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
      <Carousel imgCarousel={imgCarousel}  />
      <Banner img={img} />
      <BestSellerContainer  history={this.props.history}  productType={"bestSeller"} title="Best seller" />
      <Special />
      <BannerBottom />
      <Footer />
    </div>
    );
  }
}

export default HomePage;
