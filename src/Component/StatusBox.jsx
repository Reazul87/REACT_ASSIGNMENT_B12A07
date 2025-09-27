import Container from "./Container";
import Img1 from "../assets/vector1.png";
import Img2 from "../assets/vector2.png";

const StatusBox = ({ resolved, inProgress }) => {

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-6 my-5">
        <div className="h-52 grid grid-cols-5 overflow-hidden rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <div
            style={{ backgroundImage: `url(${Img1})` }}
            className="col-span-2 bg-center bg-no-repeat bg-cover"
          ></div>
          <div className="col-span-1 text-white flex flex-col justify-center items-center">
            <h1>In-Progress</h1>
            <span className="text-6xl font-semibold">{inProgress.length}</span>
          </div>
          <div
            style={{ backgroundImage: `url(${Img2})` }}
            className="col-span-2 bg-cover bg-center bg-no-repeat"
          ></div>
        </div>
        <div className="h-52 grid grid-cols-5 overflow-hidden rounded-lg bg-gradient-to-r from-[#54CF68] to-[#00827A]">
          <div
            style={{ backgroundImage: `url(${Img1})` }}
            className="col-span-2 bg-center bg-no-repeat bg-cover"
          ></div>
          <div className="col-span-1 text-white flex flex-col justify-center items-center">
            <h1>Resolved</h1>
            <span className="text-6xl font-semibold">
              {resolved.length}
            </span>
          </div>
          <div
            style={{ backgroundImage: `url(${Img2})` }}
            className="col-span-2 bg-cover bg-center bg-no-repeat"
          ></div>
        </div>
      </div>
    </Container>
  );
};

export default StatusBox;
