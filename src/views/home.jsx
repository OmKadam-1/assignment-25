import FeatureSection from "../components/feauture";
import ImgMainHeader from "./../assets/main-header.jpg";
import Button from "./../components/button";

import Footer from "./../components/footer";
import Navbar from "./../components/navbar";

import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="min-h-screen">
        <div className="flex flex-col md:flex-row items-center">
         
          <div>
            <h1 className="text-[40px]! text-center md:text-[70px]! text-[#e69100]">
              Here is what you need to stay healthy
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
              <Button
                title={"Explore Now"}
                onClick={() => {
                  navigate("/vegetables");
                }}
                variant="primary"
                size="medium"
              />

              <Button title={"Call Us"} variant="tertiary" size="medium" />
            </div>
          </div>
        </div>

        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;