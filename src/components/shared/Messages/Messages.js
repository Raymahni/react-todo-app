import "./Messages.css";
import person1 from "../../../assets/images/thumb-1.jpg";
import person2 from "../../../assets/images/thumb-2.jpg";

function Messages() {
  return (
    <div className="Messages-area">
      <h3 className="text-green m-b-5">Messages</h3>
      <ul className="p-l-0">
        <li className="Message-item d-flex align-center">
          <div className="Image m-r-4">
            <img src={person1} alt="Person 1" />
          </div>
          <div className="Text">
            <h4 className="text-green m-t-0 m-b-1">Chris Webber</h4>
            <p className="text-gray m-y-0 font-2">Hi Micheal! How are you?</p>
          </div>
        </li>
        <li className="Message-item d-flex align-center">
          <div className="Image m-r-4">
            <img src={person2} alt="Person 2" />
          </div>
          <div className="Text">
            <h4 className="text-green m-t-0 m-b-1">Kelvin Durant</h4>
            <p className="text-gray m-y-0 font-2">Do you need that design?</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Messages;
