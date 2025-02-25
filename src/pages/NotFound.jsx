import NotFoundImg from "../assets/img/NotFoundImg.png";

function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-8 pt-24">
        <img className="w-1/3" src={NotFoundImg} />
        <p className="pl-8 text-xl font-semibold">404 not found page</p>
      </div>
    </div>
  );
}

export default NotFound;
